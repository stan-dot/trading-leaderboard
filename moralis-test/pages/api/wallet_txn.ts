import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { WalletTx } from "../../types/WalletTx";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// await Moralis.start({
//   apiKey: key,
//   // ...and any other configuration
// });

// const key = process.env.MORALIS_API_KEY;
// const defaultAddress = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

type ResponseData = {
  error?: string;
  txns?: WalletTx[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log(req);
  const walletUrl = req.body;
  console.log(walletUrl);

  try {
    getWalletTxns(walletUrl).then((txns) => {
      res.status(200).json({ txns });
    });
  } catch (error) {
    res.status(404).json({ txns: [], error: "no rows found" });
  }
}

// todo change that for production
const txnsLimit = 10;
export const getWalletTxns = async (address: string): Promise<WalletTx[]> => {
  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
    limit: txnsLimit,
  });

  const gotJson = response.toJSON();
  console.log("response json:", gotJson);
  const r: WalletTx[] = gotJson.result as WalletTx[];
  console.log(r);
  return r;
};
