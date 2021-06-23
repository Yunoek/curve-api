import axios from 'axios';
import Web3 from 'web3';
import BigNumber from 'big-number';

import { fn } from '../../utils/api';
import { getFactoryRegistry, getMultiCall } from '../../utils/getters';
import registryAbi from '../../constants/abis/factory_registry.json';
import multicallAbi from '../../constants/abis/multicall.json';
import erc20Abi from '../../constants/abis/erc20.json';
import poolTwo from '../../constants/abis/pools/2pool.json';

const web3 = new Web3(`https://rpcapi.fantom.network/`);


export default fn(async () => {

    let pools = {
      '2pool': {
        'address': '0x27e611fd27b276acbd5ffd632e5eaebec9761e40',
        'decimals': [18 ,6],
        'tvl': 0,
        'type': 'stable'
      },
      'fusdt': {
        'address': '0x92d5ebf3593a92888c25c0abef126583d4b5312e',
        'decimals': [6],
        'tvl': 0,
        'type': 'stable'
      },
      'ren': {
        'address': '0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604',
        'decimals': [8,8],
        'tvl': 0,
        'type': 'bitcoin'
      }
    }

    let price_feed = await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether,ethereum,bitcoin&vs_currencies=usd')).json()


    let tvl = 0
      for (const [key, pool] of Object.entries(pools)) {

        let poolC = new web3.eth.Contract(poolTwo, pool.address);
        let multiplier = (pool.type == 'stable')?1:price_feed[pool.type].usd

        await Promise.all(
          pool.decimals.map(async (decimal, index) => {
            let balance = await poolC.methods.balances(index).call()
            balance = balance / (10 ** decimal)

            pools[key].tvl += (balance * multiplier)
            tvl += (parseFloat(balance) * multiplier)
          })
        )
      }

    return { tvl, pools };


}, {
  maxAge: 15 * 60, // 15 min
});
