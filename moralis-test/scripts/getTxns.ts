const  Moralis  = require("moralis").default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');
// import Moralis from "moralis";
// import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "CNKDDHY6KQeOyPQFbLkcf11QzaMaiyhTFYc10WVvSydYSWxTA9nandDZgvyiHl5m",
    // ...and any other configuration
  });

  const address = "0x504ba0a944b292f4672fc3efd55ea7805f7ab9d8";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();