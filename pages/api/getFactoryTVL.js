import axios from 'axios';
import Web3 from 'web3';
import { fn } from '../../utils/api';
import registryAbi from '../../constants/abis/registry.json';

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const registry_address = '0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F';


export default fn(async () => {


  	let registry = new web3.eth.Contract(factory_registry_abi, factory_registry);
  	let poolCount = await registry.methods.pool_count().call();
  	let multicall = new web3.eth.Contract(multicall_abi, multicall_address)

  	state.totalFactory = poolCount
  	//get pool addresses
  	let calls = []
  	for (var i = 0; i < poolCount; i++) {
  		calls.push([factory_registry, registry.methods.pool_list(i).encodeABI()])
  	}
  	let aggcalls = await multicall.methods.aggregate(calls).call()
  	let poolList = aggcalls[1].map(hex => web3.eth.abi.decodeParameter('address', hex))

  	//get coin 0
  	calls = []
  	poolList.map(async(pool_address) => {
  		calls.push([pool_address, '0xc66106570000000000000000000000000000000000000000000000000000000000000000']) //balances(0)
  	})
  	aggcalls = await multicall.methods.aggregate(calls).call()
  	let coinList = aggcalls[1].map(hex => web3.eth.abi.decodeParameter('address', hex))

  	//get decimals and balance
  	calls = []
  	coinList.map(async(coin_address, index) => {
  		let erc20Contract = new web3.eth.Contract(ERC20_abi, coin_address)
  		calls.push([coin_address, '0x313ce567']) //decimals
  		calls.push([coin_address, erc20Contract.methods.balanceOf(poolList[index]).encodeABI()]) //balance of pool
  	})
  	let balanceData = await multicall.methods.aggregate(calls).call()
  	balanceData = balanceData[1]

  	let factoryBalances = 0;
  	for (var i = 0; i < coinList.length * 2; i++) {
  		let decimals = web3.eth.abi.decodeParameter('uint8', balanceData[i])
  		i++
  		let balance = web3.eth.abi.decodeParameter('uint256', balanceData[i])
  		factoryBalances += +BN(balance).div(10 ** decimals)
  	}

  	state.totalFactory = factoryBalances
  	return factoryBalances

  return { price };
}, {
  maxAge: 20,
});
