import axios from 'axios';
import Web3 from 'web3';
import { fn } from '../../utils/api';
import aggregatorInterfaceABI from '../../constants/abis/aggregator.json';

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const chainlinkETHUSDaddress = '0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F';

export default fn(async () => {
  let data = await axios.get('https://www.gasnow.org/api/v3/gas/price?utm_source=curve')
  let gas = data.data.data
  return { gas };
}, {
  maxAge: 30,
});
