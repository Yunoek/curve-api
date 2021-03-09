import axios from 'axios';
import Web3 from 'web3';
import { fn } from '../../utils/api';
import addressGetterAbi from '../../constants/abis/address_getter.json';
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const addressGetter = '0x0000000022d53366457f9d5e68ec105046fc4383'


export default fn(async () => {

  let address_getter = new web3.eth.Contract(addressGetterAbi, addressGetter);
  let registryAddress = await address_getter.methods.get_registry().call();
  return { registryAddress };

}, {
  maxAge: 3600,
});
