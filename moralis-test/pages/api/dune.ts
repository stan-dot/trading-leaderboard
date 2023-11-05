import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Row } from "../../types/DuneResponse";

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
  const { url } = req.query;
  console.log(url);

  try {
    fetchDataFromDuneApi(url).then((r) => {
      if (Array.isArray(r)) {
        res.status(200).json({ data: r });
      } else {
        res.status(400).json({ data: [], error: "no rows found" });
      }
    });
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    res.status(400).json({ data: [], error: "no rows found" });
  }
}

export async function fetchDataFromDuneApi(
  url: string | string[],
): Promise<Row[] | string> {
  try {
    const encoded = encodeURIComponent(url[0]);
    const response = await axios.get(`${encoded}?api_key=${API_KEY}`);
    console.log('dune api response: ', response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    throw error;
  }
}
