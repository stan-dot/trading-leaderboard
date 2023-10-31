const Web3 = require("web3").default;
// import Web3 from "web3";
const abi = require("../abi.json");
const receipt = require("./receipt.json");
// const Moralis = require("moralis").default;

const myAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_seaport",
        "type": "address",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "seaport",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "offerer",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "zone",
                    "type": "address",
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8",
                      },
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address",
                      },
                      {
                        "internalType": "uint256",
                        "name": "identifierOrCriteria",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "startAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "endAmount",
                        "type": "uint256",
                      },
                    ],
                    "internalType": "struct OfferItem[]",
                    "name": "offer",
                    "type": "tuple[]",
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8",
                      },
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address",
                      },
                      {
                        "internalType": "uint256",
                        "name": "identifierOrCriteria",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "startAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "endAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "address payable",
                        "name": "recipient",
                        "type": "address",
                      },
                    ],
                    "internalType": "struct ConsiderationItem[]",
                    "name": "consideration",
                    "type": "tuple[]",
                  },
                  {
                    "internalType": "enum OrderType",
                    "name": "orderType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256",
                  },
                  {
                    "internalType": "bytes32",
                    "name": "zoneHash",
                    "type": "bytes32",
                  },
                  {
                    "internalType": "uint256",
                    "name": "salt",
                    "type": "uint256",
                  },
                  {
                    "internalType": "bytes32",
                    "name": "conduitKey",
                    "type": "bytes32",
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalOriginalConsiderationItems",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct OrderParameters",
                "name": "parameters",
                "type": "tuple",
              },
              {
                "internalType": "uint120",
                "name": "numerator",
                "type": "uint120",
              },
              {
                "internalType": "uint120",
                "name": "denominator",
                "type": "uint120",
              },
              {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes",
              },
              {
                "internalType": "bytes",
                "name": "extraData",
                "type": "bytes",
              },
            ],
            "internalType": "struct AdvancedOrder[]",
            "name": "makerOrders",
            "type": "tuple[]",
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "offerer",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "zone",
                    "type": "address",
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8",
                      },
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address",
                      },
                      {
                        "internalType": "uint256",
                        "name": "identifierOrCriteria",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "startAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "endAmount",
                        "type": "uint256",
                      },
                    ],
                    "internalType": "struct OfferItem[]",
                    "name": "offer",
                    "type": "tuple[]",
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8",
                      },
                      {
                        "internalType": "address",
                        "name": "token",
                        "type": "address",
                      },
                      {
                        "internalType": "uint256",
                        "name": "identifierOrCriteria",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "startAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "uint256",
                        "name": "endAmount",
                        "type": "uint256",
                      },
                      {
                        "internalType": "address payable",
                        "name": "recipient",
                        "type": "address",
                      },
                    ],
                    "internalType": "struct ConsiderationItem[]",
                    "name": "consideration",
                    "type": "tuple[]",
                  },
                  {
                    "internalType": "enum OrderType",
                    "name": "orderType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256",
                  },
                  {
                    "internalType": "bytes32",
                    "name": "zoneHash",
                    "type": "bytes32",
                  },
                  {
                    "internalType": "uint256",
                    "name": "salt",
                    "type": "uint256",
                  },
                  {
                    "internalType": "bytes32",
                    "name": "conduitKey",
                    "type": "bytes32",
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalOriginalConsiderationItems",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct OrderParameters",
                "name": "parameters",
                "type": "tuple",
              },
              {
                "internalType": "uint120",
                "name": "numerator",
                "type": "uint120",
              },
              {
                "internalType": "uint120",
                "name": "denominator",
                "type": "uint120",
              },
              {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes",
              },
              {
                "internalType": "bytes",
                "name": "extraData",
                "type": "bytes",
              },
            ],
            "internalType": "struct AdvancedOrder",
            "name": "takerOrder",
            "type": "tuple",
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "orderIndex",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "itemIndex",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct FulfillmentComponent[]",
                "name": "offerComponents",
                "type": "tuple[]",
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "orderIndex",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "itemIndex",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct FulfillmentComponent[]",
                "name": "considerationComponents",
                "type": "tuple[]",
              },
            ],
            "internalType": "struct Fulfillment[]",
            "name": "fulfillments",
            "type": "tuple[]",
          },
          {
            "internalType": "uint256",
            "name": "blockDeadline",
            "type": "uint256",
          },
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256",
          },
        ],
        "internalType": "struct OrderProtocol.MatchingDetails",
        "name": "matching",
        "type": "tuple",
      },
      {
        "components": [
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8",
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32",
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32",
          },
        ],
        "internalType": "struct OrderProtocol.Signature",
        "name": "serverSignature",
        "type": "tuple",
      },
    ],
    "name": "settleOrders",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
];

