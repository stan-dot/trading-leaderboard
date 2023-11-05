import { MoralisNextApi } from "@moralisweb3/next";
console.log('moralis key:', process.env.MORALIS_API_KEY);
export default MoralisNextApi({  apiKey: process.env.MORALIS_API_KEY });

