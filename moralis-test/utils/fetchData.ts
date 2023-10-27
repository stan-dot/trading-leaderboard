import axios from 'axios';

const API_URL = 'https://api.dune.com/api/v1/query/3150665/results';
const API_KEY = process.env.DUNE_API_KEY; // Replace '<api_key>' with your actual API key

export async function fetchDataFromDuneApi(): Promise<any> {
    try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Dune API:', error);
        throw error;
    }
}