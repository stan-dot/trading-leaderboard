
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

custom label
https://recharts.org/en-US/examples/PieChartWithCustomizedLabel

data format from arkham
CSV header - transactionHash,fromAddress,fromLabel,fromIsContract,toAddress,toLabel,toIsContract,tokenAddress,type,blockTimestamp,blockNumber,blockHash,tokenName,tokenSymbol,tokenDecimals,unitValue,tokenId,historicalUSD,chain

ERC-20 transfer event topic0
0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef

known txn hash that was usdc for weth
0xa588aed7ca1fd2d523692a9f89947da083d48fe4da11e9522ea6fd9e6c6e30a2

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
- [x] Dune replicated
- [x] add for each address data from Moralis

- [x] fix the rendering error (not mtching the server) - it was the table not having tbody and thead and also dynamic rendering of the charts
- [x] show both the address and value on the pie chart
- [x] show stuff other than weth
- [x] make the import dynamic for the chart for the trader

#### Structured part -  next steps to replicating Dune
- [x] hard code 5 trader IDs as queries - nah, just filter in here all the rows. just ask Chat to make the query sensible for that and surely get all the needed data
- [x] connect inputs to the UI
- [x] listen to the data from transactions 
- [x] run scripts locally to check out if it works - unclear. 

#### Thursday work
- [ ] Dune data source
  - [x] hard code the 6 markets request for top traders - hard coded 3 for now
- [ ] Moralis data sources
  - [ ] for each trader use Moralis api instead 
    - [x] - make it client side - fetching from api with swr
  - [x] make these into api routes 
  - [x] one route for getting trading data for markets
  - [x] the other one for data for getting token meetadata
  - [x] last one for getting all txns and seeing the market sizes
  - [x] get smart contract metadata https://docs.moralis.io/web3-data-api/evm/how-to-get-erc20-token-metadata-by-token-addresses
- [ ] connect data to the UI
  - [ ] display the data as another pie chart - what pairs do compose given trader's portfolio.
  - [ ] filter client side for transactions to a given token (seaport or just the main token here)
  - [ ] persist the token metadata with mongodb - ok actually only 6 markets are out there
- [ ] persist the dune top trader values actually. 
  - [ ] add a refresh button 

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
