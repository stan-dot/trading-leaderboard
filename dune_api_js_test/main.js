import 'dotenv/config';
// ESM syntax is supported.
import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

const key = process.env.DUNE_API_KEY;
console.log('key: ', key);
// Add the API key to an header object
const meta = {
  "x-dune-api-key": key
};
const header = new Headers(meta);

//  Call the Dune API
const response = await fetch('https://api.dune.com/api/v1/query/1258228/execute', {
  method: 'POST',
  headers: header
});
const body = await response.text();

// Log the returned response
console.log(body);

