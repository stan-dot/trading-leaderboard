// const dotenv = require('dotenv');
// import fetch, { Headers } from 'node-fetch';
// const fetch = require('node-fetch');
// https://dune.com/docs/api/quick-start/api-js/#example-dune-api-script-for-a-parameterized-query
// todo from here. ok but these need a premium api key

const API_KEY = process.env.DUNE_API_KEY; 
console.log(API_KEY);

async function main() {
  // Add the API key to an header object
  const meta = {
    "x-dune-api-key": API_KEY,
  };
  const header = new Headers(meta);

  // Add parameters we would pass to the query
  const params = {
    "query_parameters": {
      "trader_id": "0xb10f35351ff21bb81dc02d4fd901ac5ae34e8dc4",
    },
  };
  const body = JSON.stringify(params);

  //  Call the Dune API
  const response = await fetch(
    "https://api.dune.com/api/v1/query/3164666/results",
    {
      method: "POST",
      headers: header,
      body: body, // This is where we pass the parameters
    },
  );
    console.log('response:', response);
  const response_object = await response.text();

  // Log the returned response
  console.log(response_object);
}
main();
