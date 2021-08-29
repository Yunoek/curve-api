import memoize from 'memoizee';
import getAssetsPrices from 'utils/data/assets-prices';
import contractAbis from 'utils/data/abis';
import Web3 from 'web3';
import Multicall from 'constants/abis/multicall.json';

const web3 = new Web3(`https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`);
const MulticallContract = new web3.eth.Contract(Multicall, '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441');

const getCurveRewards = memoize(async () => {
	const curveRewards = new web3.eth.Contract(contractAbis.susdv2.sCurveRewards_abi, contractAbis.susdv2.sCurveRewards_address);
	const sbtcRewards = new web3.eth.Contract(contractAbis.sbtc.sCurveRewards_abi, contractAbis.sbtc.sCurveRewards_address);
	const yfiRewards = new web3.eth.Contract(contractAbis.iearn.sCurveRewards_abi, contractAbis.iearn.sCurveRewards_address);
	const mtaRewards = new web3.eth.Contract(contractAbis.musd.sCurveRewards_abi, contractAbis.musd.sCurveRewards_address);
	const keepRewards = new web3.eth.Contract(contractAbis.tbtc.sCurveRewards_abi, contractAbis.tbtc.sCurveRewards_address);
	const rsvRewards = new web3.eth.Contract(contractAbis.rsv.sCurveRewards_abi, contractAbis.rsv.sCurveRewards_address);
	const dusdRewards = new web3.eth.Contract(contractAbis.dusd.sCurveRewards_abi, contractAbis.dusd.sCurveRewards_address);
	const borRewards = new web3.eth.Contract(contractAbis.obtc.sCurveRewards_abi, contractAbis.obtc.sCurveRewards_address);
	const pntRewards = new web3.eth.Contract(contractAbis.pbtc.sCurveRewards_abi, contractAbis.pbtc.sCurveRewards_address);
	const eurRewards = new web3.eth.Contract(contractAbis.eurs.sCurveRewards_abi, contractAbis.eurs.sCurveRewards_address);
	const ldoRewards = new web3.eth.Contract(contractAbis.steth.sCurveRewards_abi, contractAbis.steth.sCurveRewards_address);
	const ankrRewards = new web3.eth.Contract(contractAbis.ankreth.sCurveRewards_abi, contractAbis.ankreth.sCurveRewards_address);
	const lqtyRewards = new web3.eth.Contract(contractAbis.lusd.sCurveRewards_abi, contractAbis.lusd.sCurveRewards_address);
	const fxsRewards = new web3.eth.Contract(contractAbis.frax.sCurveRewards_abi, contractAbis.frax.sCurveRewards_address);
	const fisRewards = new web3.eth.Contract(contractAbis.reth.sCurveRewards_abi, contractAbis.reth.sCurveRewards_address);
	const alcxRewards = new web3.eth.Contract(contractAbis.alusd.sCurveRewards_abi, contractAbis.alusd.sCurveRewards_address);

	const sCurve = new web3.eth.Contract(contractAbis.susdv2.swap_abi, contractAbis.susdv2.swap_address);
	const musdCurve = new web3.eth.Contract(contractAbis.musd.swap_abi, contractAbis.musd.swap_address);
	const keepCurve = new web3.eth.Contract(contractAbis.tbtc.swap_abi, contractAbis.tbtc.swap_address);
	const rsvCurve = new web3.eth.Contract(contractAbis.rsv.swap_abi, contractAbis.rsv.swap_address);
	const dusdCurve = new web3.eth.Contract(contractAbis.dusd.swap_abi, contractAbis.dusd.swap_address);
	const obtcCurve = new web3.eth.Contract(contractAbis.obtc.swap_abi, contractAbis.obtc.swap_address);
	const eursCurve = new web3.eth.Contract(contractAbis.eurs.swap_abi, contractAbis.eurs.swap_address);
	const stethCurve = new web3.eth.Contract(contractAbis.steth.swap_abi, contractAbis.steth.swap_address);
	const ankrethCurve = new web3.eth.Contract(contractAbis.ankreth.swap_abi, contractAbis.ankreth.swap_address);
	const pbtcCurve = new web3.eth.Contract(contractAbis.pbtc.swap_abi, contractAbis.pbtc.swap_address);
	const sbtcCurve = new web3.eth.Contract(contractAbis.sbtc.swap_abi, contractAbis.sbtc.swap_address);
	const yCurve = new web3.eth.Contract(contractAbis.iearn.swap_abi, contractAbis.iearn.swap_address);
	const balancerPool = new web3.eth.Contract(contractAbis.balancerAbi, contractAbis.balancer_address);
	const lusdCurve = new web3.eth.Contract(contractAbis.lusd.swap_abi, contractAbis.lusd.swap_address);
	const fraxCurve = new web3.eth.Contract(contractAbis.frax.swap_abi, contractAbis.frax.swap_address);
	const rethCurve = new web3.eth.Contract(contractAbis.reth.swap_abi, contractAbis.reth.swap_address);
	const alusdCurve = new web3.eth.Contract(contractAbis.alusd.swap_abi, contractAbis.alusd.swap_address);

	const swapAAVE = new web3.eth.Contract(contractAbis['aave'].swap_abi, contractAbis['aave'].swap_address);
	const swapSAAVE = new web3.eth.Contract(contractAbis['saave'].swap_abi, contractAbis['saave'].swap_address);

	//aave APYs
	//https://aave-api-v2.aave.com/data/markets-data/0xb53c1a33016b2dc2ff3653530bff1848a515c8c5
	const statsAave = await (await fetch('https://aave-api-v2.aave.com/data/markets-data/0xb53c1a33016b2dc2ff3653530bff1848a515c8c5')).json();
	let aaveApys = [];
	contractAbis['aave'].underlying_coins.map(async (coinAddress) => {
		coinAddress = coinAddress.toLowerCase();
		let coinData = statsAave.reserves.find(({underlyingAsset}) => underlyingAsset === coinAddress);
		aaveApys.push(coinData.aIncentivesAPY);
	});

	let saaveApys = [];
	contractAbis['saave'].underlying_coins.map(async (coinAddress) => {
		coinAddress = coinAddress.toLowerCase();
		let coinData = statsAave.reserves.find(({underlyingAsset}) => underlyingAsset === coinAddress);
		saaveApys.push(coinData.aIncentivesAPY);
	});
	//end aave apys

	const calls = [
		[curveRewards._address, curveRewards.methods.totalSupply().encodeABI()],
		[sCurve._address, sCurve.methods.get_virtual_price().encodeABI()],
		[curveRewards._address, curveRewards.methods.DURATION().encodeABI()],
		[curveRewards._address, curveRewards.methods.rewardRate().encodeABI()],
		[sbtcRewards._address, sbtcRewards.methods.totalSupply().encodeABI()],
		[sbtcCurve._address, sbtcCurve.methods.get_virtual_price().encodeABI()],
		[balancerPool._address, balancerPool.methods.getBalance('0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f').encodeABI()],
		[balancerPool._address, balancerPool.methods.getBalance('0x408e41876cccdc0f92210600ef50372656052a38').encodeABI()],
		[yfiRewards._address, yfiRewards.methods.totalSupply().encodeABI()],
		[yCurve._address, yCurve.methods.get_virtual_price().encodeABI()],
		[yfiRewards._address, yfiRewards.methods.DURATION().encodeABI()],
		[yfiRewards._address, yfiRewards.methods.rewardRate().encodeABI()],
		[curveRewards._address, curveRewards.methods.periodFinish().encodeABI()],
		[sbtcRewards._address, sbtcRewards.methods.periodFinish().encodeABI()],
		[yfiRewards._address, yfiRewards.methods.periodFinish().encodeABI()],
		[mtaRewards._address, mtaRewards.methods.totalSupply().encodeABI()],
		[musdCurve._address, musdCurve.methods.get_virtual_price().encodeABI()],
		[mtaRewards._address, mtaRewards.methods.DURATION().encodeABI()],
		[mtaRewards._address, mtaRewards.methods.rewardRate().encodeABI()],
		[mtaRewards._address, mtaRewards.methods.periodFinish().encodeABI()],
		[keepRewards._address, keepRewards.methods.totalSupply().encodeABI()],
		[keepCurve._address, keepCurve.methods.get_virtual_price().encodeABI()],
		[keepRewards._address, keepRewards.methods.DURATION().encodeABI()],
		[keepRewards._address, keepRewards.methods.rewardRate().encodeABI()],
		[keepRewards._address, keepRewards.methods.periodFinish().encodeABI()],
		[rsvRewards._address, rsvRewards.methods.totalSupply().encodeABI()],
		[rsvCurve._address, rsvCurve.methods.get_virtual_price().encodeABI()],
		[rsvRewards._address, rsvRewards.methods.DURATION().encodeABI()],
		[rsvRewards._address, rsvRewards.methods.rewardRate().encodeABI()],
		[rsvRewards._address, rsvRewards.methods.periodFinish().encodeABI()],
		[dusdRewards._address, dusdRewards.methods.totalSupply().encodeABI()],
		[dusdCurve._address, dusdCurve.methods.get_virtual_price().encodeABI()],
		[dusdRewards._address, dusdRewards.methods.DURATION().encodeABI()],
		[dusdRewards._address, dusdRewards.methods.rewardRate().encodeABI()],
		[dusdRewards._address, dusdRewards.methods.periodFinish().encodeABI()],
		[borRewards._address, borRewards.methods.totalSupply().encodeABI()],
		[obtcCurve._address, obtcCurve.methods.get_virtual_price().encodeABI()],
		[borRewards._address, borRewards.methods.rewardsDuration().encodeABI()],
		[borRewards._address, borRewards.methods.rewardRate().encodeABI()],
		[borRewards._address, borRewards.methods.periodFinish().encodeABI()],
		[pntRewards._address, pntRewards.methods.totalSupply().encodeABI()],
		[pbtcCurve._address, pbtcCurve.methods.get_virtual_price().encodeABI()],
		[pntRewards._address, pntRewards.methods.DURATION().encodeABI()],
		[pntRewards._address, pntRewards.methods.rewardRate().encodeABI()],
		[pntRewards._address, pntRewards.methods.periodFinish().encodeABI()],
		[eurRewards._address, eurRewards.methods.totalSupply().encodeABI()],
		[eursCurve._address, eursCurve.methods.get_virtual_price().encodeABI()],
		[eurRewards._address, eurRewards.methods.rewardsDuration().encodeABI()],
		[eurRewards._address, eurRewards.methods.rewardRate().encodeABI()],
		[eurRewards._address, eurRewards.methods.periodFinish().encodeABI()],
		[ldoRewards._address, ldoRewards.methods.totalSupply().encodeABI()],
		[stethCurve._address, stethCurve.methods.get_virtual_price().encodeABI()],
		[ldoRewards._address, ldoRewards.methods.rewardsDuration().encodeABI()],
		[ldoRewards._address, ldoRewards.methods.rewardRate().encodeABI()],
		[ldoRewards._address, ldoRewards.methods.periodFinish().encodeABI()],
		[ankrRewards._address, ankrRewards.methods.totalSupply().encodeABI()],
		[ankrethCurve._address, ankrethCurve.methods.get_virtual_price().encodeABI()],
		[ankrRewards._address, ankrRewards.methods.rewardData(contractAbis.ankreth.reward_tokens[0]).encodeABI()],
		[ankrRewards._address, ankrRewards.methods.rewardData(contractAbis.ankreth.reward_tokens[1]).encodeABI()],
		[lqtyRewards._address, lqtyRewards.methods.totalSupply().encodeABI()],
		[lusdCurve._address, lusdCurve.methods.get_virtual_price().encodeABI()],
		[lqtyRewards._address, lqtyRewards.methods.rewardsDuration().encodeABI()],
		[lqtyRewards._address, lqtyRewards.methods.rewardRate().encodeABI()],
		[lqtyRewards._address, lqtyRewards.methods.periodFinish().encodeABI()],
		[contractAbis.aave.swap_address, swapAAVE.methods.balances(0).encodeABI()],
		[contractAbis.aave.swap_address, swapAAVE.methods.balances(1).encodeABI()],
		[contractAbis.aave.swap_address, swapAAVE.methods.balances(2).encodeABI()],
		[contractAbis.saave.swap_address, swapSAAVE.methods.balances(0).encodeABI()],
		[contractAbis.saave.swap_address, swapSAAVE.methods.balances(1).encodeABI()],
		[fxsRewards._address, fxsRewards.methods.totalSupply().encodeABI()],
		[fraxCurve._address, fraxCurve.methods.get_virtual_price().encodeABI()],
		[fxsRewards._address, fxsRewards.methods.rewardsDuration().encodeABI()],
		[fxsRewards._address, fxsRewards.methods.rewardRate().encodeABI()],
		[fxsRewards._address, fxsRewards.methods.periodFinish().encodeABI()],
		[fisRewards._address, fisRewards.methods.totalSupply().encodeABI()],
		[rethCurve._address, rethCurve.methods.get_virtual_price().encodeABI()],
		[fisRewards._address, fisRewards.methods.rewardsDuration().encodeABI()],
		[fisRewards._address, fisRewards.methods.rewardRate().encodeABI()],
		[fisRewards._address, fisRewards.methods.periodFinish().encodeABI()],
		[alcxRewards._address, alcxRewards.methods.totalSupply().encodeABI()],
		[alusdCurve._address, alusdCurve.methods.get_virtual_price().encodeABI()],
		[alcxRewards._address, alcxRewards.methods.rewardsDuration().encodeABI()],
		[alcxRewards._address, alcxRewards.methods.rewardRate().encodeABI()],
		[alcxRewards._address, alcxRewards.methods.periodFinish().encodeABI()],
	];

	const aggcalls = await MulticallContract.methods.aggregate(calls).call();
	const decoded = aggcalls[1].map((hex, i) => {
		const isDecodedLater = i === 57 || i === 58;
		if (isDecodedLater) return hex;

		if (i === 60) hex = hex.slice(0, 66);
		return web3.eth.abi.decodeParameter('uint256', hex);
	});

	const {
		havven: snxPrice,
		'republic-protocol': renPrice,
		bitcoin: btcPrice,
		sbtc: sbtcPrice,
		'lido-dao': ldoPrice,
		ethereum: ethPrice,
		ankr: ankrPrice,
		'yearn-finance': yfiPrice,
		'onx-finance': onxPrice,
		meta: mtaPrice,
		'keep-network': keepPrice,
		'reserve-rights-token': rsrPrice,
		'defidollar-dao': dfdPrice,
		'boringdao-[old]': borPrice,
		pnetwork: pntPrice,
		'stasis-eurs': eurPrice,
		liquity: lqtyPrice,
		'frax-share': fxsPrice,
		stafi: fisPrice,
		aave: aavePrice,
		alchemix: alcxPrice,
	} =
	await getAssetsPrices([
		'havven',
		'republic-protocol',
		'bitcoin',
		'sbtc',
		'lido-dao',
		'ethereum',
		'ankr',
		'yearn-finance',
		'onx-finance',
		'meta',
		'keep-network',
		'reserve-rights-token',
		'defidollar-dao',
		'boringdao-[old]',
		'pnetwork',
		'stasis-eurs',
		'liquity',
		'frax-share',
		'stafi',
		'aave',
		'alchemix',
	]);

	let snxRewardsAmount = 365 * (decoded[2] * decoded[3] / 1e18) / 7 * snxPrice / ((+decoded[0]) * (+decoded[1]) / 1e36) * 100;
	const now = Date.now() / 1000;
	if (+decoded[12] + (30 * 60) < now) {
		snxRewardsAmount = 0;
	}

	let sbtcRewardsAmount = ((10000 * snxPrice) + (25000 * renPrice)) / 7 * 365 / (btcPrice * decoded[4] * decoded[5] / 1e36) * 100;
	if (+decoded[13] + (30 * 60) < now) {
		sbtcRewardsAmount = 0;
	}

	let yfiRewardsAmount = 365 * (decoded[10] * decoded[11] / 1e18) / 7 * yfiPrice / ((+decoded[8] * (+decoded[9]) / 1e36)) * 100;
	if (+decoded[14] + (30 * 60) < now) {
		yfiRewardsAmount = 0;
	}

	let mtaRewardsAmount = 365 * (decoded[17] * decoded[18] / 1e18) / 7 * mtaPrice / ((+decoded[15]) * (+decoded[16]) / 1e36) * 100;
	if (+decoded[19] + (30 * 60) < now) {
		mtaRewardsAmount = 0;
	}

	let keepRewardsAmount = 365 * (decoded[22] * decoded[23] / 1e18) / 7 * keepPrice / (btcPrice * decoded[20] * decoded[21] / 1e36) * 100;
	if (+decoded[24] + (30 * 60) < now) {
		keepRewardsAmount = 0;
	}

	let rsrRewardsAmount = 365 * (decoded[27] * decoded[28] / 1e18) / 7 * rsrPrice / (decoded[25] * decoded[26] / 1e36) * 100;
	if (+decoded[29] + (30 * 60) < now) {
		rsrRewardsAmount = 0;
	}


	let dfdRewardsAmount = 365 * (decoded[32] * decoded[33] / 1e18)/7*dfdPrice/(decoded[30] * decoded[31]/1e36) * 100;
	if (+decoded[34] + (30 * 60) < now) {
		dfdRewardsAmount = 0;
	}

	let borRewardsAmount = 365 * (decoded[37] * decoded[38] / 1e18)/7*borPrice/(btcPrice * decoded[35] * decoded[36]/1e36) * 100;
	if (+decoded[39] + (30 * 60) < now) {
		borRewardsAmount = 0;
	}

	let pntRewardsAmount = 365 * (decoded[42] * decoded[43] / 1e18)/7*pntPrice/(btcPrice * decoded[40] * decoded[41]/1e36) * 100;
	if (+decoded[44] + (30 * 60) < now) {
		pntRewardsAmount = 0;
	}

	let eurRewardsAmount = 86400 * (decoded[48] / 1e18) * 365 * snxPrice /(eurPrice * decoded[45] * decoded[46]/1e36) * 100;
	if (+decoded[49] + (30 * 60) < now) {
		eurRewardsAmount = 0;
	}

	let ldoRewardsAmount = 86400 * (decoded[53] / 1e18) * 365 * ldoPrice /(ethPrice * decoded[50] * decoded[51]/1e36) * 100;
	if (+decoded[54] + (30 * 60) < now) {
		ldoRewardsAmount = 0;
	}

	let onx = web3.eth.abi.decodeParameters(['address','uint256','uint256','uint256','uint256','uint256'], aggcalls[1][57]);
	let onxRewardsAmount = 365 * (onx[1] * onx[3] / 1e18)/7* onxPrice /(ethPrice * decoded[55] * decoded[56]/1e36) * 100;
	if (onx[2] + (30 * 60) < now) {
		onxRewardsAmount = 0;
	}

	let ankr = web3.eth.abi.decodeParameters(['address','uint256','uint256','uint256','uint256','uint256'], aggcalls[1][58]);
	let ankrRewardsAmount = 365 * (ankr[1] * ankr[3] / 1e18)/7 * ankrPrice /(ethPrice * decoded[55] * decoded[56]/1e36) * 100;
	if (ankr[2] + (30 * 60) < now) {
		ankrRewardsAmount = 0;
	}


	let lqtyRewardsAmount = 365 * (decoded[61] * decoded[62] / 1e18)/7*lqtyPrice/6/(decoded[59] * decoded[60]/1e36) * 100;
	if (+decoded[63] + (30 * 60) < now) {
		lqtyRewardsAmount = 0;
	}

	let totalBalanceAAVE = (decoded[64] / contractAbis['aave'].coin_precisions[0]) + decoded[65] / contractAbis['aave'].coin_precisions[1] + decoded[66] / contractAbis['aave'].coin_precisions[2];
	let totalRewards = ((aaveApys[0]  * (  decoded[64] / contractAbis['aave'].coin_precisions[0])) + (aaveApys[1]  * (decoded[65] / contractAbis['aave'].coin_precisions[1])) + (aaveApys[2] * (decoded[66] / contractAbis['aave'].coin_precisions[2])));
	let aaveRewardsAmount = (totalRewards) / totalBalanceAAVE * 100;

	let totalBalanceSAAVE = (decoded[67] / contractAbis['saave'].coin_precisions[0]) + decoded[68] / contractAbis['saave'].coin_precisions[1];
	let totalSRewards = ((saaveApys[0]  * (  decoded[67] / contractAbis['saave'].coin_precisions[0])) + (saaveApys[1]  * (decoded[68] / contractAbis['saave'].coin_precisions[1])) );
	let saaveRewardsAmount = (totalSRewards) / totalBalanceSAAVE * 100;


	let fxsRewardsAmount = 86400 * (decoded[72] / 1e18) * 365 * fxsPrice /(1 * decoded[69] * decoded[70]/1e36) * 100;
	if (+decoded[73] + (30 * 60) < now)
		fxsRewardsAmount = 0;

	let fisRewardsAmount = 86400 * (decoded[77] / 1e18) * 365 * fxsPrice /(ethPrice * decoded[74] * decoded[75]/1e36) * 100;
	if (+decoded[78] + (30 * 60) < now)
		fisRewardsAmount = 0;

	let alcxRewardsAmount = 86400 * (decoded[82] / 1e18) * 365 * alcxPrice /(1 * decoded[79] * decoded[80]/1e36) * 100;
	if(+decoded[83] + (30 * 60) < now)
		alcxRewardsAmount = 0;

	return {
		SNX: {
			rewards: snxRewardsAmount,
			price: snxPrice,
		},
		SBTC: {
			rewards: sbtcRewardsAmount,
			price: sbtcPrice,
		},
		YFI: {
			rewards: yfiRewardsAmount,
			price: yfiPrice,
		},
		MTA: {
			rewards: mtaRewardsAmount,
			price: mtaPrice,
		},
		KEEP: {
			rewards: keepRewardsAmount,
			price: keepPrice,
		},
		RSR: {
			rewards: rsrRewardsAmount,
			price: rsrPrice,
		},
		DFD: {
			rewards: dfdRewardsAmount,
			price: dfdPrice,
		},
		BOR: {
			rewards: borRewardsAmount,
			price: borPrice,
		},
		PNT: {
			rewards: pntRewardsAmount,
			price: pntPrice,
		},
		EUR: {
			rewards: eurRewardsAmount,
			price: eurPrice,
		},
		LDO: {
			rewards: ldoRewardsAmount,
			price: ldoPrice,
		},
		ONX: {
			rewards: onxRewardsAmount,
			price: onxPrice,
		},
		ANKR: {
			rewards: ankrRewardsAmount,
			price: ankrPrice,
		},
		LQTY: {
			rewards: lqtyRewardsAmount,
			price: lqtyPrice,
		},
		STKAAVE: {
			rewards: aaveRewardsAmount,
			price: aavePrice,
		},
		STKAAVES: { // saave pool
			rewards: saaveRewardsAmount,
			price: aavePrice,
		},
		FXS: {
			rewards: fxsRewardsAmount,
			price: fxsPrice,
		},
		FIS: {
			rewards: fisRewardsAmount,
			price: fisPrice,
		},
		ALCX: {
			rewards: alcxRewardsAmount,
			price: alcxPrice,
		},
	};
}, {
	promise: true,
	maxAge: 10 * 60 * 1000, // 10m
});

export default getCurveRewards;
