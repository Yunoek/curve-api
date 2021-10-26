import pools from 'constants/pools';
import {ethers} from 'ethers';
const	fetcher = (...args) => fetch(...args).then(res => res.json());

async function	getTriCryptoPrice() {
	const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY);
	const LENS = '0x83d95e0D5f402511dB06817Aff3f9eA88224B030'; // to get 3crypto price
	const LP_TOKEN = '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF';
	const magicContract = new ethers.Contract(LENS, ['function getNormalizedValueUsdc(address, uint256) public view returns (uint256)'], provider);
	const priceUSDC = await magicContract.getNormalizedValueUsdc(LP_TOKEN, '1000000000000000000');
	const triCryptoPrice = ethers.utils.formatUnits(priceUSDC, 6);
	return triCryptoPrice;
}

async function getPrice() {
	console.log('Re-fetching prices');
	const	vsCurrencies = ['usd'];
	const	_addressesToFetch = [];
	const	_idToFetch = [];

	pools.forEach((pool) => {
		_idToFetch.push(pool?.coingeckoInfo?.id || 'dai');
		_addressesToFetch.push(pool.addresses.lpToken.toLowerCase());
		const	_additionnalCgID = pool?.additionalRewards?.map(e => e.rewardTokenCoingeckoId);
		if (_additionnalCgID?.length > 0) {
			_idToFetch.push(..._additionnalCgID);
		}
	});

	const	_cgIDs = ['curve-dao-token', 'convex-finance', 'convex-crv', ...new Set(_idToFetch)];
	const	[prices, triPrices] = await Promise.all([
		fetcher(`https://api.coingecko.com/api/v3/simple/price?ids=${_cgIDs}&vs_currencies=${vsCurrencies}`),
		getTriCryptoPrice()
	]);
	prices.tricrypto = {usd: triPrices};
	prices.tricrypto2 = {usd: triPrices};

	return prices;
} //5 minutes

let		getPriceMapping = null;
let		getPriceMappingAccess = 0;
export default async function handler(req, res) {
	const	{revalidate} = req.query;
	const	now = new Date().getTime();
	const	lastAccess = getPriceMappingAccess || 0;

	if (lastAccess === 0 || ((now - lastAccess) > 5 * 60 * 1000) || revalidate === 'true' || !getPriceMapping) {
		const	_prices = await getPrice();
		getPriceMapping = _prices;
		getPriceMappingAccess = now;
	}
	res.setHeader('Cache-Control', 's-maxage=300'); // 5 minutes
	return res.status(200).json(getPriceMapping);
}
