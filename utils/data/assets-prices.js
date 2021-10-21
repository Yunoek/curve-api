import memoize from 'memoizee';
import Request from 'utils/Request';
import {arrayToHashmap} from 'utils/Array';

const getAssetsPrices = memoize((assetCoingeckoIds, vs_currencies = 'usd') => (
	Request.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=${vs_currencies}&ids=${assetCoingeckoIds.join(',')}`)
		.then((response) => response.json())
		.then((prices) => arrayToHashmap(assetCoingeckoIds.map((id) => [
			id,
			id === 'dollar' ? 1 : prices[id]?.usd,
		])))
), {
	promise: true,
	maxAge: 2 * 60 * 1000, // 2 min
	primitive: true,
});

export default getAssetsPrices;
