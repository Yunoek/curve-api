import { ethers } from 'ethers';
import { Provider, Contract } from 'ethers-multicall';
import pools from 'constants/pools';
import { fn } from '../../utils/api';

const STACKER = '0x989AEb4d175e16225E39E87d0D97A3360524AD80';

export default fn(async () => {
  const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY);
  const ethcallProvider = new Provider(provider);
  await ethcallProvider.init();
  const poolsAddress = [];
  const STACKER_CONTRACT = new Contract(STACKER, ['function balanceOfPool(address) public view returns (uint256)']);

  pools.forEach((pool) => {
    if (pool.hasNoGauge) {
      return;
    }
    const MINTER_CONTRACT = new Contract(pool.addresses.swap, ['function get_virtual_price() public view returns (uint256)']);
    poolsAddress.push(STACKER_CONTRACT.balanceOfPool(pool.addresses.gauge));
    poolsAddress.push(MINTER_CONTRACT.get_virtual_price());
  });
  const results = await ethcallProvider.all(poolsAddress);
  const tvl = {};

  let i = 0;
  pools.forEach((pool) => {
    const balanceOf = ethers.utils.formatEther(results[i]);
    const virtualPrice = ethers.utils.formatEther(results[i + 1]);
    tvl[pool.id] = Number(balanceOf).toFixed(4) / Number(virtualPrice).toFixed(4);
    i += 2;
  });
  return { tvl };
}, {
  maxAge: 15 * 60, // 15 min
});
