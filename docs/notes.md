
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
