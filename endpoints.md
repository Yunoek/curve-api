## Table of Contents

  - [getETHprice](#getethprice)
  - [getFactoryPools](#getFactoryPools)


## List of Endpoints

**Base is always: https://api.curve.fi/**

Last generation time of an endpoint can be found in the `generatedTimeMs` property.

### getETHprice
```
GET /api/getETHprice
```
Current Ethereum price used to calculate gas price

**View**:
[getETHprice](https://api.curve.fi/api/getETHprice)

**Parameters:**
NONE


**Response :**

```
"data": {
   "price": 1826.11, //price of Ethereum in USD
   "generatedTimeMs": 1615380294701 //when the response was generated
}
```

### getFactoryPools
```
GET /api/getFactoryPools
```
Returns all factory pools with balances and token details

**Parameters:**
NONE

**View**:
[getFactoryPools](https://api.curve.fi/api/getFactoryPools)

**Response :**

```
{
  "address": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c", //pool address
  "type": "USD", //asset type 
  "balance": "274913010.55", //total balance
  "token": {
    "address": "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9", //address of token 1
    "symbol": "alUSD",
    "decimals": 18,
    "rawBalance": "135704363696911375358522013",
    "balance": "135704363.70" //balance of token 1
  },
  "lpToken": {
    "address": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490", //address of token 2 (LP token)
    "symbol": "3Crv",
    "decimals": 18,
    "rawBalance": "139208646857596652823648677",
    "balance": "139208646.86" //balance of token 2
  }
},
```

