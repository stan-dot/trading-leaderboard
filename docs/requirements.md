
## main task
Create an external web application that tracks the top traders in the Aori orderbook by their completed orders. This information can be fetched by aggregating data from the events emitted from the OrderProtocol contract.	

types of pairs that people are trading in general - to see what markets they are coming from.

## important data
contract address
https://goerli.etherscan.io/address/0xea2b4e7f02b859305093f9f4778a19d66ca176d5

previous dashboard
https://dune.com/anticode/aori-volume

my query
https://dune.com/queries/3150665/5256056?category=canonical&sidebar=version-history

data format from arkham
CSV header - transactionHash,fromAddress,fromLabel,fromIsContract,toAddress,toLabel,toIsContract,tokenAddress,type,blockTimestamp,blockNumber,blockHash,tokenName,tokenSymbol,tokenDecimals,unitValue,tokenId,historicalUSD,chain

### order of actions
- [x] quickstart for fleek app https://blog.fleek.co/posts/fleek-nextJS
- [x] quickstart with moralis to refresh 
- [x] setup all the pages for the app
- [x] setup Dune api for the first data fetch with the 10 users, using the remote JSON query
list of txs -> get top addresses - that could be from Dune 
get the data on these top addresses, say top 10 for now
https://api.dune.com/api/v1/query/3150665/results?api_key=<api_key>

- [x] display a table with query results - address and usdc value
- [x] pie chart to that 
- [x] using the 10 addresses, add a button to go to arkham
- [ ] Dune replicated
- [ ] add for each address data from Moralis
- [ ] display the data as another pie chart
- [ ] persist the data with mongodb

## technology choices
- nextjs for the backend
- R for data transformation - looks that not needed
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

## not need
speed not an issue
do not need portfolio contents
