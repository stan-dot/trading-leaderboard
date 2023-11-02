import axios from "axios";
import { Market } from "../markets/markets";
import { Row } from "../../types/types";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.DUNE_API_KEY;

type ResponseData = {
  data: Row[];
    error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log(req);
  const url = req.body;
    console.log(url);

  try {
    axios.get(`${url}?api_key=${API_KEY}`).then((r) => {
      const rows = r.data;
      res.status(200).json({ data: rows });
    });
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
      res.status(400).json({ data: [], error:'no rows found' });
  }
}

export async function fetchDataFromDuneApi(
  market: Market,
): Promise<Row[] | string> {
  if (!market.duneUrl) {
    return "no such thing registered";
  }
  try {
    const response = await axios.get(`${market.duneUrl}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    throw error;
  }
}
