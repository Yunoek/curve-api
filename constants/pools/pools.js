const REFERENCE_ASSETS = require('../reference-assets.json');
const coins = require('../coins');

module.exports = [
	{
		dataIndex: -1,
		id: 'tangcrv',
		name: 'TangCRV',
		lpTokenInfo: {
			name: 'cCurve',
			symbol: 'cCrv',
		},
		coingeckoInfo: {
			id: 'dai',
			symbol: 'Dai',
			referenceAssetId: 'convex-crv',
		},
		assets: 'crv+cvx',
		coins: [
			coins.crv,
			coins.cvx,
		],
		addresses: {
			underlying: '0x8FDF7cabfEc73d5FfD1447867834b4cf39B745B7',
			swap: '0x9D0464996170c6B9e75eED71c68B99dDEDf279e8',
			lpToken: '0x9D0464996170c6B9e75eED71c68B99dDEDf279e8',
			gauge: '0x903dA6213a5A12B61c821598154EfAd98C3B20E4',
			deposit: '0xF403C135812408BFbE8713b5A23a04b3D48AAE31',
		},
		isFactory: true
	}, {
		dataIndex: 0,
		id: 'compound',
		name: 'Compound',
		poolName: 'Curve Compound',
		pageMetaData: {
			title: 'Compounded',
			description: 'A curve.fi portal for swapping cDAI/cUSDC',
		},
		lpTokenInfo: {
			name: 'cCurve',
			symbol: 'cCrv',
		},
		coingeckoInfo: {
			id: 'dai',
			symbol: 'Dai',
		},
		assets: 'cDAI+cUSDC',
		coins: [
			coins.cdai,
			coins.cusdc,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
		],
		isLendingPool: true,
		addresses: {
			underlying: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
			swap: '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56',
			lpToken: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
			gauge: '0x7ca5b0a2910B33e9759DC7dDB0413949071D7575',
			deposit: '0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 1,
		id: 'usdt',
		name: 'USDT',
		poolName: 'Curve USDT',
		pageMetaData: {
			title: 'Tethered',
			description: 'A curve.fi Tethered portal for swapping cDAI/cUSDC/USDT',
		},
		lpTokenInfo: {
			name: 'tCurve',
			symbol: 'tCrv',
		},
		coingeckoInfo: {
			id: 'tether',
			symbol: 'USDT',
		},
		assets: 'cDAI+cUSDC+USDT',
		coins: [
			coins.cdai,
			coins.cusdc,
			coins.usdt,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		isLendingPool: true,
		addresses: {
			underlying: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
			swap: '0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C',
			lpToken: '0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23',
			gauge: '0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53',
			deposit: '0xac795D2c97e60DF6a99ff1c814727302fD747a80',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 5,
		id: 'pax',
		name: 'PAX',
		poolName: 'Curve PAX',
		lpTokenInfo: {
			name: 'pCurve',
			symbol: 'pCrv',
		},
		coingeckoInfo: {
			id: 'paxos-standard',
			symbol: 'PAX',
		},
		assets: 'ycDAI+ycUSDC+ycUSDT+PAX',
		coins: [
			coins.ycdai,
			coins.ycusdc,
			coins.ycusdt,
			coins.pax,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
			coins.pax,
		],
		isLendingPool: true,
		addresses: {
			underlying: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
			swap: '0x06364f10B501e868329afBc005b3492902d6C763',
			lpToken: '0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8',
			gauge: '0x64E3C23bfc40722d3B649844055F1D51c1ac041d',
			deposit: '0xA50cCc70b6a011CffDdf45057E39679379187287',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 2,
		id: 'iearn',
		idAlias: 'y',
		name: 'Y',
		poolName: 'Curve yCRV',
		pageMetaData: {
			title: 'Yield',
			description: 'A curve.fi yTokens portal for swapping DAI/USDC/USDT/TUSD',
		},
		lpTokenInfo: {
			name: 'yCurve',
			symbol: 'yCrv',
		},
		coingeckoInfo: {
			id: 'dai',
			symbol: 'Dai',
		},
		assets: 'yDAI+yUSDC+yUSDT+yTUSD',
		coins: [
			coins.ydai,
			coins.yusdc,
			coins.yusdt,
			coins.ytusd,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
			coins.tusd,
		],
		isLendingPool: true,
		addresses: {
			underlying: '0x4B5BfD52124784745c1071dcB244C6688d2533d3',
			swap: '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51',
			lpToken: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
			gauge: '0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1',
			deposit: '0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3',
			stakingRewards: '0x0001FB050Fe7312791bF6475b96569D83F695C9f',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 3,
		id: 'busd',
		name: 'BUSD',
		poolName: 'Curve yBUSD',
		pageMetaData: {
			title: 'bUSD',
			description: 'A curve.fi portal for swapping BUSD and other stablecoins',
		},
		lpTokenInfo: {
			name: 'bCurve',
			symbol: 'bCrv',
		},
		coingeckoInfo: {
			id: 'binance-usd',
			symbol: 'BUSD',
		},
		assets: 'yDAI+yUSDC+yUSDT+yBUSD',
		coins: [
			coins.ydai,
			coins.yusdc,
			coins.yusdt,
			coins.ybusd,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
			coins.busd,
		],
		isLendingPool: true,
		addresses: {
			underlying: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
			swap: '0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27',
			lpToken: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
			gauge: '0x69Fb7c45726cfE2baDeE8317005d3F94bE838840',
			deposit: '0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 4,
		id: 'susdv2',
		name: 'sUSD',
		poolName: 'Curve sUSD',
		lpTokenInfo: {
			name: 'sCurve',
			symbol: 'sCrv',
		},
		coingeckoInfo: {
			id: 'nusd',
			symbol: 'SUSD',
		},
		assets: 'DAI+USDC+USDT+sUSD',
		coins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
			coins.susd,
		],
		additionalRewards: [{
			name: 'SNX',
			amountDataKey: 'snxRewards',
			rewardTokenAddress: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
			convexRewarder: '0x81fCe3E10D12Da6c7266a1A169c4C96813435263',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'havven',
		}],
		addresses: {
			underlying: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
			swap: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
			lpToken: '0xC25a3A3b969415c80451098fa907EC722572917F',
			gauge: '0xA90996896660DEcC6E997655E065b23788857849',
			deposit: '0xFCBa3E75865d2d561BE8D220616520c171F12851',
		},
		hasAMultiplier: false,
		isOldPool: true,
	}, {
		dataIndex: 7,
		id: 'ren',
		name: 'ren',
		poolName: 'Curve renBTC',
		lpTokenInfo: {
			name: 'renCurve',
			symbol: 'renCrv',
		},
		coingeckoInfo: {
			id: 'renbtc',
			symbol: 'RENBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'renBTC+wBTC',
		coins: [
			coins.renbtc,
			coins.wbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		addresses: {
			underlying: '0x408e41876cccdc0f92210600ef50372656052a38',
			swap: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
			lpToken: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
			gauge: '0xB1F2cdeC61db658F091671F5f199635aEF202CAC',
			adapter: '0x73aB2Bd10aD10F7174a1AD5AFAe3ce3D991C5047',
		},
		hasAMultiplier: false,
	}, {
		dataIndex: 8,
		id: 'sbtc',
		name: 'sbtc',
		poolName: 'Curve sBTC',
		lpTokenInfo: {
			name: 'sbtcCurve',
			symbol: 'sbtcCrv',
		},
		coingeckoInfo: {
			id: 'sbtc',
			symbol: 'SBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'renBTC+wBTC+sBTC',
		coins: [
			coins.renbtc,
			coins.wbtc,
			coins.sbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		oldAdditionalRewards: [{
			name: 'SNX',
			rewardTokenCoingeckoId: 'havven',
		}],
		addresses: {
			underlying: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
			swap: '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714',
			lpToken: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
			gauge: '0x705350c4BcD35c9441419DdD5d2f097d7a55410F',
			stakingRewards: '0x13C1542A468319688B89E323fe9A3Be3A90EBb27',
			adapter: '0xAEade605D01FE9a8e9C4B3AA0130A90d62167029',
		},
		hasAMultiplier: false,
	}, {
		dataIndex: 9,
		id: 'hbtc',
		name: 'hbtc',
		poolName: 'Curve HBTC',
		lpTokenInfo: {
			name: 'hbtcCurve',
			symbol: 'hbtcCrv',
		},
		coingeckoInfo: {
			id: 'huobi-btc',
			symbol: 'HBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'hBTC+wBTC',
		coins: [
			coins.hbtc,
			coins.wbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		addresses: {
			underlying: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
			swap: '0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F',
			lpToken: '0xb19059ebb43466C323583928285a49f558E572Fd',
			gauge: '0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79',
		},
		hasAMultiplier: false,
	}, {
		dataIndex: 10,
		id: '3pool',
		name: '3pool',
		poolName: 'Curve 3Crv',
		lpTokenInfo: {
			name: '3poolCurve',
			symbol: '3poolCrv',
		},
		coingeckoInfo: {
			id: 'dai',
			symbol: '3Pool',
		},
		assets: 'DAI+USDC+USDT',
		coins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
			swap: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7',
			lpToken: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
			gauge: '0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A',
		},
		hasAMultiplier: false,
	}, {
		dataIndex: 11,
		id: 'gusd',
		name: 'gusd',
		poolName: 'Curve GUSD',
		lpTokenInfo: {
			name: 'gusdCurve',
			symbol: 'gusdCrv',
		},
		coingeckoInfo: {
			id: 'gemini-dollar',
			symbol: 'GUSD',
		},
		assets: 'GUSD+3pool',
		isMetaPool: true,
		coins: [
			coins.gusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
			swap: '0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956',
			lpToken: '0xD2967f45c4f384DEEa880F807Be904762a3DeA07',
			gauge: '0xC5cfaDA84E902aD92DD40194f0883ad49639b023',
			deposit: '0x64448B78561690B70E17CBE8029a3e5c1bB7136e',
		},
	}, {
		dataIndex: 12,
		id: 'husd',
		name: 'husd',
		poolName: 'Curve HUSD',
		lpTokenInfo: {
			name: 'husdCurve',
			symbol: 'husdCrv',
		},
		coingeckoInfo: {
			id: 'husd',
			symbol: 'HUSD',
		},
		assets: 'HUSD+3pool',
		isMetaPool: true,
		coins: [
			coins.husd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
			swap: '0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604',
			lpToken: '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858',
			gauge: '0x2db0E83599a91b508Ac268a6197b8B14F5e72840',
			deposit: '0x09672362833d8f703D5395ef3252D4Bfa51c15ca',
		},
	}, {
		dataIndex: 13,
		id: 'usdk',
		name: 'usdk',
		poolName: 'Curve USDK',
		lpTokenInfo: {
			name: 'usdkCurve',
			symbol: 'usdkCrv',
		},
		coingeckoInfo: {
			id: 'usdk',
			symbol: 'USDK',
		},
		assets: 'USDK+3pool',
		isMetaPool: true,
		coins: [
			coins.usdk,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x1c48f86ae57291f7686349f12601910bd8d470bb',
			swap: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
			lpToken: '0x97E2768e8E73511cA874545DC5Ff8067eB19B787',
			gauge: '0xC2b1DF84112619D190193E48148000e3990Bf627',
			deposit: '0xF1f85a74AD6c64315F85af52d3d46bF715236ADc',
		},
	}, {
		dataIndex: 14,
		id: 'usdn',
		name: 'usdn',
		poolName: 'Curve USDN',
		lpTokenInfo: {
			name: 'usdnCurve',
			symbol: 'usdnCrv',
		},
		coingeckoInfo: {
			id: 'neutrino',
			symbol: 'USDN',
		},
		assets: 'USDN+3pool',
		isMetaPool: true,
		coins: [
			coins.usdn,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
			swap: '0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1',
			lpToken: '0x4f3E8F405CF5aFC05D68142F3783bDfE13811522',
			gauge: '0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4',
			deposit: '0x094d12e5b541784701FD8d65F11fc0598FBC6332',
		},
	}, {
		dataIndex: 15,
		id: 'linkusd',
		name: 'linkusd',
		lpTokenInfo: {
			name: 'linkusdCurve',
			symbol: 'linkusdCrv',
		},
		coingeckoInfo: {
			id: 'linkusd',
			symbol: 'LINKUSD',
		},
		assets: 'LINKUSD+3pool',
		isMetaPool: true,
		coins: [
			coins.linkusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		isRiskier: true,
		hasNoGauge: true,
		addresses: {
			underlying: '0x0e2ec54fc0b509f445631bf4b91ab8168230c752',
			swap: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
			lpToken: '0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F',
			deposit: '0x1de7f0866e2c4adAC7b457c58Cc25c8688CDa1f2',
		},
		riskLevel: 3,
	}, {
		dataIndex: 16,
		id: 'musd',
		name: 'musd',
		poolName: 'Curve mUSD',
		lpTokenInfo: {
			name: 'musdCurve',
			symbol: 'musdCrv',
		},
		coingeckoInfo: {
			id: 'musd',
			symbol: 'MUSD',
		},
		assets: 'musd+3pool',
		isMetaPool: true,
		coins: [
			coins.musd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		oldAdditionalRewards: [{
			name: 'MTA',
			rewardTokenCoingeckoId: 'meta',
		}],
		addresses: {
			underlying: '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
			swap: '0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6',
			lpToken: '0x1AEf73d49Dedc4b1778d0706583995958Dc862e6',
			gauge: '0x5f626c30EC1215f4EdCc9982265E8b1F411D1352',
			deposit: '0x803A2B40c5a9BB2B86DD630B274Fa2A9202874C2',
		},
	}, {
		dataIndex: 17,
		id: 'rsv',
		name: 'rsv',
		poolName: 'Curve RSV',
		lpTokenInfo: {
			name: 'rsvCurve',
			symbol: 'rsvCrv',
		},
		coingeckoInfo: {
			id: 'reserve',
			symbol: 'RSV',
		},
		assets: 'rsv+3pool',
		isMetaPool: true,
		coins: [
			coins.rsv,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		additionalRewards: [{
			name: 'RSR',
			amountDataKey: 'rsrRewards',
			rewardTokenCoingeckoId: 'reserve-rights-token',
			rewardTokenAddress: '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
			convexRewarder: '0x94C259DC4C6dF248B0b5D23C055CB7574A587d67',
			rewardTokenDecimals: 18,
		}],
		addresses: {
			underlying: '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
			swap: '0xC18cC39da8b11dA8c3541C598eE022258F9744da',
			lpToken: '0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35',
			gauge: '0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7',
			deposit: '0xBE175115BF33E12348ff77CcfEE4726866A0Fbd5',
		},
	}, {
		dataIndex: 18,
		id: 'tbtc',
		name: 'tbtc',
		poolName: 'Curve tBTC',
		lpTokenInfo: {
			name: 'tbtcCurve',
			symbol: 'tbtcCrv',
		},
		coingeckoInfo: {
			id: 'tbtc',
			symbol: 'TBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'tbtc+sbtcCrv',
		isMetaPool: true,
		coins: [
			coins.tbtc,
			coins.sbtccrv,
		],
		metaCoins: [
			coins.renbtc,
			coins.wbtc,
			coins.sbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		oldAdditionalRewards: [{
			name: 'KEEP',
			rewardTokenCoingeckoId: 'keep-network',
		}],
		addresses: {
			underlying: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
			swap: '0xC25099792E9349C7DD09759744ea681C7de2cb66',
			lpToken: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
			gauge: '0x6828bcF74279eE32f2723eC536c22c51Eed383C6',
			deposit: '0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c',
		},
	}, {
		dataIndex: 19,
		id: 'dusd',
		name: 'dusd',
		poolName: 'Curve DUSD',
		lpTokenInfo: {
			name: 'dusdCurve',
			symbol: 'dusdCrv',
		},
		coingeckoInfo: {
			id: 'defidollar',
			symbol: 'DUSD',
		},
		assets: 'dusd+3pool',
		isMetaPool: true,
		coins: [
			coins.dusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		additionalRewards: [{
			name: 'DFD',
			amountDataKey: 'dfdRewards',
			rewardTokenCoingeckoId: 'defidollar-dao',
			rewardTokenAddress: '0x20c36f062a31865bED8a5B1e512D9a1A20AA333A',
			convexRewarder: '0x666F8eEE6FD6839853993977CC86a7A51425673C',
			rewardTokenDecimals: 18,
		}],
		addresses: {
			underlying: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
			swap: '0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c',
			lpToken: '0x3a664Ab939FD8482048609f652f9a0B0677337B9',
			gauge: '0xAEA6c312f4b3E04D752946d329693F7293bC2e6D',
			deposit: '0x61E10659fe3aa93d036d099405224E4Ac24996d0',
		},
	}, {
		dataIndex: 20,
		id: 'pbtc',
		name: 'pbtc',
		poolName: 'Curve pBTC',
		lpTokenInfo: {
			name: 'pbtcCurve',
			symbol: 'pbtcCrv',
		},
		coingeckoInfo: {
			id: 'ptokens-btc',
			symbol: 'PBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'pbtc+sbtcCrv',
		isMetaPool: true,
		coins: [
			coins.pbtc,
			coins.sbtccrv,
		],
		metaCoins: [
			coins.renbtc,
			coins.wbtc,
			coins.sbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		additionalRewards: [{
			name: 'PNT',
			amountDataKey: 'pntRewards',
			rewardTokenAddress: '0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD',
			convexRewarder: '0xAF138B29205c2246B069Ed8f0b213b205FBc14E0',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'pnetwork',
		}],
		addresses: {
			underlying: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
			swap: '0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF',
			lpToken: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
			gauge: '0xd7d147c6Bb90A718c3De8C0568F9B560C79fa416',
			deposit: '0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 21,
		id: 'bbtc',
		name: 'bbtc',
		poolName: 'Curve BBTC',
		lpTokenInfo: {
			name: 'bbtcCurve',
			symbol: 'bbtcCrv',
		},
		coingeckoInfo: {
			id: 'binance-wrapped-btc',
			symbol: 'BBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'bbtc+sbtcCrv',
		isMetaPool: true,
		coins: [
			coins.bbtc,
			coins.sbtccrv,
		],
		metaCoins: [
			coins.renbtc,
			coins.wbtc,
			coins.sbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		addresses: {
			underlying: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
			swap: '0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
			lpToken: '0x410e3E86ef427e30B9235497143881f717d93c2A',
			gauge: '0xdFc7AdFa664b08767b735dE28f9E84cd30492aeE',
			deposit: '0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 22,
		id: 'obtc',
		name: 'obtc',
		poolName: 'Curve oBTC',
		lpTokenInfo: {
			name: 'obtcCurve',
			symbol: 'obtcCrv',
		},
		coingeckoInfo: {
			id: 'boringdao-btc',
			symbol: 'OBTC',
			referenceAssetId: 'bitcoin',
			referenceVsId: 'btc'
		},
		assets: 'obtc+sbtcCrv',
		isMetaPool: true,
		coins: [
			coins.obtc,
			coins.sbtccrv,
		],
		metaCoins: [
			coins.renbtc,
			coins.wbtc,
			coins.sbtc,
		],
		referenceAsset: REFERENCE_ASSETS.BTC,
		additionalRewards: [{
			name: 'BOR',
			amountDataKey: 'borRewards',
			rewardTokenAddress: '0xbc19712feb3a26080ebf6f2f7849b417fdd792ca',
			convexRewarder: '0x22a07a6bdA1CECbe2a671203e2114d8A170E5529',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'boringdao',
		}],
		addresses: {
			underlying: '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
			swap: '0xd81dA8D904b52208541Bade1bD6595D8a251F8dd',
			lpToken: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
			gauge: '0x11137B10C210b579405c21A07489e28F3c040AB1',
			deposit: '0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 23,
		id: 'ust',
		name: 'ust',
		poolName: 'Curve UST',
		lpTokenInfo: {
			name: 'ustCurve',
			symbol: 'ustCrv',
		},
		coingeckoInfo: {
			id: 'terrausd',
			symbol: 'UST',
		},
		assets: 'ust+3pool',
		isMetaPool: true,
		coins: [
			coins.ust,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
			swap: '0x890f4e345B1dAED0367A877a1612f86A1f86985f',
			lpToken: '0x94e131324b6054c0D789b190b2dAC504e4361b53',
			gauge: '0x3B7020743Bc2A4ca9EaF9D0722d42E20d6935855',
			deposit: '0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 24,
		id: 'eurs',
		name: 'eurs',
		poolName: 'Curve EURS',
		lpTokenInfo: {
			name: 'eursCurve',
			symbol: 'eursCrv',
		},
		coingeckoInfo: {
			id: 'stasis-eurs',
			symbol: 'EURS',
			referenceAssetId: 'stasis-eurs',
			referenceVsId: 'eur' // Using stasis-eurs as the oracle for EUR/USD,
		},
		assets: 'eurs+seur',
		coins: [
			coins.eurs,
			coins.seur,
		],
		referenceAsset: REFERENCE_ASSETS.EUR,
		oldAdditionalRewards: [{
			name: 'SNX',
			rewardTokenAddress: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'havven',
		}],
		addresses: {
			underlying: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
			swap: '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA',
			lpToken: '0x194eBd173F6cDacE046C53eACcE9B953F28411d1',
			gauge: '0x90Bb609649E0451E5aD952683D64BD2d1f245840',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 25,
		id: 'seth',
		name: 'seth',
		poolName: 'Curve sETH',
		lpTokenInfo: {
			name: 'sethCurve',
			symbol: 'eCrv',
		},
		coingeckoInfo: {
			id: 'seth',
			symbol: 'SETH',
			referenceAssetId: 'ethereum',
			referenceVsId: 'eth'
		},
		assets: 'eth+seth',
		coins: [
			coins.eth,
			coins.seth,
		],
		referenceAsset: REFERENCE_ASSETS.ETH,
		addresses: {
			underlying: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
			swap: '0xc5424b857f758e906013f3555dad202e4bdb4567',
			lpToken: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c',
			gauge: '0x3C0FFFF15EA30C35d7A85B85c0782D6c94e1d238',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 26,
		id: 'aave',
		name: 'aave',
		poolName: 'Curve Aave',
		lpTokenInfo: {
			name: 'aaveCurve',
			symbol: 'a3Crv',
		},
		coingeckoInfo: {
			id: 'aave',
			symbol: 'AAVE',
		},
		assets: 'aDAI+aUSDC+aUSDT',
		coins: [
			coins.adai,
			coins.ausdc,
			coins.ausdt,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		isLendingPool: true,
		isModernLendingPool: true,
		addresses: {
			underlying: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
			swap: '0xDeBF20617708857ebe4F679508E7b7863a8A8EeE',
			lpToken: '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900',
			gauge: '0xd662908ADA2Ea1916B3318327A97eB18aD588b5d',
		},
		gaugeVersion: 2,
		additionalRewards: [{
			name: 'STKAAVE',
			amountDataKey: 'aaveRewards',
			rewardTokenAddress: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
			convexRewarder: '0x00469d388b06127221D6310843A43D079eb2bB18',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'aave',
		}],
	}, {
		dataIndex: 27,
		id: 'steth',
		name: 'steth',
		poolName: 'Curve stETH',
		lpTokenInfo: {
			name: 'stethCurve',
			symbol: 'stethCrv',
		},
		coingeckoInfo: {
			id: 'staked-ether',
			symbol: 'STETH',
			referenceAssetId: 'ethereum',
			referenceVsId: 'eth'
		},
		assets: 'eth+steth',
		coins: [
			coins.eth,
			coins.steth,
		],
		referenceAsset: REFERENCE_ASSETS.ETH,
		additionalRewards: [{
			name: 'LDO',
			amountDataKey: 'ldoRewards',
			rewardTokenAddress: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
			convexRewarder: '0x008aEa5036b819B4FEAEd10b2190FBb3954981E8',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'lido-dao',
		}],
		addresses: {
			underlying: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
			swap: '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022',
			lpToken: '0x06325440D014e39736583c165C2963BA99fAf14E',
			gauge: '0x182B723a58739a9c974cFDB385ceaDb237453c28',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 28,
		id: 'saave',
		name: 'saave',
		poolName: 'Curve sAave',
		lpTokenInfo: {
			name: 'saaveCurve',
			symbol: 'saCrv',
		},
		coingeckoInfo: {
			id: 'aave',
			symbol: 'AAVE',
		},
		assets: 'aDAI+asUSD',
		coins: [
			coins.adai,
			coins.asusd,
		],
		underlyingCoins: [
			coins.dai,
			coins.susd,
		],
		isLendingPool: true,
		isModernLendingPool: true,
		addresses: {
			underlying: '0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076',
			swap: '0xEB16Ae0052ed37f479f7fe63849198Df1765a733',
			lpToken: '0x02d341CcB60fAaf662bC0554d13778015d1b285C',
			gauge: '0x462253b8F74B72304c145DB0e4Eebd326B22ca39',
		},
		gaugeVersion: 2,
		additionalRewards: [{
			key: 'STKAAVES',
			name: 'STKAAVE',
			amountDataKey: 'saaveRewards',
			rewardTokenAddress: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
			convexRewarder: '0x20165075174b51a2f9Efbf7d6D8F3c72BBc63064',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'aave',
		}],
	}, {
		dataIndex: 29,
		id: 'ankreth',
		name: 'ankreth',
		poolName: 'Curve aETHc',
		lpTokenInfo: {
			name: 'ankrethCurve',
			symbol: 'aethCrv',
		},
		coingeckoInfo: {
			id: 'ankreth',
			symbol: 'AETH',
			referenceAssetId: 'ethereum',
			referenceVsId: 'eth'
		},
		assets: 'eth+ankreth',
		coins: [
			coins.eth,
			coins.ankreth,
		],
		referenceAsset: REFERENCE_ASSETS.ETH,
		additionalRewards: [{
			name: 'ANKR',
			amountDataKey: 'ankrRewards',
			rewardTokenAddress: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
			convexRewarder: '0xc095Cec98a9f8Ad6D2baA282A8e6bE246f98BD25',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'ankr',
		}, {
			name: 'ONX',
			amountDataKey: 'onxRewards',
			rewardTokenAddress: '0xe0ad1806fd3e7edf6ff52fdb822432e847411033',
			convexRewarder: '0x177252Ac74f1D77513971aA85AF7009C43EcdEe2',
			rewardTokenDecimals: 18,
			rewardTokenCoingeckoId: 'onx-finance',
		}],
		addresses: {
			underlying: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
			swap: '0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2',
			lpToken: '0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf',
			gauge: '0x6d10ed2cf043e6fcf51a0e7b4c2af3fa06695707',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 30,
		id: 'usdp',
		name: 'usdp',
		poolName: 'Curve USDP',
		lpTokenInfo: {
			name: 'usdpCurve',
			symbol: 'usdpCrv',
		},
		coingeckoInfo: {
			id: 'usdp',
			symbol: 'USDP',
		},
		assets: 'usdp+3pool',
		isMetaPool: true,
		coins: [
			coins.usdp,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x1456688345527bE1f37E9e627DA0837D6f08C925',
			swap: '0x42d7025938bEc20B69cBae5A77421082407f053A',
			lpToken: '0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6',
			gauge: '0x055be5DDB7A925BfEF3417FC157f53CA77cA7222',
			deposit: '0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 31,
		id: 'ib',
		name: 'ironbank',
		poolName: 'Curve Iron Bank',
		lpTokenInfo: {
			name: 'ibCurve',
			symbol: 'ib3Crv',
		},
		coingeckoInfo: {
			id: 'cream-2',
			symbol: 'CREAM',
		},
		assets: 'cyDAI+cyUSDC+cyUSDT',
		coins: [
			coins.cydai,
			coins.cyusdc,
			coins.cyusdt,
		],
		underlyingCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		isLendingPool: true,
		isModernLendingPool: true,
		addresses: {
			underlying: '0x2ba592F78dB6436527729929AAf6c908497cB200',
			swap: '0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF',
			lpToken: '0x5282a4eF67D9C33135340fB3289cc1711c13638C',
			gauge: '0xF5194c3325202F456c95c1Cf0cA36f8475C1949F',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 32,
		id: 'link',
		name: 'link',
		poolName: 'Curve LINK',
		lpTokenInfo: {
			name: 'linkCurve',
			symbol: 'linkCrv',
		},
		coingeckoInfo: {
			id: 'chainlink',
			symbol: 'LINK',
			referenceAssetId: 'chainlink',
			referenceVsId: 'link'
		},
		referenceAsset: REFERENCE_ASSETS.LINK,
		assets: 'LINK+sLINK',
		coins: [
			coins.link,
			coins.slink,
		],
		addresses: {
			underlying: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
			swap: '0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0',
			lpToken: '0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a',
			gauge: '0xfd4d8a17df4c27c1dd245d153ccf4499e806c87d',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 33,
		id: 'tusd',
		name: 'tusd',
		poolName: 'Curve TUSD',
		lpTokenInfo: {
			name: 'tusdCurve',
			symbol: 'tusdCrv',
		},
		coingeckoInfo: {
			id: 'true-usd',
			symbol: 'tUSDT',
		},
		assets: 'tusd+3pool',
		isMetaPool: true,
		coins: [
			coins.tusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x0000000000085d4780B73119b644AE5ecd22b376',
			swap: '0xecd5e75afb02efa118af914515d6521aabd189f1',
			lpToken: '0xecd5e75afb02efa118af914515d6521aabd189f1',
			gauge: '0x359FD5d6417aE3D8D6497d9B2e7A890798262BA4',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 34,
		id: 'frax',
		name: 'frax',
		poolName: 'Curve FRAX',
		lpTokenInfo: {
			name: 'fraxCurve',
			symbol: 'fraxCrv',
		},
		coingeckoInfo: {
			id: 'frax',
			symbol: 'FRAX',
		},
		assets: 'frax+3pool',
		isMetaPool: true,
		coins: [
			coins.frax,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x853d955acef822db058eb8505911ed77f175b99e',
			swap: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
			lpToken: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
			gauge: '0x72e158d38dbd50a483501c24f792bdaaa3e7d55c',
		},
		additionalRewards: [{
			name: 'FXS',
			amountDataKey: 'fxsRewards',
			rewardTokenCoingeckoId: 'frax-share',
			rewardTokenAddress: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
			convexRewarder: '0xcDEC6714eB482f28f4889A0c122868450CDBF0b0',
			rewardTokenDecimals: 18,
		}],
		isRiskier: true,
		riskLevel: 2,
		isPendingGaugeVoteToStartCrvRewards: true,
		expectedCrvRewardsStart: '28th of April',
	}, {
		dataIndex: 35,
		id: 'lusd',
		name: 'lusd',
		poolName: 'Curve LUSD',
		lpTokenInfo: {
			name: 'lusdCurve',
			symbol: 'lusdCrv',
		},
		coingeckoInfo: {
			id: 'liquity-usd',
			symbol: 'LUSD',
		},
		assets: 'lusd+3pool',
		isMetaPool: true,
		coins: [
			coins.lusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
			swap: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
			lpToken: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
			gauge: '0x9b8519a9a00100720ccdc8a120fbed319ca47a14',
		},
		isRiskier: true,
		riskLevel: 1,
		isPendingGaugeVoteToStartCrvRewards: true,
		expectedCrvRewardsStart: '28th of April',
		gaugeVersion: 2,
	}, {
		dataIndex: 36,
		id: 'busdv2',
		name: 'busdv2',
		poolName: 'Curve BUSD',
		lpTokenInfo: {
			name: 'busdCurve',
			symbol: 'busdCrv',
		},
		coingeckoInfo: {
			id: 'binance-usd',
			symbol: 'BUSD',
		},
		assets: 'busd+3pool',
		isMetaPool: true,
		coins: [
			coins.busd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
			swap: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
			lpToken: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
			gauge: '0xd4b22fedca85e684919955061fdf353b9d38389b',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
		},
		gaugeVersion: 2,
	}, {
		dataIndex: 37,
		id: 'reth',
		name: 'reth',
		poolName: 'Curve rETH',
		lpTokenInfo: {
			name: 'rethCurve',
			symbol: 'rethCrv',
		},
		coingeckoInfo: {
			id: 'reth',
			symbol: 'RETH',
			referenceAssetId: 'ethereum',
			referenceVsId: 'eth'
		},
		assets: 'eth+reth',
		coins: [
			coins.eth,
			coins.reth,
		],
		referenceAsset: REFERENCE_ASSETS.ETH,
		addresses: {
			underlying: '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593',
			swap: '0xF9440930043eb3997fc70e1339dBb11F341de7A8',
			lpToken: '0x53a901d48795C58f485cBB38df08FA96a24669D5',
			gauge: '0x824F13f1a2F29cFEEa81154b46C0fc820677A637',
		},
		gaugeVersion: 4,
		additionalRewards: [{
			name: 'FIS',
			amountDataKey: 'fisRewards',
			rewardTokenCoingeckoId: 'stafi',
			rewardTokenAddress: '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d',
			convexRewarder: '0x681A790debE586A64eea055BF0983CD6629d8359',
			rewardTokenDecimals: 18,
		}],
	}, {
		dataIndex: 38,
		id: 'alusd',
		name: 'alusd',
		poolName: 'Curve alUSD',
		lpTokenInfo: {
			name: 'alusdCurve',
			symbol: 'alusdCrv',
		},
		coingeckoInfo: {
			id: 'alchemix-usd',
			symbol: 'alUSD',
		},
		assets: 'alusd+3pool',
		isMetaPool: true,
		coins: [
			coins.alusd,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
			swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
			lpToken: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
			gauge: '0x9582C4ADACB3BCE56Fea3e590F05c3ca2fb9C477',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
		},
		gaugeVersion: 4,
		additionalRewards: [{
			name: 'ALCX',
			amountDataKey: 'alcxRewards',
			rewardTokenCoingeckoId: 'alchemix',
			rewardTokenAddress: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
			convexRewarder: '0xd731495bb78a4250bC094686788F3fF890dEe0f4',
			rewardTokenDecimals: 18,
		}],
	}, {
		dataIndex: 39,
		id: 'tricrypto',
		name: 'tricrypto',
		poolName: 'Curve triCrypto',
		lpTokenInfo: {
			name: '3CrvCrypto',
			symbol: '3CrvCrypto',
		},
		coingeckoInfo: {
			id: 'tricrypto',
			symbol: 'tricrypto',
		},
		assets: 'usdt+weth+wbtc',
		coins: [
			coins.usdt,
			coins.wbtc,
			coins.weth,
		],
		allowTradingEth: true,
		addresses: {
			underlying: '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF',
			swap: '0x80466c64868E1ab14a1Ddf27A676C3fcBE638Fe5',
			lpToken: '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF',
			deposit: '0x331aF2E331bd619DefAa5DAc6c038f53FCF9F785',
			gauge: '0x6955a55416a06839309018A8B0cB72c4DDC11f15',
			migrator: '0xD10d54830714003575d9f472d62268A29C902E5A',
		},
		gaugeVersion: 4,
		cryptoPool: true,
		referenceAsset: REFERENCE_ASSETS.CRYPTO,
	}, {
		dataIndex: 40,
		id: 'tricrypto2',
		name: 'tricrypto2',
		poolName: 'Curve 3Crypto',
		lpTokenInfo: {
			name: '3CrvCrypto2',
			symbol: '3CrvCrypto2',
		},
		coingeckoInfo: {
			id: 'tricrypto',
			symbol: 'tricrypto',
		},
		assets: 'usdt+weth+wbtc',
		coins: [
			coins.usdt,
			coins.wbtc,
			coins.weth,
		],
		allowTradingEth: true,
		addresses: {
			underlying: '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF',
			swap: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
			lpToken: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
			deposit: '0x3993d34e7e99Abf6B6f367309975d1360222D446',
			gauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
			migrator: '0x0ce658f9bc3af831271199578449810023dba703',
		},
		gaugeVersion: 4,
		cryptoPool: true,
		referenceAsset: REFERENCE_ASSETS.CRYPTO,
	}, {
		dataIndex: 41,
		id: 'mim',
		name: 'mim',
		poolName: 'Curve MIM',
		lpTokenInfo: {
			name: 'mimCurve',
			symbol: 'mimCrv',
		},
		coingeckoInfo: {
			id: 'magic-internet-money',
			symbol: 'MIM',
		},
		assets: 'mim+3pool',
		isMetaPool: true,
		coins: [
			coins.mim,
			coins.tricrv,
		],
		metaCoins: [
			coins.dai,
			coins.usdc,
			coins.usdt,
		],
		addresses: {
			underlying: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
			swap: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
			lpToken: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
			gauge: '0xd8b712d29381748dB89c36BCa0138d7c75866ddF',
		},
		gaugeVersion: 2,
		additionalRewards: [{
			name: 'SPELL',
			amountDataKey: 'spellRewards',
			rewardTokenCoingeckoId: 'spell-token',
			rewardTokenAddress: '0x090185f2135308bad17527004364ebcc2d37e5f6',
			convexRewarder: '0x69a92f1656cd2e193797546cFe2EaF32EACcf6f7',
			rewardTokenDecimals: 18,
		}],
	}, {
		dataIndex: 42,
		id: 'eurt',
		name: 'eurt',
		poolName: 'Curve EURT',
		lpTokenInfo: {
			name: 'eurtCurve',
			symbol: 'eurtCrv',
		},
		coingeckoInfo: {
			id: 'tether-eurt',
			symbol: 'EURT',
			referenceAssetId: 'stasis-eurs',
			referenceVsId: 'eur',
		},
		assets: 'eurt+seur',
		coins: [
			coins.eurt,
			coins.seur,
		],
		addresses: {
			underlying: '0xC581b735A1688071A1746c968e0798D642EDE491',
			swap: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
			lpToken: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
			gauge: '0xe8060Ad8971450E624d5289A10017dD30F5dA85F',
		},
		gaugeVersion: 4,
	},
	{
		dataIndex: 43,
		id: 'f-ibjpy',
		name: 'Fixed Forex: JPY',
		poolName: 'Curve ibJPY',
		lpTokenInfo: {
			name: 'f-ibjpyCurve',
			symbol: 'f-ibjpyCrv'
		},
		factoryPoolId: 28,
		assets: 'ibJPY+sJPY',
		referenceAsset: REFERENCE_ASSETS.JPY,
		coingeckoInfo: {
			id: 'jpyc',
			symbol: 'JPY'
		},
		coins: [coins.ibjpy, coins.sjpy],
		addresses: {
			underlying: '0x5555f75e3d5278082200Fb451D1b6bA946D8e13b',
			swap: '0x8818a9bb44Fbf33502bE7c15c500d0C783B73067',
			lpToken: '0x8818a9bb44Fbf33502bE7c15c500d0C783B73067',
			gauge: '0xeFF437A56A22D7dD86C1202A308536ED8C7da7c1'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 44,
		id: 'f-ibgbp',
		name: 'Fixed Forex: GBP',
		poolName: 'Curve ibGBP',
		lpTokenInfo: {
			name: 'f-ibgbpCurve',
			symbol: 'f-ibgbpCrv'
		},
		factoryPoolId: 30,
		assets: 'ibGBP+sGBP',
		referenceAsset: REFERENCE_ASSETS.GBP,
		coingeckoInfo: {
			id: 'truegbp',
			symbol: 'GBP'
		},
		coins: [coins.ibgbp, coins.sgbp],
		addresses: {
			swap: '0xD6Ac1CB9019137a896343Da59dDE6d097F710538',
			lpToken: '0xD6Ac1CB9019137a896343Da59dDE6d097F710538',
			gauge: '0x63d9f3aB7d0c528797A12a0684E50C397E9e79dC'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 45,
		id: 'f-ibaud',
		name: 'Fixed Forex: AUD',
		poolName: 'Curve ibAUD',
		lpTokenInfo: {
			name: 'f-ibaudCurve',
			symbol: 'f-ibaudCrv'
		},
		factoryPoolId: 29,
		assets: 'ibAUD+sAUD',
		referenceAsset: REFERENCE_ASSETS.AUD,
		coingeckoInfo: {
			id: 'saud',
			symbol: 'AUD'
		},
		coins: [coins.ibaud, coins.saud],
		addresses: {
			swap: '0x3F1B0278A9ee595635B61817630cC19DE792f506',
			lpToken: '0x3F1B0278A9ee595635B61817630cC19DE792f506',
			gauge: '0x05ca5c01629a8E5845f12ea3A03fF7331932233A'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 46,
		id: 'f-ibeur',
		name: 'Fixed Forex: EUR',
		poolName: 'Curve ibEUR',
		lpTokenInfo: {
			name: 'f-ibeurCurve',
			symbol: 'f-ibeurCrv'
		},
		factoryPoolId: 3,
		assets: 'ibEUR+sEUR',
		referenceAsset: REFERENCE_ASSETS.EUR,
		coingeckoInfo: {
			id: 'tether-eurt',
			symbol: 'EUR'
		},
		coins: [coins.ibeur, coins.seur],
		addresses: {
			swap: '0x19b080FE1ffA0553469D20Ca36219F17Fcf03859',
			lpToken: '0x19b080FE1ffA0553469D20Ca36219F17Fcf03859',
			gauge: '0x99fb76F75501039089AAC8f20f487bf84E51d76F'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 47,
		id: 'f-ibchf',
		name: 'Fixed Forex: CHF',
		poolName: 'Curve ibCHF',
		lpTokenInfo: {
			name: 'f-ibchfCurve',
			symbol: 'f-ibchfCrv'
		},
		factoryPoolId: 31,
		assets: 'ibCHF+sCHF',
		referenceAsset: REFERENCE_ASSETS.CHF,
		coingeckoInfo: {
			id: 'cryptofranc',
			symbol: 'CHF'
		},
		coins: [coins.ibchf, coins.schf],
		addresses: {
			swap: '0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c',
			lpToken: '0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c',
			gauge: '0x2fA53e8fa5fAdb81f4332C8EcE39Fe62eA2f919E'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 48,
		id: 'f-ibkrw',
		name: 'Fixed Forex: KRW',
		poolName: 'Curve ibKRW',
		lpTokenInfo: {
			name: 'f-ibkrwCurve',
			symbol: 'f-ibkrwCrv'
		},
		factoryPoolId: 2,
		assets: 'ibKRW+sKRW',
		referenceAsset: REFERENCE_ASSETS.KRW,
		coingeckoInfo: {
			id: 'terra-krw',
			symbol: 'KRW'
		},
		coins: [coins.ibkrw, coins.skrw],
		addresses: {
			swap: '0x8461A004b50d321CB22B7d034969cE6803911899',
			lpToken: '0x8461A004b50d321CB22B7d034969cE6803911899',
			gauge: '0x1750a3a3d80A3F5333BBe9c4695B0fAd41061ab1'
		},
		gaugeVersion: 4
	},


	{
		dataIndex: 49,
		id: 'aleth',
		name: 'alETH',
		poolName: 'Curve alETH',
		lpTokenInfo: {
			name: 'alethCurve',
			symbol: 'alethCrv'
		},
		factoryPoolId: 38,
		assets: 'ETH+alETH',
		referenceAsset: REFERENCE_ASSETS.ETH,
		coingeckoInfo: {
			id: 'ethereum',
			symbol: 'alETH',
			referenceAssetId: 'ethereum'
		},
		coins: [coins.eth, coins.aleth],
		addresses: {
			swap: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
			lpToken: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
			gauge: '0x12dCD9E8D1577b5E4F066d8e7D404404Ef045342'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 50,
		id: 'eurn',
		name: 'eurn',
		lpTokenInfo: {
			name: 'eurnCurve',
			symbol: 'eurnCrv'
		},
		factoryPoolId: 33,
		assets: 'EURN+EURT',
		referenceAsset: REFERENCE_ASSETS.EUR,
		coingeckoInfo: {
			id: 'tether-eurt',
			symbol: 'EUR',
			referenceAssetId: 'tether-eurt'
		},
		coins: [coins.eurn, coins.eurt],
		addresses: {
			swap: '0x3Fb78e61784C9c637D560eDE23Ad57CA1294c14a',
			lpToken: '0x3Fb78e61784C9c637D560eDE23Ad57CA1294c14a',
			gauge: '0xD9277b0D007464eFF133622eC0d42081c93Cef02'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 51,
		id: 'usdm',
		name: 'usdm',
		lpTokenInfo: {
			name: 'usdmCurve',
			symbol: 'usdmCrv'
		},
		factoryPoolId: 23,
		assets: 'USDM+3pool',
		referenceAsset: REFERENCE_ASSETS.USD,
		coingeckoInfo: {
			referenceAssetId: 'dollar'
		},
		isMetaPool: true,
		coins: [coins.usdm, coins.tricrv],
		metaCoins: [coins.dai, coins.usdc, coins.usdt],
		addresses: {
			swap: '0x5B3b5DF2BF2B6543f78e053bD91C4Bdd820929f1',
			lpToken: '0x5B3b5DF2BF2B6543f78e053bD91C4Bdd820929f1',
			gauge: '0x9AF13a7B1f1Bbf1A2B05c6fBF23ac23A9E573b4E',
			deposit: '0xA79828DF1850E8a3A3064576f380D90aECDD3359'
		},
		gaugeVersion: 4
	}, {
		dataIndex: 52,
		id: 'mim-ust',
		name: 'mim-ust',
		lpTokenInfo: {
			name: 'mimustCurve',
			symbol: 'mimustCrv'
		},
		factoryPoolId: 48,
		assets: 'MIM+UST',
		referenceAsset: REFERENCE_ASSETS.USD,
		coingeckoInfo: {
			id: 'magic-internet-money',
			symbol: 'MIM',
			referenceAssetId: 'dollar'
		},
		isMetaPool: false,
		coins: [coins.mim, coins.ust],
		addresses: {
			swap: '0x55A8a39bc9694714E2874c1ce77aa1E599461E18',
			lpToken: '0x55A8a39bc9694714E2874c1ce77aa1E599461E18',
			gauge: '0xB518f5e3242393d4eC792BD3f44946A3b98d0E48'
		},
		gaugeVersion: 4
	}
];
