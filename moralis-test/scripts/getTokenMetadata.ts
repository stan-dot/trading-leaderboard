import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// this is on etherscan, but premium
const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const addresses = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  ];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });

  console.log(response.toJSON());
};

runApp();