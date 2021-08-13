import axios from 'axios';
import Web3 from 'web3';
import { fn } from '../../utils/api';
import aggregatorInterfaceABI from '../../constants/abis/aggregator.json';

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);

export default fn(async () => {


  let gauges = {
    compound: {
      swap: '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56',
      swap_token: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
      name: 'compound',
      gauge: '0x7ca5b0a2910B33e9759DC7dDB0413949071D7575',
      type: 'stable',
    },
    usdt: {
      swap: '0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C',
      swap_token: '0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23',
      name: 'usdt',
      gauge: '0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53',
      type: 'stable',
    },
    y: {
      swap: '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51',
      swap_token: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
      name: 'y',
      gauge: '0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1',
      type: 'stable',
    },
    busd: {
      swap: '0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27',
      swap_token: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
      name: 'busd',
      gauge: '0x69Fb7c45726cfE2baDeE8317005d3F94bE838840',
      type: 'stable',
    },
    susdv2: {
      swap: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
      swap_token: '0xC25a3A3b969415c80451098fa907EC722572917F',
      name: 'susdv2',
      gauge: '0xA90996896660DEcC6E997655E065b23788857849',
      type: 'stable',
    },
    pax: {
      swap: '0x06364f10B501e868329afBc005b3492902d6C763',
      swap_token: '0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8',
      name: 'pax',
      gauge: '0x64E3C23bfc40722d3B649844055F1D51c1ac041d',
    },
    ren: {
      swap: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
      swap_token: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
      name: 'ren',
      gauge: '0xB1F2cdeC61db658F091671F5f199635aEF202CAC',
    },
    sbtc: {
      swap: '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714',
      swap_token: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
      name: 'sbtc',
      gauge: '0x705350c4BcD35c9441419DdD5d2f097d7a55410F',
    },
    hbtc: {
      swap: '0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F',
      swap_token: '0xb19059ebb43466C323583928285a49f558E572Fd',
      name: 'hbtc',
      gauge: '0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79',
    },
    '3pool': {
      swap: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7',
      swap_token: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      name: '3pool',
      gauge: '0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A',
    },
    gusd: {
      swap: '0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956',
      swap_token: '0xD2967f45c4f384DEEa880F807Be904762a3DeA07',
      name: 'gusd',
      gauge: '0xC5cfaDA84E902aD92DD40194f0883ad49639b023',
    },
    husd: {
      swap: '0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604',
      swap_token: '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858',
      name: 'husd',
      gauge: '0x2db0E83599a91b508Ac268a6197b8B14F5e72840',
    },
    usdk: {
      swap: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
      swap_token: '0x97E2768e8E73511cA874545DC5Ff8067eB19B787',
      name: 'usdk',
      gauge: '0xC2b1DF84112619D190193E48148000e3990Bf627',
    },
    usdn: {
      swap: '0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1',
      swap_token: '0x4f3E8F405CF5aFC05D68142F3783bDfE13811522',
      name: 'usdn',
      gauge: '0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4',
    },
    musd: {
      swap: '0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6',
      swap_token: '0x1AEf73d49Dedc4b1778d0706583995958Dc862e6',
      name: 'musd',
      gauge: '0x5f626c30EC1215f4EdCc9982265E8b1F411D1352',
    },
    tbtc: {
      swap: '0xC25099792E9349C7DD09759744ea681C7de2cb66',
      swap_token: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
      name: 'tbtc',
      gauge: '0x6828bcF74279eE32f2723eC536c22c51Eed383C6',
    },
    rsv: {
      swap: '0xC18cC39da8b11dA8c3541C598eE022258F9744da',
      swap_token: '0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35',
      name: 'rsv',
      gauge: '0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7',
    },
    dusd: {
      swap: '0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c',
      swap_token: '0x3a664Ab939FD8482048609f652f9a0B0677337B9',
      name: 'dusd',
      gauge: '0xAEA6c312f4b3E04D752946d329693F7293bC2e6D',
    },
    pbtc: {
      swap: '0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF',
      swap_token: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
      name: 'pbtc',
      gauge: '0xd7d147c6Bb90A718c3De8C0568F9B560C79fa416',
    },
    bbtc: {
      swap: '0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
      swap_token: '0x410e3E86ef427e30B9235497143881f717d93c2A',
      name: 'bbtc',
      gauge: '0xdFc7AdFa664b08767b735dE28f9E84cd30492aeE',
    },
    obtc: {
      swap: '0xd81dA8D904b52208541Bade1bD6595D8a251F8dd',
      swap_token: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
      name: 'obtc',
      gauge: '0x11137B10C210b579405c21A07489e28F3c040AB1',
    },
    ust: {
      swap: '0x890f4e345B1dAED0367A877a1612f86A1f86985f',
      swap_token: '0x94e131324b6054c0D789b190b2dAC504e4361b53',
      name: 'ust',
      gauge: '0x3B7020743Bc2A4ca9EaF9D0722d42E20d6935855',
    },
    eurs: {
      swap: '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA',
      swap_token: '0x194eBd173F6cDacE046C53eACcE9B953F28411d1',
      name: 'eurs',
      gauge: '0x90Bb609649E0451E5aD952683D64BD2d1f245840',
    },
    seth: {
      swap: '0xc5424b857f758e906013f3555dad202e4bdb4567',
      swap_token: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c',
      name: 'seth',
      gauge: '0x3C0FFFF15EA30C35d7A85B85c0782D6c94e1d238',
    },
    aave: {
      swap: '0xDeBF20617708857ebe4F679508E7b7863a8A8EeE',
      swap_token: '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900',
      name: 'aave',
      gauge: '0xd662908ADA2Ea1916B3318327A97eB18aD588b5d',
    },
    steth: {
      swap: '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022',
      swap_token: '0x06325440D014e39736583c165C2963BA99fAf14E',
      name: 'steth',
      gauge: '0x182B723a58739a9c974cFDB385ceaDb237453c28',
    },
    saave: {
      swap: '0xEB16Ae0052ed37f479f7fe63849198Df1765a733',
      swap_token: '0x02d341CcB60fAaf662bC0554d13778015d1b285C',
      name: 'saave',
      gauge: '0x462253b8F74B72304c145DB0e4Eebd326B22ca39',
    },
    ankreth: {
      swap: '0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2',
      swap_token: '0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf',
      name: 'ankreth',
      gauge: '0x6d10ed2cF043E6fcf51A0e7b4C2Af3Fa06695707',
    },
    ib: {
      swap: '0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF',
      swap_token: '0x5282a4eF67D9C33135340fB3289cc1711c13638C',
      name: 'ib',
      gauge: '0xF5194c3325202F456c95c1Cf0cA36f8475C1949F',
    },
    link: {
      swap: '0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0',
      swap_token: '0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a',
      name: 'link',
      gauge: '0xFD4D8a17df4C27c1dD245d153ccf4499e806C87D',
    },
    usdp: {
      swap: '0x42d7025938bEc20B69cBae5A77421082407f053A',
      swap_token: '0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6',
      name: 'usdp',
      gauge: '0x055be5DDB7A925BfEF3417FC157f53CA77cA7222',
    },
    tusd: {
      swap: '0xecd5e75afb02efa118af914515d6521aabd189f1',
      swap_token: '0xecd5e75afb02efa118af914515d6521aabd189f1',
      name: 'tusd',
      gauge: '0x359FD5d6417aE3D8D6497d9B2e7A890798262BA4',
    },
    busdv2: {
      swap: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
      swap_token: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
      name: 'busdv2',
      gauge: '0xd4B22fEdcA85E684919955061fDf353b9d38389b',
    },
    frax: {
      swap: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
      swap_token: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
      name: 'frax',
      gauge: '0x72E158d38dbd50A483501c24f792bDAAA3e7D55C',
    },
    lusd: {
      swap: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
      swap_token: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
      name: 'lusd',
      gauge: '0x9B8519A9a00100720CCdC8a120fBeD319cA47a14',
    },
    reth: {
      swap: '0xF9440930043eb3997fc70e1339dBb11F341de7A8',
      swap_token: '0x53a901d48795C58f485cBB38df08FA96a24669D5',
      name: 'reth',
      gauge: '0x824F13f1a2F29cFEEa81154b46C0fc820677A637',
    },
    alusd: {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'alusd',
      gauge: '0x9582C4ADACB3BCE56Fea3e590F05c3ca2fb9C477',
    },
    "polygon-a3CRV": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'polygon-a3CRV',
      gauge: '0xC48f4653dd6a9509De44c92beb0604BEA3AEe714',
    },
    "fantom-2pool": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'fantom-2pool',
      gauge: '0xb9C05B8EE41FDCbd9956114B3aF15834FDEDCb54',
    },
    "fantom-fusdt": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'fantom-fusdt',
      gauge: '0xfE1A3dD8b169fB5BF0D5dbFe813d956F39fF6310',
    },
    "tricrypto": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'tricrypto',
      gauge: '0x6955a55416a06839309018A8B0cB72c4DDC11f15',
    },
    "polygon-ren": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'polygon-ren',
      gauge: '0x488E6ef919C2bB9de535C634a80afb0114DA8F62',
    },
    "fantom-ren": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'fantom-ren',
      gauge: '0xfDb129ea4b6f557b07BcDCedE54F665b7b6Bc281',
    },
    "polygon-atricrypto": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'polygon-atricrypto',
      gauge: '0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F',
    },
    "xdai-3pool": {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      swap_token: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      name: 'xdai-3pool',
      gauge: '0x6C09F6727113543Fd061a721da512B7eFCDD0267',
    },
    "tricrypto2": {
      swap: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
      swap_token: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
      name: 'tricrypto2',
      gauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
    },
    "eurt": {
      swap: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
      swap_token: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
      name: 'eurt',
      gauge: '0xe8060Ad8971450E624d5289A10017dD30F5dA85F',
    },
    "mim": {
      swap: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
      swap_token: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
      name: 'mim',
      gauge: '0xd8b712d29381748dB89c36BCa0138d7c75866ddF',
    },

  }
  return { gauges };

}, {
  maxAge: 30,
});
