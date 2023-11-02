import axios from 'axios';

const weth_query_url = 'https://api.dune.com/api/v1/query/3150665/results';
const usdc_query_url = 'https://api.dune.com/api/v1/query/3151753/results';

const API_KEY = process.env.DUNE_API_KEY; 

export async function fetchDataFromDuneApi(): Promise<any> {
    try {
        const response = await axios.get(`${weth_query_url}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Dune API:', error);
        throw error;
    }
}