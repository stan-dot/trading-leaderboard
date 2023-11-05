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
