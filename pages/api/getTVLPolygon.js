import axios from 'axios';
import Web3 from 'web3';
import BigNumber from 'big-number';

import { fn } from '../../utils/api';
import { getFactoryRegistry, getMultiCall } from '../../utils/getters';
import registryAbi from '../../constants/abis/factory_registry.json';
import multicallAbi from '../../constants/abis/multicall.json';
import erc20Abi from '../../constants/abis/erc20.json';
import aavePool from '../../constants/abis/pools/aave.json';

const web3 = new Web3(`https://rpc-mainnet.maticvigil.com/`);


export default fn(async () => {

    let pools = {
      'aave': {
        'address': '0x445FE580eF8d70FF569aB36e80c647af338db351',
        'decimals': [18,6,6]
      }
    }
    let tvl = 0
      for (const [key, pool] of Object.entries(pools)) {

        let poolC = new web3.eth.Contract(aavePool, pool.address);
        await Promise.all(
          pool.decimals.map(async (decimal, index) => {
            let balance = await poolC.methods.balances(index).call()
            balance = balance / (10 ** decimal)
            console.log(balance)

            tvl += parseFloat(balance)
          })
        )
      }

    return { tvl };


}, {
  maxAge: 15 * 60, // 15 min
});
