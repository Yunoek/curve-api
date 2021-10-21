import memoize from 'memoizee';
import {Contract, Provider} from 'ethcall';
import {ethers} from 'ethers';
import {GraphQLClient, gql} from 'graphql-request';
import Request from 'utils/Request';
import {arrayToHashmap} from 'utils/Array';
import getAssetsPrices from 'utils/data/assets-prices';
import pools, {poolIds} from 'constants/pools';
import {GAUGE_POOL_ABI, GAUGE_CONTROLLER_ABI, SWAP_POOL_ABI} from './abis/custom';

const ethersProvider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`);
async function newEthCallProvider(provider) {
	const	ethcallProvider = new Provider();
	await	ethcallProvider.init(provider);
	return	ethcallProvider;
}
async function	getTangPrices(assetCoingeckoIds, vs_currencies) {
	const	response = await Request.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=${vs_currencies}&ids=${assetCoingeckoIds}`);
	const	json = await response.json();
	return json;
}
async function	getMainPoolsGaugeRewards() {
	const	response = await Request.get('https://api.curve.fi/api/getMainPoolsGaugeRewards');
	const	json = await response.json();
	return json?.data?.mainPoolsGaugeRewards || {};
}

function	getCVXMintAmount(crvEarned, tangSupply) {
	const	cliffSize = 100000; //* 1e18; //new cliff every 100,000 tokens
	const	cliffCount = 1000; // 1,000 cliffs
	const	maxSupply = 100000000; // * 1e18; //100 mil max supply
	const	cvxSupply = ethers.utils.formatEther(tangSupply);
	const	currentCliff = cvxSupply / cliffSize;

	if (currentCliff < cliffCount) {
		const	remaining = cliffCount - currentCliff;
		let		cvxEarned = crvEarned * remaining / cliffCount;
		const	amountTillMax = maxSupply - cvxSupply;
		if (cvxEarned > amountTillMax) {
			cvxEarned = amountTillMax;
		}
		return cvxEarned;
	}
	return 0;
}


