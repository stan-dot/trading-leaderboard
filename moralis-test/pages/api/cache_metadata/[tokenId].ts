import { Erc20Token, EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: Erc20Token[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log(req);
  let { tokenId } = req.query;
  console.log(tokenId);
  if (Array.isArray(tokenId)) {
    tokenId = tokenId.join("");
  }

  try {
    fetchAndCacheMetaData(tokenId).then((data) => {
      res.status(200).json({ data });
    });
  } catch (error) {
    res.status(404).json({ data: [], error: "no metadata found" });
  }
}

export async function fetchAndCacheMetaData(tokenId: string) {
  // const db = await connectToDatabase(process.env.MONGODB_URI);
  // const collection = db.collection('token-metadata');
  // todo add the caching

  // // Check cache
  // const cachedData = await collection.findOne({ tokenId });
  // if (cachedData) {
  //   return cachedData.data; // Assuming the stored data is under the 'data' field
  // }

  try {
    // const response = await axios.get(`https://external.api.com/data?tokenId=${tokenId}`);
    const response = await getTokenMetadata([tokenId]);
    const data: Erc20Token[] = response;
    // console.log(data)

    // Store in cache
    // await collection.insertOne({ tokenId, data, createdAt: new Date() });

    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    // throw new Error('Error fetching data from the API');
  }
}

// this is on etherscan, but premium
export async function getTokenMetadata(
  addresses: string[],
): Promise<void> {
  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });

  // console.log(response.toJSON());
  // return response.toJSON() as Erc20Token[];
}
