import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// this is on etherscan, but premium
export async function getTokenMetadata(addresses: string[]) {
  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });

  console.log(response.toJSON());
}
