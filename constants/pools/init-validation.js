const {flattenArray} = require('../../utils/Array');
const {IS_DEV} = require('../AppConstants');

const checks = [{
	description: 'Meta pools must have a deposit zap',
	failsIfFn: (pool) => (pool.isMetaPool && pool.addresses.deposit === null),
}, {
	description: 'Prop riskLevel must be defined if isRiskier = true',
	failsIfFn: (pool) => (pool.isRiskier && typeof pool.riskLevel === 'undefined'),
}, {
	description: 'For pools whose gaugeVersion is 1, any additionalRewards must be of shape `{ name, rewardTokenCoingeckoId }`',
	failsIfFn: (pool) => (pool.gaugeVersion === 1 && pool.additionalRewards.some((reward) => (
		!reward.name ||
    !reward.rewardTokenCoingeckoId
	))),
}, {
	description: 'For pools whose gaugeVersion is 2, any additionalRewards must be of shape `{ name, rewardTokenCoingeckoId, rewardTokenAddress, rewardTokenDecimals }`',
	failsIfFn: (pool) => (pool.gaugeVersion === 2 && pool.additionalRewards.some((reward) => (
		!reward.name ||
    !reward.rewardTokenCoingeckoId ||
    !reward.rewardTokenAddress ||
    !reward.rewardTokenDecimals
	))),
}];

const validatePoolConfigs = (pools) => {
	if (!IS_DEV) return;

	const errors = flattenArray(pools.map((pool) => (
		checks
			.filter(({failsIfFn}) => failsIfFn(pool))
			.map(({description}) => `${description} [pool: ${pool.id}]`)
	)));

	if (errors.length > 0) {
		throw new Error(`Error${errors.length > 1 ? 's' : ''} found in pools config:\n\n${errors.join('\n')}\n`);
	}
};

module.exports = validatePoolConfigs;
