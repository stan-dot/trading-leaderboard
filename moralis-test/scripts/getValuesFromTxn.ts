const Web3 = require("web3").default;
// import Web3 from "web3";
const abi = require("../abi.json");
const receipt = require("./receipt.json");
// const Moralis = require("moralis").default;


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
      console.log(log, abi)
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
