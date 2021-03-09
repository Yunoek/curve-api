import memoize from 'memoizee';
import Web3 from 'web3';
import addressGetterAbi from '../constants/abis/address_getter.json';
<<<<<<< HEAD
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const addressGetter = '0x0000000022d53366457f9d5e68ec105046fc4383'
const multiCall = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441'
const factoryRegistry = '0x0959158b6040D32d04c301A72CBFD6b39E21c9AE'
=======
>>>>>>> f3a5fddc13617c8462403cc9ce964f2785e0af84

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const addressGetter = '0x0000000022d53366457f9d5e68ec105046fc4383';

<<<<<<< HEAD
const getFactoryRegistry = async () => {
  return factoryRegistry;
}

const getMultiCall = async() => {
  return multiCall;
}
=======
const getRegistry = memoize(async () => {
  const contract = new web3.eth.Contract(addressGetterAbi, addressGetter);
  return contract.methods.get_registry().call();
}, {
  promise: true,
  maxAge: 10 * 60 * 1000, // 10 min
});
>>>>>>> f3a5fddc13617c8462403cc9ce964f2785e0af84

export {
  getRegistry,
  getMultiCall,
  getFactoryRegistry
};
