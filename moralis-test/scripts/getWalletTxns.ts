import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();