import memoize from 'memoizee';
import { fn } from '../../utils/api';

const getEtherscanData = memoize(async () => {
  const { result: { SafeGasPrice, ProposeGasPrice, FastGasPrice } } =
    await (await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle')).json();

  return [
    parseInt(FastGasPrice, 10),
    parseInt(ProposeGasPrice, 10),
    parseInt(SafeGasPrice, 10),
  ];
}, {
  promise: true,
  maxAge: 15 * 1000, // Price is refreshed every 15s
});

const getGasNowData = memoize(async () => {
  const { data } = await (await fetch('https://www.gasnow.org/api/v3/gas/price?utm_source=curve')).json();

  return data; // { rapid, fast, standard, slow, timestamp }
}, {
  promise: true,
  maxAge: 15 * 1000, // Price is refreshed every 15s
});

export default fn(async () => {
  const [gasNowData, etherscanData] = await Promise.all([
    getGasNowData(),
    getEtherscanData(),
  ]);

  const baseFee = etherscanData[2] * 1e9;
  const baseFeePaddingFactor = 4 * 0.125; // Enough to allow base fee to go up in 4 consecutive blocks

  const gasNowPrices = [gasNowData.rapid, gasNowData.fast, gasNowData.standard, gasNowData.slow];
  const minPrioPrice = [4 * 1e9, 3 * 1e9, 2 * 1e9, 1 * 1e9];
  const suggestedPrioPrices = gasNowPrices.map((totalPrice, i) => (
    Math.max(parseInt(totalPrice, 10) - baseFee, minPrioPrice[i])
  ));

  const eip1559Gas = {
    base: baseFee,
    prio: suggestedPrioPrices,
    max: suggestedPrioPrices.map((suggestedPrioPrice) => (
      baseFee + (baseFee * baseFeePaddingFactor) + suggestedPrioPrice
    )),
  };

  return {
    gas: gasNowData,
    eip1559Gas,
  };
}, {
  maxAge: 30,
});
