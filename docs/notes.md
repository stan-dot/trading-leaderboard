
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

this address has a rich data history
http://localhost:3000/traders/0x10bc7c3aae1f2f792097b96dd8b37030d9e66088

## not needed

- [ ] use seaport or token logs and ABI to read in the events 
- [x] check that the ABI is right for the logs - only logs emitted by the transaction itself - yeah it's seaport that emits most logs but there's no need to work directly with these
- [ ] or make an explicit reference in the where clause to the 10 addresses, hard code these
- [ ] make the data fetch client side so that it's ok on fleek - ipfs wouldn't accept such large files on this page


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
