import axios from "axios";
import next, { NextApiRequest, NextApiResponse } from "next";
import { Row } from "../../../types/DuneResponse";

export interface DuneTraderResponse {
  execution_id: string;
  query_id: number;
  state: string;
  submitted_at: Date;
  expires_at: Date;
  execution_started_at: Date;
  execution_ended_at: Date;
  result: Result;
}

export interface Result {
  rows: DuneRowTrader[];
  metadata: Metadata;
}

export interface Metadata {
  column_names: string[];
  result_set_bytes: number;
  total_row_count: number;
  datapoint_count: number;
  pending_time_millis: number;
  execution_time_millis: number;
}

export interface DuneRowTrader {
  currency_id: string;
  total_value: number;
}

const API_KEY = process.env.DUNE_API_KEY;

type ResponseData = {
  data: Row[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  let { queryNumber } = req.query;
  console.log("req: ", req.query);
  if (Array.isArray(queryNumber)) {
    queryNumber = queryNumber.join("");
  }

  try {
    await fetchDataFromDuneApi(queryNumber).then((r:DuneTraderResponse) => {
        res.status(200).json({ data: r.result.rows });
      console.log('rows: ', r.result.rows);
      // if (Array.isArray(r)) {
        // res.end()
        // res.send(r);
      // } else {
      //   res.status(400).json({ data: [], error: "no rows found" });
      //   res.end()
      // }
      // res.send("");
      // res.end();
    });
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    res.status(400).json({ data: [], error: "no rows found" });
    // res.send("");
    // res.end();
  }
}

export async function fetchDataFromDuneApi(
  queryNumber: string,
): Promise<DuneTraderResponse | string> {
  // console.log("dune api key in the request: ", API_KEY);
  try {
    const response = await axios.get(
      `https://api.dune.com/api/v1/query/3194929/results?api_key=${API_KEY}`,
    );
    // console.log("dune api response result: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Dune API:", error);
    return "erorr fetching from dune api";
  }
}
