import axios from 'axios';
import Web3 from 'web3';
import BigNumber from 'big-number';

import {fn} from '../../utils/api';
import {getFactoryRegistry, getMultiCall} from '../../utils/getters';
import registryAbi from '../../constants/abis/factory_registry.json';
import multicallAbi from '../../constants/abis/multicall.json';
import erc20Abi from '../../constants/abis/erc20.json';

const web3 = new Web3(`https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`);

export default fn(async () => {
	const registryAddress = await getFactoryRegistry();
	const multicallAddress = await getMultiCall();
	const registry = new web3.eth.Contract(registryAbi, registryAddress);
	const poolCount = await registry.methods.pool_count().call();
	const multicall = new web3.eth.Contract(multicallAbi, multicallAddress);

	// get pool addresses
	let calls = [];
	for (let i = 0; i < poolCount; i += 1) {
		calls.push([registryAddress, registry.methods.pool_list(i).encodeABI()]);
	}
	let aggcalls = await multicall.methods.aggregate(calls).call();
	const poolList = aggcalls[1].map((hex) => web3.eth.abi.decodeParameter('address', hex));

	// get coin 0
	calls = [];
	poolList.map(async (poolAddress) => {
		calls.push([poolAddress, '0xc66106570000000000000000000000000000000000000000000000000000000000000000']); // balances(0)
	});

	aggcalls = await multicall.methods.aggregate(calls).call();
	let coinList = aggcalls[1].map((hex) => web3.eth.abi.decodeParameter('address', hex));

	// get decimals and balance
	calls = [];
	coinList = coinList.filter((item) => item !== '0x95dFDC8161832e4fF7816aC4B6367CE201538253');

	coinList.map(async (coinAddress, index) => {
		const erc20Contract = new web3.eth.Contract(erc20Abi, coinAddress);
		calls.push([coinAddress, '0x313ce567']); // decimals
		calls.push([coinAddress, erc20Contract.methods.balanceOf(poolList[index]).encodeABI()]); // balance of pool
	});

	let balanceData = await multicall.methods.aggregate(calls).call();
	balanceData = balanceData[1];
	let factoryBalances = 0;
	for (let i = 0; i < coinList.length * 2; i += 1) {
		const decimals = web3.eth.abi.decodeParameter('uint8', balanceData[i]);
		i += 1;
		const balance = web3.eth.abi.decodeParameter('uint256', balanceData[i]);
		factoryBalances += +BigNumber(balance).div(10 ** decimals);
	}

	return {factoryBalances};
}, {
	maxAge: 30, // 30s
});
