import axios from 'axios';
import Web3 from 'web3';
import BigNumber from 'big-number';

import { fn } from '../../utils/api';
import { getFactoryRegistry, getMultiCall } from '../../utils/getters';
import registryAbi from '../../constants/abis/factory_registry.json';
import multicallAbi from '../../constants/abis/multicall.json';
import erc20Abi from '../../constants/abis/erc20.json';

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);


export default fn(async () => {

    let lpTokenUSD = '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490'
    let lpTokenbBTC = '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3'

    let registryAddress = await getFactoryRegistry()
    let multicallAddress = await getMultiCall()
  	let registry = new web3.eth.Contract(registryAbi, registryAddress);
  	let poolCount = await registry.methods.pool_count().call();
  	let multicall = new web3.eth.Contract(multicallAbi, multicallAddress)

  	//get pool addresses
  	let calls = []
  	for (var i = 0; i < poolCount; i++) {
  		calls.push([registryAddress, registry.methods.pool_list(i).encodeABI()])
  	}
  	let aggcalls = await multicall.methods.aggregate(calls).call()
  	let poolList = aggcalls[1].map(hex => web3.eth.abi.decodeParameter('address', hex))

  	//get coin 0
  	calls = []
  	poolList.map(async(pool_address) => {
  		calls.push([pool_address, '0xc66106570000000000000000000000000000000000000000000000000000000000000000']) //coins(0) to get pool type
      calls.push([pool_address, '0xc66106570000000000000000000000000000000000000000000000000000000000000001']) //coins(1) to get pool type
  	})

  	aggcalls = await multicall.methods.aggregate(calls).call()

    let coinList = [];
    let lpCoinList = [];

    let poolTypes = [];
    let data = aggcalls[1];
    for (var i = 0; i < aggcalls[1].length; i++) {
      let coinAddress = web3.eth.abi.decodeParameter('address', data[i])
      coinList.push(coinAddress)
      i++

      let lpToken = web3.eth.abi.decodeParameter('address', data[i])
      let poolType = 'USD'
      if (lpToken == lpTokenbBTC) {
        poolType = 'BTC'
      }
      lpCoinList.push(lpToken)
      poolTypes.push(poolType)
    }


  	//get decimals and balance
  	calls = []
  	coinList.map(async(coin_address, index) => {
  		let erc20Contract = new web3.eth.Contract(erc20Abi, coin_address)
  		calls.push([coin_address, '0x313ce567']) //decimals
      calls.push([coin_address, '0x95d89b41']) //symbol
  		calls.push([coin_address, erc20Contract.methods.balanceOf(poolList[index]).encodeABI()]) //balance of pool
      calls.push([lpCoinList[index], erc20Contract.methods.balanceOf(poolList[index]).encodeABI()]) //balance of pool

  	})


    let poolData = [];
    let factoryTotal0 = 0;
    let factoryTotal1 = 0;

  	let balanceData = await multicall.methods.aggregate(calls).call()
  	balanceData = balanceData[1]
    let poolIndex = 0;
  	for (var i = 0; i < coinList.length * 4; i++) {
  		let decimals = web3.eth.abi.decodeParameter('uint8', balanceData[i])
  		i++
  		let symbol = web3.eth.abi.decodeParameter('string', balanceData[i])
      i++
      let balance = web3.eth.abi.decodeParameter('uint256', balanceData[i])
      let balanceFormatted = balance / 10 ** decimals
      i++
      let lpBalance = web3.eth.abi.decodeParameter('uint256', balanceData[i])
      let lpBalanceFormatted = lpBalance / 10 ** 18

      let lpToken = lpTokenUSD
      if (poolTypes[poolIndex] == 'BTC') {
        lpToken = lpTokenbBTC
      }
      factoryTotal0 += balanceFormatted
      factoryTotal1 += lpBalanceFormatted

      let poolBalanceTotal = lpBalanceFormatted + balanceFormatted

      let poolInfo = {
        'address': poolList[poolIndex],
        'symbol': symbol,
        'decimals': decimals,
        'balance': balance,
        'balanceFormatted': balanceFormatted.toFixed(2),
        'lpBalance': lpBalance,
        'lpBalanceFormatted': lpBalanceFormatted.toFixed(2),
        'poolType': poolTypes[poolIndex],
        'lpToken': lpToken,
        'poolBalanceTotal': poolBalanceTotal.toFixed(2)
      }
      poolIndex++
      poolData.push(poolInfo)

  	}

    let totals = {
      '0': factoryTotal0.toFixed(2),
      '1': factoryTotal1.toFixed(2),
      'totalIncludingLP': parseFloat(factoryTotal1 + factoryTotal0).toFixed(2)
    }

    return { poolData, totals };

}, {
  maxAge: 20,
});
