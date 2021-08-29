import memoize from 'memoizee';
import Request from 'utils/Request';
import {arrayToHashmap} from 'utils/Array';
import {sequentialPromiseMap} from 'utils/Async';

const MAX_ADDRESSES_PER_COINGECKO_REQUEST = 2;

const getTokensPrices = memoize(async (addresses) => {
	const pricesChunks = await sequentialPromiseMap(addresses, (addressesChunk) => (
		Request.get(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${addressesChunk.join(',')}&vs_currencies=usd
  `)
			.then((response) => response.json())
			.then((prices) => arrayToHashmap(Array.from(Object.entries(prices)).map(([address, {usd: usdPrice}]) => [
				address.toLowerCase(),
				usdPrice,
			])))
	), MAX_ADDRESSES_PER_COINGECKO_REQUEST);

	const mergedPrices = Object.assign({}, ...pricesChunks);

	return mergedPrices;
}, {
	promise: true,
	maxAge: 2 * 60 * 1000, // 2 min
	primitive: true,
});

export default getTokensPrices;
