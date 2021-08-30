import getAPY from 'utils/data/getAPY';
import getCRVAPY from 'utils/data/getCRVAPY';
import getCurveRewards from 'utils/data/getCurveRewards';
import {arrayToHashmap} from 'utils/Array';
import pools from 'constants/pools';
import {fn} from '../../utils/api';

import {ethers} from 'ethers';
import {Provider, Contract} from 'ethers-multicall';
import axios from 'axios';

const STACKER = '0x989AEb4d175e16225E39E87d0D97A3360524AD80';
const LENS = '0x83d95e0D5f402511dB06817Aff3f9eA88224B030'; // to get 3crypto price
const CONVEX_BOOSTER = '0xF403C135812408BFbE8713b5A23a04b3D48AAE31';

// async function checkConvexPoolsRewards() {
// 	const	extraRewardsLength = new ethers.Contract(allPools[index][3], [
// 		'function extraRewardsLength() public view returns (uint256)'
// 	], provider);
// 	const	numberOfExtraRewards = Number(await extraRewardsLength.extraRewardsLength());
// 	if (numberOfExtraRewards > 0) {
// 		const	extraRewardsMulti = new Contract(allPools[index][3], [
// 			'function extraRewards(uint256) public view returns (address)'
// 		]);
// 		const	ethcallProviderExtraRewards = new Provider(provider);
// 		const	ethcallProviderExtraRewardsCalls = [];
// 		for (let i = 0; i < numberOfExtraRewards; i++) {
// 			ethcallProviderExtraRewardsCalls.push(extraRewardsMulti.extraRewards(i));
// 		}
// 		await	ethcallProviderExtraRewards.init();
// 		const	extraRewarders = await ethcallProvider.all(ethcallProviderExtraRewardsCalls);
// 		// convexAddress[poolId].extraRewards = await ethcallProvider.all(preparedCall);

// 		const	listOfUnderlyingCalls = [];
// 		const	extraRewardersUnderlying = new Provider(provider);
// 		for (let i = 0; i < extraRewarders.length; i++) {
// 			const	contract = new Contract(extraRewarders[i], [
// 				'function rewardToken() public view returns (address)',
// 			]);
// 			listOfUnderlyingCalls.push(contract.rewardToken());
// 		}
// 		await	extraRewardersUnderlying.init();
// 		const	listOfUnderlying = await extraRewardersUnderlying.all(listOfUnderlyingCalls);

// 		convexAddress[poolId].extraRewards = [];
// 		for (let i = 0; i < extraRewarders.length; i++) {
// 			convexAddress[poolId].extraRewards.push({
// 				underlying: listOfUnderlying[i],
// 				rewarder: extraRewarders[i],
// 			});
// 		}
// 	}
// }


async function	getConvex() {
	const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY);

	/**********************************************************************
	**	First thing we need to do is to build a provider for the CVX
	**	Booster contract.
	**	The address is 0xF403C135812408BFbE8713b5A23a04b3D48AAE31.
	**
	**	We will need first to get the number of pools to then prepare a
	**	multicall to get the info of each pool.
	**********************************************************************/
	const	convexBoosterContract = new ethers.Contract(CONVEX_BOOSTER, [
		'function poolLength() public view returns (uint256)'
	], provider);
	const	convexBoosterContractMulti = new Contract(CONVEX_BOOSTER, [
		'function poolInfo(uint256) public view returns (address, address, address, address, address, bool)'
	]);

	/**********************************************************************
	**	Once we have the number of pools, we can get the info of each pool
	**	with a multicall process. They will be stored in an array and will
	**	follow this structure :
	**	[
	**		address lptoken,
	**		address token,
	**		address gauge,
	**		address crvRewards,
	**		address stash,
	**		bool shutdown,
	**	]
	**********************************************************************/
	const	poolLength = Number(await convexBoosterContract.poolLength());
	const	ethcallProvider = new Provider(provider);
	const	preparedCall = [];
	for (let index = 0; index < poolLength; index++) {
		preparedCall.push(convexBoosterContractMulti.poolInfo(index));
	}
	await	ethcallProvider.init();
	const	allPools = await ethcallProvider.all(preparedCall);

	const	convexAddress = {};
	for (let index = 0; index < allPools.length; index++) {
		const	poolId = pools.find(e => (e.addresses?.lpToken).toLowerCase() === (allPools[index][0]).toLowerCase())?.id;
		if (poolId) {
			convexAddress[poolId] = {
				cvxToken: allPools[index][1],
				crvRewards: allPools[index][3],
			};
			// checkConvexPoolsRewards();
		}
	}
	
	return convexAddress;
}

