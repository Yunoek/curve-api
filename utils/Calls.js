/* eslint-disable camelcase */

import Web3 from 'web3';
import multicall_abi from '../constants/abis/multicall.json';
import { getArrayChunks, flattenArray } from './Array';

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);

/**
 * @param {Array<{contract: Object, methodName: String, params: Array}>} callsConfig
 *
 * Returns an array of data.
 * If `metaData` is passed alongside any call, returns an array of objects of shape { data, metaData } instead.
 */
const multiCall = async (callsConfig) => {
  const defaultCallConfig = {
    contract: undefined, // e.g. currentContract
    methodName: undefined, // e.g. 'claimable_tokens'
    params: [], // Array of params, if the method takes any
    // Optional; any data to be passed alongside each call's results, for example to act as a marker
    // to easily identify what the call's results reference
    metaData: undefined,
  };

  const augmentedCallsConfig = callsConfig.map((config) => ({
    ...defaultCallConfig,
    ...config,
  }));

  // Validate configs
  // eslint-disable-next-line no-restricted-syntax
  for (const config of augmentedCallsConfig) {
    if (typeof config.contract !== 'object') {
      throw new Error('multiCall error: config parameter `contract` expects a contract object');
    }

    if (typeof config.methodName !== 'string') {
      throw new Error('multiCall error: config parameter `methodName` expects a contract method name');
    }

    if (!config.contract._address) {
      throw new Error('multiCall error: couldn’t find any `_address` property on config parameter `contract`; either the contract object passed in incorrect, or we need to make multiCall accept an optional address param to pass it manually ourselves when it’s not implicitly set on `contract`');
    }
  }

  const hasMetaData = augmentedCallsConfig.some(({ metaData }) => typeof metaData !== 'undefined');

  const calls = augmentedCallsConfig.map(({
    contract,
    methodName,
    params,
  }) => [
    contract._address,
    contract.methods[methodName](...params).encodeABI(),
  ]);

  const multicall = new web3.eth.Contract(multicall_abi, '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441');
  const chunkedReturnData = [];
  const chunkedCalls = getArrayChunks(calls, 200); // Keep each multicall size reasonable

  // eslint-disable-next-line no-restricted-syntax
  for (const callsChunk of chunkedCalls) {
    // eslint-disable-next-line no-await-in-loop
    const { returnData } = await multicall.methods.aggregate(callsChunk).call();

    if (returnData.length !== callsChunk.length) {
      throw new Error('multiCall error: multiCall doesn’t support calls to methods with multiple outputs yet, please improve it :)');
    }

    chunkedReturnData.push(returnData);
  }

  const returnData = flattenArray(chunkedReturnData);

  const decodedData = returnData.map((hexData, i) => {
    const { contract, methodName, metaData } = augmentedCallsConfig[i];
    const abi = contract._jsonInterface;
    const outputSignature = abi.find(({ name }) => name === methodName).outputs[0];

    const data = web3.eth.abi.decodeParameter(outputSignature.type, hexData);

    if (hasMetaData) return { data, metaData };
    return data;
  });

  return decodedData;
};

export {
  multiCall,
};
