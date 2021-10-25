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
const TANG_BOOSTER = '0xF403C135812408BFbE8713b5A23a04b3D48AAE31';
const CRV_REWARD_ADDR = '0x3Fe65692bfCD0e6CF84cB1E7d24108E434A7587e';
const CONVEX_ADDR = '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B';

async function	getTangAndConvex() {
	const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY);

	/**********************************************************************
	**	First thing we need to do is to build a provider for the CVX
	**	Booster contract.
	**	The address is 0xF403C135812408BFbE8713b5A23a04b3D48AAE31.
	**
	**	We will need first to get the number of pools to then prepare a
	**	multicall to get the info of each pool.
	**********************************************************************/
	const	convexBoosterContract = new ethers.Contract(CONVEX_BOOSTER, ['function poolLength() public view returns (uint256)'], provider);
	const	convexBoosterContractMulti = new Contract(CONVEX_BOOSTER, ['function poolInfo(uint256) public view returns (address, address, address, address, address, bool)']);

	/**********************************************************************
	**	Then we need to do the same with the Tang Booster contract.
	**	The address is 0x000000000.
	**
	**	We will need first to get the number of pools to then prepare a
	**	multicall to get the info of each pool.
	**********************************************************************/
	const	tangBoosterContract = new ethers.Contract(TANG_BOOSTER, ['function poolLength() public view returns (uint256)'], provider);
	const	tangBoosterContractMulti = new Contract(TANG_BOOSTER, ['function poolInfo(uint256) public view returns (address, address, address, address, address, bool)']);

	/**********************************************************************
	**	And then it would be nice to have the supply of CRV available
	**********************************************************************/
	const	tangCRVSupply = new Contract(CRV_REWARD_ADDR, ['function totalSupply() public view returns (uint256)']);
	const	convexSupply = new Contract(CONVEX_ADDR, ['function totalSupply() public view returns (uint256)']);

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
	const	tangPoolLength = Number(await tangBoosterContract.poolLength());
	const	cvxPoolLength = Number(await convexBoosterContract.poolLength());
	const	ethcallProvider = new Provider(provider);
	const	preparedCall = [];

	for (let index = 0; index < tangPoolLength; index++) {
		preparedCall.push(tangBoosterContractMulti.poolInfo(index));
	}
	for (let index = 0; index < cvxPoolLength; index++) {
		preparedCall.push(convexBoosterContractMulti.poolInfo(index));
	}
	preparedCall.push(tangCRVSupply.totalSupply());
	preparedCall.push(convexSupply.totalSupply());
	await	ethcallProvider.init();
	const	allPools = await ethcallProvider.all(preparedCall);
	const	tangPools = allPools.slice(0, tangPoolLength);
	const	cvxPools = allPools.slice(tangPoolLength, tangPoolLength + cvxPoolLength);
	const	rest = allPools.slice(tangPoolLength + cvxPoolLength);

	/**********************************************************************
	**	Finally, we can populate the tangAddress object
	**********************************************************************/
	const	tang = {};
	for (let index = 0; index < tangPools.length; index++) {
		const	poolId = pools.find(e => (e.addresses?.lpToken).toLowerCase() === (tangPools[index][0]).toLowerCase())?.id;
		if (poolId) {
			tang[poolId] = {
				...tang[poolId],
				tangToken: tangPools[index][1],
				tangRewards: tangPools[index][3],
			};
		}
	}

	for (let index = 0; index < cvxPools.length; index++) {
		const	poolId = pools.find(e => (e.addresses?.lpToken).toLowerCase() === (cvxPools[index][0]).toLowerCase())?.id;
		if (poolId) {
			tang[poolId] = {
				...tang[poolId],
				cvxToken: cvxPools[index][1],
				cvxRewards: cvxPools[index][3],
			};
		}
	}
	
	const	supply = {
		tangCRV: ethers.utils.formatEther(rest[0]),
		convex: ethers.utils.formatEther(rest[1]),
	};

	return {tang, supply};
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
		{
			dailyApy: baseApys
		},
		{
			CRVAPYs: crvApys,
			boosts,
			CRVRate: crvRate,
			CRVAPYsBase: crvApysBase,
			TANGAPY: tangApy,
			ExtraAPYs: extraApy,
			stackedTangAPYs
		},
		{tvl},
		{supply},
	] = await Promise.all([
		getCurveRewards(),
		getAPY(),
		getCRVAPY(address || '0x0000000000000000000000000000000000000000'),
		getTVL(),
		getTangAndConvex(),
	]);


	const _pools = arrayToHashmap(pools.map((pool, index) => [pool.id, {
		baseApy: baseApys[index],
		crvApy: crvApys[pool.id],
		crvApysBase: crvApysBase[pool.id],
		crvRate: crvRate[pool.id],
		crvBoost: boosts[pool.id],
		tangApy: tangApy[pool.id],
		extraApy: extraApy[pool.id],
		tvl: tvl[pool.id],
		additionalRewards: pool.additionalRewards.map(({key, name, convexRewarder}) => ({
			convexRewarder: convexRewarder,
			apy: additionalRewards[key || name]?.rewards,
		}))
	}]));
	_pools.convex = {
		supply: supply.convex,
	};
	_pools.crv = {
		'crvApy': stackedTangAPYs.crvAPR,
		'tangApy': stackedTangAPYs.tangAPR,
		'extraApy': stackedTangAPYs.crv3APR,
		'supply': supply.tang
	};

	return {
		pools: _pools
	};
}, {maxAge: 10 * 60});
