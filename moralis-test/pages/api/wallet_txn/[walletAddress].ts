import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import { EvmTransaction } from "../../../types/WalletTx";

type ResponseData = {
  error?: string;
  txns?: WalletTx[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log('query: ', req.query);
  const {  walletAddress: walletAddressMaybeArray } = req.query;

  const walletAddress = Array.isArray(walletAddressMaybeArray) ? walletAddressMaybeArray.join('') : walletAddressMaybeArray;
  try {
    getWalletTxns(walletAddress).then((txns) => {
      res.status(200).json({ txns });
    });
  } catch (error) {
    res.status(404).json({ txns: [], error: "no rows found" });
  }
}

// todo change the limit for production
const txnsLimit = 10;
export const getWalletTxns = async (address: string): Promise<EvmTransaction[]> => {
  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
    limit: txnsLimit,
  });

  const gotJson = response.toJSON();
  console.log("response json:", gotJson);
  const r: EvmTransaction[] = gotJson.result ;
  console.log(r);
  return r;
};
