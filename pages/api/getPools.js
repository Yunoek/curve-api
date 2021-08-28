import { arrayToHashmap } from 'utils/Array';
import pools from 'constants/pools';
import { fn } from '../../utils/api';

export default fn(async () => arrayToHashmap(pools.map((pool) => [pool.id, pool])), {
  maxAge: 10 * 60, // 10m
});
