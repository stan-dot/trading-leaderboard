
## main task
Create an external web application that tracks the top traders in the Aori orderbook by their completed orders. This information can be fetched by aggregating data from the events emitted from the OrderProtocol contract.	

types of pairs that people are trading in general - to see what markets they are coming from.

- [ ] connect data to the UI
  - [x] do data fetching in the client components instead
  - [x] filter client side for transactions to a given token (seaport or just the main token here)
  - [ ] display the data as another pie chart - what pairs do compose given trader's portfolio.
  - [ ] fix the too much use of API, infinite re-renders
- [ ] persist the dune top trader values actually. 
  - [ ] add a refresh button 

## caching stage
- [ ] change from evm moralis hooks into API routes proper
  - [ ] persist the token metadata with mongodb - ok actually only 6 markets are out there

- [ ] using the immutable feature https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations

## technology choices
- nextjs for the backend
- Ramda js for data transformation - looks that not needed
- mongodb fine as a database of derivative data - already using the queries from Dune, that could be secondary.
- deployment - could use this https://blog.fleek.co/posts/fleek-nextJS
-  pie charts - need to decide 
https://github.com/reactchartjs/react-chartjs-2 - the smallest one tbh
https://github.com/recharts/recharts - this sounds the easiest with React
https://github.com/airbnb/visx/ - relatively low use
https://github.com/apache/echarts - 

target result - like here https://platform.arkhamintelligence.com/explorer/address/0x9db865cAcACdaDF95e376a2FC1a4aA1ed9D70762

moralis APIS
general get transations
https://docs.moralis.io/web3-data-api/evm/reference#get-transactions

get liquidity pool transations
https://docs.moralis.io/web3-data-api/evm/reference/get-pair-reserves?pair_address=0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974&chain=eth
get nft transfers by wallet
https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-nft-transfers?address=0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326&chain=eth&format=decimal

moralis quickstart things
https://docs.moralis.io/web3-data-api/evm/quickstart-nextjs
https://admin.moralis.io/settings#api_keys

reading in values
https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#id14 

## formatting the data
using web3 get txn receipt
https://ethereum.stackexchange.com/questions/131448/how-to-decode-from-web3-eth-gettransactionreceipt-logs

## not need
speed not an issue
do not need portfolio contents
