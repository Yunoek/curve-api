import {ethers} from 'ethers';
import {Provider, Contract} from 'ethers-multicall';
import axios from 'axios';
import pools from 'constants/pools';
import {fn} from '../../utils/api';

const STACKER = '0x989AEb4d175e16225E39E87d0D97A3360524AD80';
const LENS = '0x83d95e0D5f402511dB06817Aff3f9eA88224B030'; // to get 3crypto price

export default fn(async () => {
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
		i += 2;
	});
	return tvl;
}, {
	maxAge: 15 * 60, // 15 min
});
