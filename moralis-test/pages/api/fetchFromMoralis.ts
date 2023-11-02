import axios from 'axios';
import { MoralisData } from '../../types/MoralisData';
const API_KEY = process.env.MORALIS_API_KEY; // Replace '<api_key>' with your actual API key

export async function fetchFromMoralis(address:string):Promise<MoralisData> {
  console.log('trying to fetch from moralis about the address:', address);
  try {
    const response = await axios.get(`https://deep-index.moralis.io/api/v2.2/${address}/verbose`, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': API_KEY 
      },
      params: {
        chain: 'eth'
      }
    });
    // console.log('full response: ', response)

    console.log('moralis response data :', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

