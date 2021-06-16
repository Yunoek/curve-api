import axios from 'axios';
import Web3 from 'web3';
import BigNumber from 'big-number';

import { fn } from '../../utils/api';
import { getRegistry, getMultiCall } from '../../utils/getters';
import registryAbi from '../../constants/abis/registry.json';
import multicallAbi from '../../constants/abis/multicall.json';
import erc20Abi from '../../constants/abis/erc20.json';
import cryptoPoolAbi from '../../constants/abis/crypto_pool.json';

const web3 = new Web3(`https://mainnet.infura.io/v3/fac98e56ea7e49608825dfc726fab703`);


export default fn(async () => {

    let cryptoPools = {
      'tricrypto': {
        'address': '0x80466c64868E1ab14a1Ddf27A676C3fcBE638Fe5',
        'coins': 3,
        'keys': ['tether', 'bitcoin', 'ethereum'],
        'decimals': [6, 8, 18],
        'tvl': 0
      }
    }

    let price_feed = await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether,ethereum,bitcoin&vs_currencies=usd')).json()
    console.log(price_feed)
    for (const [key, pool] of Object.entries(cryptoPools)) {
      let poolContract = new web3.eth.Contract(cryptoPoolAbi, pool.address);
      for (var i = 0; i < pool.coins; i++) {

         let balance = await poolContract.methods.balances(i).call();

         console.log(balance / 10 ** pool.decimals[i] * price_feed[pool.keys[i]].usd)
         cryptoPools[key].tvl += balance / 10 ** pool.decimals[i] * price_feed[pool.keys[i]].usd
      }

    }

    return { cryptoPools };

}, {
  maxAge: 15 * 60, // 15 min
});
