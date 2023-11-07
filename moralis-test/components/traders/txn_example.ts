import { EvmAddress, EvmChain, EvmTransaction, EvmTransactionData } from "@moralisweb3/common-evm-utils"
import { BigNumber } from "moralis/common-core";

const data: EvmTransactionData = {
  chain: EvmChain.GOERLI,
  from: new EvmAddress,
  hash: "",
  gasPrice: new BigNumber,
  index: "",
  blockNumber: new BigNumber,
  blockHash: "",
  blockTimestamp: undefined,
  cumulativeGasUsed: new BigNumber,
  gasUsed: new BigNumber,
  logs: [],
  internalTransactions: []
};

export const evmTransaction:EvmTransaction = {
  "page_size": 100,
  "page": 1,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFpbiI6ImV0aCIsImNoYWluX25hbWUiOiJtYWlubmV0Iiwic3ViZG9tYWluIjpudWxsLCJhcGlLZXlJZCI6MTkwNjU5LCJjdXJzb3IiOm51bGwsImZ1bmN0aW9uTmFtZSI6bnVsbCwibGltaXQiOjEwMCwiYWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSIsImZyb21fYmxvY2siOm51bGwsInRvX2Jsb2NrIjoiMTU3ODE1NDAiLCJmcm9tX2RhdGUiOm51bGwsInRvX2RhdGUiOm51bGwsInBhZ2UiOjEsImtleXMiOlsiMTU3ODE1NDAiXSwiYmxvY2tfb2Zmc2V0IjoxLCJpYXQiOjE2NzA4Mzk4MjN9.EVOoyaTeuMF0cF2xe2J4uJr41Ipx7QbgGxeu5Rpn3E0",
  "result": [
    {
      "hash": "0x1e67156f8cef5668c69392876f9ff99ca655d43ec366c6cf62217dd633e809b4",
      "nonce": "949",
      "transaction_index": "74",
      "from_address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "to_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "value": "0",
      "gas": "66163",
      "gas_price": "14219353417",
      "input": "0xa9059cbb000000000000000000000000c79b96044906550a5652bcf20a6ea02f139b9ae5000000000000000000000000000000000000000000000000000000007ea8ed40",
      "receipt_cumulative_gas_used": "7069740",
      "receipt_gas_used": "65625",
      "receipt_contract_address": null,
      "receipt_root": null,
      "receipt_status": "1",
      "block_timestamp": "2022-12-08T16:35:11.000Z",
      "block_number": "16141217",
      "block_hash": "0xc6d379902054169a094ded6e37953549e6c4d59c3dc5b253d5db3ff2dd5a173c",
      "transfer_index": [
        16141217,
        74
      ],
      "logs": [
        {
          "log_index": "147",
          "transaction_hash": "0x1e67156f8cef5668c69392876f9ff99ca655d43ec366c6cf62217dd633e809b4",
          "transaction_index": "74",
          "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "data": "0x000000000000000000000000000000000000000000000000000000007ea8ed40",
          "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "topic1": "0x000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
          "topic2": "0x000000000000000000000000c79b96044906550a5652bcf20a6ea02f139b9ae5",
          "topic3": null,
          "block_timestamp": "2022-12-08T16:35:11.000Z",
          "block_number": "16141217",
          "block_hash": "0xc6d379902054169a094ded6e37953549e6c4d59c3dc5b253d5db3ff2dd5a173c",
          "transfer_index": [
            16141217,
            74,
            147
          ],
          "transaction_value": "0"
        }
      ]
    }
  ]
}