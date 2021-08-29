import getAPY from 'utils/data/getAPY';
import getCRVAPY from 'utils/data/getCRVAPY';
import getCurveRewards from 'utils/data/getCurveRewards';
import {arrayToHashmap} from 'utils/Array';
import pools from 'constants/pools';
import {fn} from '../../utils/api';

export default fn(async ({address}) => {
	const [
		additionalRewards,
		{weeklyApy: baseApys},
		{CRVAPYs: crvApys, boosts, CRVprice: crvPrice},
	] = await Promise.all([
		getCurveRewards(),
		getAPY(),
		getCRVAPY(address || '0x0000000000000000000000000000000000000000'),
	]);

	return arrayToHashmap(pools.map((pool, index) => [pool.id, {
		baseApy: baseApys[index],
		crvApy: crvApys[pool.id],
		crvBoost: boosts[pool.id],
		additionalRewards: pool.additionalRewards.map(({key, name}) => ({
			name,
			apy: additionalRewards[key || name]?.rewards,
		})),
		crvPrice,
	}]));
}, {
	maxAge: 10 * 60, // 10m
});