const getCRVAPY = memoize(async (userAddress) => {
	const	mainPoolsGaugeRewards = await getMainPoolsGaugeRewards();
	// console.log(mainPoolsGaugeRewards);
	const	GAUGE_CONTROLLER_ADDRESS = '0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB';
	const	prices = await getAssetsPrices(['curve-dao-token', 'convex-crv', 'convex-finance', 'bitcoin', 'stasis-eurs', 'ethereum', 'chainlink']);
	const	tangPrices = await getTangPrices(['convex-finance'], ['usd','eur','btc','eth','link']);
	const	CRVAPYsBase = {};
	const	CRVAPYs = {};
	const	CRVRate = {};
	const	TANGAPY = {};
	const	ExtraAPYs = {};
	const	poolsLen = poolIds.length;
	prices.dollar = 1;

	const tangContract = new ethers.Contract('0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B', [{'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'}], ethersProvider);
	const tangSupply = await tangContract.totalSupply();

	//Prepare multicalls
	const	ethcallProvider = await newEthCallProvider(ethersProvider);
	const	calls = [];
	for (let index = 0; index < poolsLen; index++) {
		const	pool = pools.getById(poolIds[index]);
		const	GAUGE_POOL_CONTRACT = new Contract(pool?.addresses?.gauge, GAUGE_POOL_ABI);
		const	GAUGE_CONTROLLER_CONTRACT = new Contract(GAUGE_CONTROLLER_ADDRESS, GAUGE_CONTROLLER_ABI);
		const	SWAP_POOL_CONTRACT = new Contract(pool?.addresses?.swap, SWAP_POOL_ABI);
		calls.push(...[
			GAUGE_POOL_CONTRACT.inflation_rate(),
			GAUGE_POOL_CONTRACT.working_supply(),
			GAUGE_CONTROLLER_CONTRACT.gauge_relative_weight(pool?.addresses?.gauge),
			SWAP_POOL_CONTRACT.get_virtual_price(),
		]);
	}

	//Parse multicalls result
	const	callsResult = await ethcallProvider.all(calls);
	let		callResultIndex = 0;
	for (let index = 0; index < poolsLen; index++) {
		const	pool = pools.getById(poolIds[index]);
		const	inflation_rate = callsResult[callResultIndex + 0];
		const	working_supply = callsResult[callResultIndex + 1];
		const	relative_weight = callsResult[callResultIndex + 2];
		const	virtual_price = callsResult[callResultIndex + 3];
		const	crvPrice = prices['curve-dao-token'];
		const	assetPrice = (prices[pool?.coingeckoInfo?.referenceAssetId] || 1);
		const	refAssetPrice = tangPrices['convex-finance'].usd;//[pool?.coingeckoInfo?.referenceVsId];
		const	rate = (inflation_rate * relative_weight * 12614400) / (working_supply * assetPrice * virtual_price);
		const	apy = crvPrice * rate * 100;
		
		CRVAPYs[pool.id] = apy;
		CRVAPYsBase[pool.id] = apy;
		CRVRate[pool.id] = rate;
		TANGAPY[pool.id] = (getCVXMintAmount(rate, tangSupply) * refAssetPrice * 100); //TANGPRICE VS BASECURRENCY
		ExtraAPYs[pool.id] = 0;
		// pool.addresses?.gauge
		const	extraRewards = mainPoolsGaugeRewards[pool.addresses?.gauge.toLowerCase()];
		extraRewards?.forEach((reward) => {
			ExtraAPYs[pool.id] += reward.apy;
		});

		// if (pool.additionalRewards.length > 0) {
		// 	pool.additionalRewards.forEach(async (each) => {
		// 		const contractToken = new ethers.Contract(each.convexRewarder, [{'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'}], ethersProvider);
		// 		const contractRewarder = new ethers.Contract(each.convexRewarder, [{'inputs':[],'name':'rewardRate','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'rewardPerToken','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'}], ethersProvider);

		// 		const	supply = await contractToken.totalSupply();
		// 		const	exrate = await contractRewarder.rewardRate();
		// 		const	rewardPerToken = ethers.utils.formatEther(await contractRewarder.rewardPerToken());

		// 		const perUnderlying = exrate / supply;
		// 		const perYear = perUnderlying * 86400 * 365;
		// 		console.log(perYear * 0.01980515 * 100);
		// 		console.log(830 * Number(1) * 0.01980515);
		// 	});
		// }
		callResultIndex += 4;
	}


	const boosts = arrayToHashmap(pools.map(({id}) => [id, 1]));
	if (userAddress) {
		const wrapper = new GraphQLClient('https://api.thegraph.com/subgraphs/name/sistemico/curve');

		const QUERY = gql`
      {
        account(id: "${userAddress.toLowerCase()}") {
          gauges {
            gauge {
              id
            }
            originalBalance
            originalSupply
            workingBalance
            workingSupply
          }
        }
      }
    `;

		let results = await wrapper.request(QUERY, {});
		results = results.account ? results.account.gauges : [];

		for (const gaugeBoost of results) {
			const pool = pools.find((pool) => pool.addresses.gauge && pool.addresses.gauge.toLowerCase() === gaugeBoost.gauge.id.toLowerCase());
			if (!pool) continue; // If the gauge has been retired

			boosts[pool.id] = gaugeBoost.workingBalance / (0.4 * gaugeBoost.originalBalance);
			CRVAPYs[pool.id] *= boosts[pool.id];
			CRVRate[pool.id] *= boosts[pool.id];
		}
	}

	return {
		CRVAPYs,
		CRVAPYsBase,
		TANGAPY,
		ExtraAPYs,
		CRVRate,
		boosts,
	};
}, {
	promise: true,
	maxAge: 10 * 60 * 1000, // 10m
});

export default getCRVAPY;