async function getTVL() {
	const {data: prices} = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${['ethereum', 'bitcoin', 'chainlink', 'stasis-eurs']}&vs_currencies=usd`);
	const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY);
	const ethcallProvider = new Provider(provider);
	await ethcallProvider.init();
	const poolsAddress = [];
	const STACKER_CONTRACT = new Contract(STACKER, ['function balanceOfPool(address) public view returns (uint256)']);

	const LP_TOKEN = '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF';
	const magicContract = new ethers.Contract(LENS, ['function getNormalizedValueUsdc(address, uint256) public view returns (uint256)'], provider);
	const priceUSDC = await magicContract.getNormalizedValueUsdc(LP_TOKEN, '1000000000000000000');
	const triCryptoPrice = ethers.utils.formatUnits(priceUSDC, 6);

	pools.forEach((pool) => {
		if (pool.hasNoGauge) {
			return;
		}
		const MINTER_CONTRACT = new Contract(pool.addresses.swap, [
			'function get_virtual_price() public view returns (uint256)',
		]);

		poolsAddress.push(STACKER_CONTRACT.balanceOfPool(pool.addresses.gauge));
		poolsAddress.push(MINTER_CONTRACT.get_virtual_price());
	});
	const results = await ethcallProvider.all(poolsAddress);
	const tvl = {};
	const vsPrices = {};

	let i = 0;
	pools.forEach((pool) => {
		const balanceOf = ethers.utils.formatEther(results[i]);
		const virtualPrice = ethers.utils.formatEther(results[i + 1]);
		let vsPrice = 1;
		if (pool.referenceAsset === 'btc') {
			vsPrice = prices.bitcoin.usd;
		} else if (pool.referenceAsset === 'eth') {
			vsPrice = prices.ethereum.usd;
		} else if (pool.referenceAsset === 'link') {
			vsPrice = prices.chainlink.usd;
		} else if (pool.referenceAsset === 'eur') {
			vsPrice = prices['stasis-eurs'].usd;
		} else if (pool.referenceAsset === 'crypto') {
			vsPrice = triCryptoPrice;
		}
		tvl[pool.id] = Number(balanceOf).toFixed(4) * Number(virtualPrice).toFixed(4) * vsPrice;
		vsPrices[pool.id] = vsPrice;
		i += 2;
	});
	return {tvl, vsPrices};
}

export default fn(async ({address}) => {
	const [
		additionalRewards,
		{weeklyApy: baseApys},
		{CRVAPYs: crvApys, boosts, CRVprice: crvPrice},
		{tvl, vsPrices},
		convex
	] = await Promise.all([
		getCurveRewards(),
		getAPY(),
		getCRVAPY(address || '0x0000000000000000000000000000000000000000'),
		getTVL(),
		getConvex()
	]);

	return {pools: arrayToHashmap(pools.map((pool, index) => [pool.id, {
		id: pool.id,
		name: pool.name,
		cgID: pool.coingeckoInfo?.id,
		addresses: {
			underlying: pool.addresses.underlying,
			swap: pool.addresses.swap,
			lpToken: pool.addresses.lpToken,
			gauge: pool.addresses.gauge,
			deposit: pool.addresses.deposit,
			migrator: pool.addresses.migrator,
			convex: convex?.[pool.id] || {}
		},
		baseApy: baseApys[index],
		crvApy: crvApys[pool.id],
		crvBoost: boosts[pool.id],
		tvl: tvl[pool.id],
		price: vsPrices[pool.id],
		additionalRewards: pool.additionalRewards.map(({key, name, rewardTokenAddress, rewardTokenDecimals, convexRewarder}) => ({
			name,
			address: rewardTokenAddress,
			convexRewarder: convexRewarder,
			decimals: rewardTokenDecimals,
			apy: additionalRewards[key || name]?.rewards,
		})),
		crvPrice,
	}]))};
}, {maxAge: 10 * 60});
