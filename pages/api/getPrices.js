import pools from 'constants/pools';
import {fn} from '../../utils/api';
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

export default fn(async () => {
	const	vsCurrencies = ['usd'];
	const	_addressesToFetch = [];
	const	_idToFetch = [];

	pools.forEach((pool) => {
		_idToFetch.push(pool?.coingeckoInfo?.id || 'dai');
		_addressesToFetch.push(pool.addresses.lpToken.toLowerCase());
		const	_additionnalAddresses = pool?.additionalRewards?.map(e => e.convexRewarder.toLowerCase());
		if (_additionnalAddresses?.length > 0) {
			_addressesToFetch.push(..._additionnalAddresses);
		}
	});

	const	_cgIDs = ['curve-dao-token', 'convex-finance', 'convex-crv', ...new Set(_idToFetch)];
	const	_cgAddresses = [...new Set(_addressesToFetch)];
	const	[_iPrices, _aPrices, _triPrices] = await Promise.all([
		fetcher(`https://api.coingecko.com/api/v3/simple/price?ids=${_cgIDs}&vs_currencies=${vsCurrencies}`),
		fetcher(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${_cgAddresses.join(',')}&vs_currencies=${vsCurrencies}`),
		getTriCryptoPrice()
	]);
	const	prices = {..._iPrices, ..._aPrices};
	prices.tricrypto = {usd: _triPrices};
	prices.tricrypto2 = {usd: _triPrices};

	return prices;
}, {maxAge: 5 * 60}); //5 minutes
