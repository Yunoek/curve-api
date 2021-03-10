## List of Endpoints

**Base is always: https://api.curve.fi/**

Refresh rates vary and can be found in the `generatedTimeMs` property.

### Exchange information
```
GET /api/getETHprice
```
Current Ethereum price used to calculate gas price


**Parameters:**
NONE


**Response :**

```
"data": {
   "price": 1826.11, //price of Ethereum in USD
   "generatedTimeMs": 1615380294701 //when the response was generated
}
```
