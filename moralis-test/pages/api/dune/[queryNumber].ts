import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Row } from "../../../types/DuneResponse";

const API_KEY = process.env.DUNE_API_KEY;

type ResponseData = {
  data: Row[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  let { queryNumber } = req.query;
  console.log("req: ", req.query);
  if (Array.isArray(queryNumber)) {
    queryNumber = queryNumber.join("");
  }

  try {
    fetchDataFromDuneApi(queryNumber).then((r) => {
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
  queryNumber: string,
): Promise<Row[] | string> {
  try {
    const response = await axios.get(
      `https://api.dune.com/api/v1/query/${queryNumber}/results?api_key=${API_KEY}`,
    );
    // console.log("dune api response: ", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    return 'erorr fetching from dune api'
  }
}
