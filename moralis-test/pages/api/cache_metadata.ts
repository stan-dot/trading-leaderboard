
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import axios from 'axios'; 
import { connectToDatabase } from 'mongodb';

export async function fetchAndCacheData(tokenId:string) {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection('token-metadata'); 

  // Check cache
  const cachedData = await collection.findOne({ tokenId });
  if (cachedData) {
    return cachedData.data; // Assuming the stored data is under the 'data' field
  }

  // Fetch from external API
  try {
    // todo here replace with the external API, which in this case is Moralis

    const response = await axios.get(`https://external.api.com/data?tokenId=${tokenId}`);
    const data = response.data;

    // Store in cache
    await collection.insertOne({ tokenId, data, createdAt: new Date() });

    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw new Error('Error fetching data from the API');
  }
}

// this is on etherscan, but premium
export async function getTokenMetadata(addresses: string[]) {
  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });

  console.log(response.toJSON());
}