const inputsOnlyAbi = [
  {
    "components": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "offerer",
                "type": "address",
              },
              {
                "internalType": "address",
                "name": "zone",
                "type": "address",
              },
              {
                "components": [
                  {
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]",
              },
              {
                "components": [
                  {
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address",
                  },
                ],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]",
              },
              {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8",
              },
              {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256",
              },
              {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256",
              },
              {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32",
              },
              {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256",
              },
              {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32",
              },
              {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256",
              },
            ],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple",
          },
          {
            "internalType": "uint120",
            "name": "numerator",
            "type": "uint120",
          },
          {
            "internalType": "uint120",
            "name": "denominator",
            "type": "uint120",
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes",
          },
          {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes",
          },
        ],
        "internalType": "struct AdvancedOrder[]",
        "name": "makerOrders",
        "type": "tuple[]",
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "offerer",
                "type": "address",
              },
              {
                "internalType": "address",
                "name": "zone",
                "type": "address",
              },
              {
                "components": [
                  {
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256",
                  },
                ],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]",
              },
              {
                "components": [
                  {
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8",
                  },
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256",
                  },
                  {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address",
                  },
                ],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]",
              },
              {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8",
              },
              {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256",
              },
              {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256",
              },
              {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32",
              },
              {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256",
              },
              {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32",
              },
              {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256",
              },
            ],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple",
          },
          {
            "internalType": "uint120",
            "name": "numerator",
            "type": "uint120",
          },
          {
            "internalType": "uint120",
            "name": "denominator",
            "type": "uint120",
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes",
          },
          {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes",
          },
        ],
        "internalType": "struct AdvancedOrder",
        "name": "takerOrder",
        "type": "tuple",
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256",
              },
              {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256",
              },
            ],
            "internalType": "struct FulfillmentComponent[]",
            "name": "offerComponents",
            "type": "tuple[]",
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256",
              },
              {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256",
              },
            ],
            "internalType": "struct FulfillmentComponent[]",
            "name": "considerationComponents",
            "type": "tuple[]",
          },
        ],
        "internalType": "struct Fulfillment[]",
        "name": "fulfillments",
        "type": "tuple[]",
      },
      {
        "internalType": "uint256",
        "name": "blockDeadline",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256",
      },
    ],
    "internalType": "struct OrderProtocol.MatchingDetails",
    "name": "matching",
    "type": "tuple",
  },
  {
    "components": [
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8",
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32",
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32",
      },
    ],
    "internalType": "struct OrderProtocol.Signature",
    "name": "serverSignature",
    "type": "tuple",
  }];
    
const w = new Web3();
async function decodeTransaction(txHash) {
  try {
    // const key = process.env.MORALIS_API_KEY
    // console.log(key)
    // await Moralis.start({ apiKey: key });
    // Fetch the transaction receipt
    // const receipt = await Moralis.EvmApi.transaction.getTransactionVerbose({ chain: 5, transactionHash: txHash });
    // const receipt = receipt;

    // Assuming you have the ABI for the contract and the event
    const contractAbi = abi;
    // NOTE cannot do this from moralis as the abi is not updated
    // const contract = new web3.eth.contract(contractAbi);
    // const contract = new w.eth.Contract(myAbi);
    // const abiLog = new w.eth.abi.decodeLog(myAbi, );

    // Iterate through logs and decode
    receipt.logs.forEach((log) => {
      console.log(log, inputsOnlyAbi)
      // const decodedLog = w.eth.abi.decodeParameters(inputsOnlyAbi, log.data, log.topic0);
      // const decodedLog = w.eth.abi.decodeLog(inputsOnlyAbi, log.data);
      const decodedLog = w.eth.abi.decodeLog(contractAbi, log.data);

      // contractAbi.filter(x => x.type === 'event'),
      // log.data,
      // log.topics.slice(1)
      // );
      console.log("Decoded Log:", decodedLog);
    });
  } catch (error) {
    console.error(error);
  }
}

const txHash =
  "0x28b6a8ad67ca59b6a337e8d315d3904351b0fd2195b1b28f522eb8a22d7056d5";
decodeTransaction(txHash);

// try {
//   await Moralis.start({
//     apiKey: "YOUR_API_KEY"
//   });

//   const response = await Moralis.EvmApi.token.getTokenMetadata({
//     "chain": "0x1"
//   });

//   console.log(response.raw);
// } catch (e) {
//   console.error(e);
// }
