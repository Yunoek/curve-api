const REFERENCE_ASSETS = require('../reference-assets.json');

module.exports = {
	dai: {
		id: 'dai',
		coingeckoId: 'dai',
		type: REFERENCE_ASSETS.USD,
		symbol: 'DAI',
		decimals: 18,
		address: '0x6b175474e89094c44da98b954eedeac495271d0f',
	},
	cdai: {
		id: 'cdai',
		coingeckoId: 'cdai',
		type: REFERENCE_ASSETS.USD,
		symbol: 'cDAI',
		decimals: 8,
		address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
		wrappedCoinType: 'compound',
	},
	ydai: {
		id: 'ydai',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'yDAI',
		decimals: 18,
		address: '0x16de59092dae5ccf4a1e6439d611fd0653f0bd01',
		wrappedCoinType: 'iearn',
	},
	adai: {
		id: 'adai',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'aDAI',
		decimals: 18,
		address: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
		wrappedCoinType: 'aave',
	},
	ycdai: {
		id: 'ycdai',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'ycDAI',
		decimals: 18,
		address: '0x99d1Fa417f94dcD62BfE781a1213c092a47041Bc',
		wrappedCoinType: 'iearn-fork',
	},
	cydai: {
		id: 'cydai',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'cyDAI',
		decimals: 8,
		address: '0x8e595470Ed749b85C6F7669de83EAe304C2ec68F',
		wrappedCoinType: 'iearn-cream',
	},
	usdc: {
		id: 'usdc',
		coingeckoId: 'usdc',
		type: REFERENCE_ASSETS.USD,
		symbol: 'USDC',
		decimals: 6,
		address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	},
	cusdc: {
		id: 'cusdc',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'cUSDC',
		decimals: 8,
		address: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
		wrappedCoinType: 'compound',
	},
	yusdc: {
		id: 'yusdc',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'yUSDC',
		decimals: 6,
		address: '0xd6ad7a6750a7593e092a9b218d66c0a814a3436e',
		wrappedCoinType: 'iearn',
	},
	ausdc: {
		id: 'ausdc',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'aUSDC',
		decimals: 6,
		address: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
		wrappedCoinType: 'aave',
	},
	ycusdc: {
		id: 'ycusdc',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'ycUSDC',
		decimals: 6,
		address: '0x9777d7E2b60bB01759D0E2f8be2095df444cb07E',
		wrappedCoinType: 'iearn-fork',
	},
	cyusdc: {
		id: 'cyusdc',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'cyUSDC',
		decimals: 8,
		address: '0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c',
		wrappedCoinType: 'iearn-cream',
	},
	usdt: {
		id: 'usdt',
		coingeckoId: 'usdt',
		type: REFERENCE_ASSETS.USD,
		symbol: 'USDT',
		decimals: 6,
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
	},
	yusdt: {
		id: 'yusdt',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'yUSDT',
		decimals: 6,
		address: '0x83f798e925bcd4017eb265844fddabb448f1707d',
		wrappedCoinType: 'iearn',
	},
	ausdt: {
		id: 'ausdt',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'aUSDT',
		decimals: 6,
		address: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
		wrappedCoinType: 'aave',
	},
	ycusdt: {
		id: 'ycusdt',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'ycUSDT',
		decimals: 6,
		address: '0x1bE5d71F2dA660BFdee8012dDc58D024448A0A59',
		wrappedCoinType: 'iearn-fork',
	},
	cyusdt: {
		id: 'cyusdt',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'cyUSDT',
		decimals: 8,
		address: '0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a',
		wrappedCoinType: 'iearn-cream',
	},
	tusd: {
		id: 'tusd',
		coingeckoId: 'tusd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'TUSD',
		decimals: 18,
		address: '0x0000000000085d4780B73119b644AE5ecd22b376',
	},
	ytusd: {
		id: 'ytusd',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'yTUSD',
		decimals: 18,
		address: '0x73a052500105205d34daf004eab301916da8190f',
		wrappedCoinType: 'iearn',
	},
	busd: {
		id: 'busd',
		coingeckoId: 'busd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'BUSD',
		decimals: 18,
		address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
	},
	ybusd: {
		id: 'ybusd',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'yBUSD',
		decimals: 18,
		address: '0x04bC0Ab673d88aE9dbC9DA2380cB6B79C4BCa9aE',
		wrappedCoinType: 'iearn',
	},
	susd: {
		id: 'susd',
		coingeckoId: 'susd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'sUSD',
		decimals: 18,
		address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
		isSynth: true,
	},
	asusd: {
		id: 'asusd',
		coingeckoId: null,
		type: REFERENCE_ASSETS.USD,
		symbol: 'aSUSD',
		decimals: 18,
		address: '0x6C5024Cd4F8A59110119C56f8933403A539555EB',
		wrappedCoinType: 'aave',
	},
	pax: {
		id: 'pax',
		coingeckoId: 'pax',
		type: REFERENCE_ASSETS.USD,
		symbol: 'PAX',
		decimals: 18,
		address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
	},
	renbtc: {
		id: 'renbtc',
		coingeckoId: 'renbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'renBTC',
		decimals: 8,
		address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
	},
	wbtc: {
		id: 'wbtc',
		coingeckoId: 'wbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'wBTC',
		decimals: 8,
		address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
	},
	sbtc: {
		id: 'sbtc',
		coingeckoId: 'sbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'sBTC',
		decimals: 18,
		address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
		isSynth: true,
	},
	hbtc: {
		id: 'hbtc',
		coingeckoId: 'hbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'HBTC',
		decimals: 18,
		address: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
	},
	gusd: {
		id: 'gusd',
		coingeckoId: 'gusd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'GUSD',
		decimals: 2,
		address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
	},
	husd: {
		id: 'husd',
		coingeckoId: 'husd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'HUSD',
		decimals: 8,
		address: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
	},
	usdk: {
		id: 'usdk',
		coingeckoId: 'usdk',
		type: REFERENCE_ASSETS.USD,
		symbol: 'USDK',
		decimals: 18,
		address: '0x1c48f86ae57291f7686349f12601910bd8d470bb',
	},
	usdn: {
		id: 'usdn',
		coingeckoId: 'usdn',
		type: REFERENCE_ASSETS.USD,
		symbol: 'USDN',
		decimals: 18,
		address: '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
	},
	linkusd: {
		id: 'linkusd',
		coingeckoId: 'linkusd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'LINKUSD',
		decimals: 18,
		address: '0x0E2EC54fC0B509F445631Bf4b91AB8168230C752',
	},
	musd: {
		id: 'musd',
		coingeckoId: 'musd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'mUSD',
		decimals: 18,
		address: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
	},
	rsv: {
		id: 'rsv',
		coingeckoId: 'rsv',
		type: REFERENCE_ASSETS.USD,
		symbol: 'RSV',
		decimals: 18,
		address: '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
	},
	tbtc: {
		id: 'tbtc',
		coingeckoId: 'tbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'tBTC',
		decimals: 18,
		address: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
	},
	dusd: {
		id: 'dusd',
		coingeckoId: 'dusd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'DUSD',
		decimals: 18,
		address: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
	},
	pbtc: {
		id: 'pbtc',
		coingeckoId: 'pbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'pBTC',
		decimals: 18,
		address: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
	},
	bbtc: {
		id: 'bbtc',
		coingeckoId: 'bbtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'BBTC',
		decimals: 8,
		address: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
	},
	obtc: {
		id: 'obtc',
		coingeckoId: 'obtc',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'oBTC',
		decimals: 18,
		address: '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
	},
	ust: {
		id: 'ust',
		coingeckoId: 'ust',
		type: REFERENCE_ASSETS.USD,
		symbol: 'UST',
		decimals: 18,
		address: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
	},
	eurs: {
		id: 'eurs',
		coingeckoId: 'eurs',
		type: REFERENCE_ASSETS.EUR,
		symbol: 'EURs',
		decimals: 2,
		address: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
		check_market: true, // ?
	},
	seur: {
		id: 'seur',
		coingeckoId: 'seur',
		type: REFERENCE_ASSETS.EUR,
		symbol: 'sEUR',
		decimals: 18,
		address: '0xd71ecff9342a5ced620049e616c5035f1db98620',
		isSynth: true,
		check_market: true, // ?
	},
	eth: {
		id: 'eth',
		coingeckoId: 'ethereum',
		type: REFERENCE_ASSETS.ETH,
		symbol: 'ETH',
		decimals: 18,
		address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
	},
	seth: {
		id: 'seth',
		coingeckoId: 'seth',
		type: REFERENCE_ASSETS.ETH,
		symbol: 'sETH',
		decimals: 18,
		address: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
		isSynth: true,
	},
	steth: {
		id: 'steth',
		coingeckoId: 'steth',
		type: REFERENCE_ASSETS.ETH,
		symbol: 'stETH',
		decimals: 18,
		address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
	},
	ankreth: {
		id: 'ankreth',
		coingeckoId: 'ankreth',
		type: REFERENCE_ASSETS.ETH,
		symbol: 'ankrETH',
		decimals: 18,
		address: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
	},
	usdp: {
		id: 'usdp',
		coingeckoId: 'usdp',
		type: REFERENCE_ASSETS.USD,
		symbol: 'USDP',
		decimals: 18,
		address: '0x1456688345527bE1f37E9e627DA0837D6f08C925',
	},
	link: {
		id: 'link',
		coingeckoId: 'link',
		type: REFERENCE_ASSETS.LINK,
		symbol: 'LINK',
		decimals: 18,
		address: '0x514910771af9ca656af840dff83e8264ecf986ca',
	},
	slink: {
		id: 'slink',
		coingeckoId: 'slink',
		type: REFERENCE_ASSETS.LINK,
		symbol: 'sLINK',
		decimals: 18,
		address: '0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6',
		isSynth: true,
	},
	tricrv: {
		id: 'tricrv',
		type: REFERENCE_ASSETS.USD,
		symbol: '3Crv',
		decimals: 18,
		address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
		isLpToken: true,
	},
	frax: {
		id: 'frax',
		coingeckoId: 'frax',
		type: REFERENCE_ASSETS.USD,
		symbol: 'FRAX',
		decimals: 18,
		address: '0x853d955acef822db058eb8505911ed77f175b99e',
	},
	lusd: {
		id: 'lusd',
		coingeckoId: 'liquity-usd',
		type: REFERENCE_ASSETS.USD,
		symbol: 'LUSD',
		decimals: 18,
		address: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
	},
	weth: {
		id: 'weth',
		coingeckoId: 'ethereum',
		type: REFERENCE_ASSETS.ETH,
		symbol: 'WETH',
		decimals: 18,
		address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
	},
	sbtccrv: {
		id: 'sbtccrv',
		type: REFERENCE_ASSETS.BTC,
		symbol: 'sbtcCrv',
		decimals: 18,
		address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
		isLpToken: true,
	},
	snx: {
		id: 'snx',
		coingeckoId: 'havven',
		symbol: 'SNX',
		decimals: 18,
		address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
	},
	pnt: {
		id: 'pnt',
		coingeckoId: 'pnetwork',
		symbol: 'PNT',
		decimals: 18,
		address: '0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD',
	},
	rsr: {
		id: 'rsr',
		coingeckoId: 'reserve-rights-token',
		symbol: 'RSR',
		decimals: 18,
		address: '0x8762db106B2c2A0bccB3A80d1Ed41273552616E8',
	},
	dfd: {
		id: 'dfd',
		coingeckoId: 'defidollar-dao',
		symbol: 'DFD',
		decimals: 18,
		address: '0x20c36f062a31865bED8a5B1e512D9a1A20AA333A',
	},
	bor: {
		id: 'bor',
		coingeckoId: 'boringdao-[old]',
		symbol: 'BOR',
		decimals: 18,
		address: '0x3c9d6c1C73b31c837832c72E04D3152f051fc1A9',
	},
	ldo: {
		id: 'ldo',
		coingeckoId: 'lido-dao',
		symbol: 'LDO',
		decimals: 18,
		address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
	},
	onx: {
		id: 'onx',
		coingeckoId: 'onx-finance',
		symbol: 'ONX',
		decimals: 18,
		address: '0xE0aD1806Fd3E7edF6FF52Fdb822432e847411033',
	},
	ankr: {
		id: 'ankr',
		coingeckoId: 'ankr',
		symbol: 'ANKR',
		decimals: 18,
		address: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
	},
	lqty: {
		id: 'lqty',
		coingeckoId: 'liquity',
		symbol: 'LQTY',
		decimals: 18,
		address: '0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D',
	},
	snxrenbpt: {
		id: 'snxrenbpt',
		symbol: 'SNX/REN BPT',
		coingeckoId: null,
		decimals: 18,
		address: '0x330416C863f2acCE7aF9C9314B422d24c672534a',
	},
	mta: {
		id: 'mta',
		symbol: 'MTA',
		coingeckoId: 'meta',
		decimals: 18,
		address: '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',
	},
	stkaave: {
		id: 'stkaave',
		symbol: 'stkAAVE',
		coingeckoId: 'aave',
		decimals: 18,
		address: '0x4da27a545c0c5B758a6BA100e3a049001de870f5',
	},
	keep: {
		id: 'keep',
		symbol: 'KEEP',
		coingeckoId: 'keep-network',
		decimals: 18,
		address: '0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC',
	},
	fxs: {
		id: 'fxs',
		symbol: 'FXS',
		coingeckoId: 'frax-share',
		decimals: 18,
		address: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
	},
	fis: {
		id: 'fis',
		symbol: 'FIS',
		coingeckoId: 'stafi',
		decimals: 18,
		address: '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d',
	},
	reth: {
		id: 'reth',
		symbol: 'rETH',
		coingeckoId: 'reth',
		decimals: 18,
		address: '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593',
	},
	alusd: {
		id: 'alusd',
		symbol: 'alUSD',
		coingeckoId: 'alchemix-usd',
		decimals: 18,
		address: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
	},
	alcx: {
		id: 'alcx',
		symbol: 'ALCX',
		coingeckoId: 'alchemix',
		decimals: 18,
		address: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
	},
	crv: {
		id: 'crv',
		coingeckoId: 'curve-dao-token',
		symbol: 'CRV',
		decimals: 18,
		address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
		contractKey: 'Crv',
	},
	cvx: {
		id: 'cvx',
		coingeckoId: 'convex-finance',
		symbol: 'CVX',
		decimals: 18,
		address: '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7',
		contractKey: 'Cvx',
	},
	sushi: {
		id: 'sushi',
		coingeckoId: 'sushi',
		symbol: 'SUSHI',
		decimals: 18,
		address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
		contractKey: 'Sushi',
	},
	eps: {
		id: 'eps',
		coingeckoId: 'ellipsis',
		symbol: 'EPS',
		decimals: 18,
	},
	bnb: {
		id: 'bnb',
		coingeckoId: 'binance-coin',
		symbol: 'BNB',
		decimals: 18,
	},
	mim: {
		id: 'mim',
		coingeckoId: 'magic-internet-money',
		symbol: 'mim',
		decimals: 18,
		address: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3'
	},
	eurt: {
		id: 'eurt',
		coingeckoId: 'tether-eurt',
		symbol: 'eurt',
		decimals: 18,
		address: '0xC581b735A1688071A1746c968e0798D642EDE491'
	},
};
