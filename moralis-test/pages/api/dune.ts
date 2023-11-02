import axios from 'axios';
import { Market } from '../markets/markets';
import { Row } from '../../types';

const API_KEY = process.env.DUNE_API_KEY; 

export async function fetchDataFromDuneApi(market:Market): Promise<Row[] | string> {
    if (!market.duneUrl) {
        return 'no such thing registered';
    }
    try {
        const response = await axios.get(`${market.duneUrl}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Dune API:', error);
        throw error;
    }
}
// todo add the actual request code