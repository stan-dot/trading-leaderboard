## main task
- [ ] connect data to the UI
  - [x] do data fetching in the client components instead
  - [x] filter client side for transactions to a given token (seaport or just the main token here)
  - [x] fix the too much use of API, infinite re-renders - [x] using the immutable feature https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
  - [x] also had to disable that for the EVM hooks https://www.npmjs.com/package/@moralisweb3/next#3-disable-auto-data-fetching
  - [ ] get the trader data
  - [x] display the trader data as another pie chart - what pairs do compose given trader's portfolio.
  - [ ] deploy stuff

## caching stage
- [ ] change from evm moralis hooks into API routes proper
- [ ] persist the token metadata with mongodb - ok actually only 6 markets are out there
- [ ] persist the dune top trader values in monogdb
  - [ ] add a refresh button 


## exploring different APIs than Moralis
https://github.com/paradigmxyz/cryo
this they say is early stage.
and the data isn't live


for covalent not sure how to get transactions for the real time stuff
https://www.covalenthq.com/docs/api/balances/get-token-balances-for-address/
or this 
https://www.pokt.network/


## using cryo
Dataset-specific Options:
      --address <ADDRESS>...         Address(es)
      --to-address <address>...      To Address(es)
      --from-address <address>...    From Address(es)
      --call-data <CALL_DATA>...     Call data(s) to use for eth_calls
      --function <FUNCTION>...       Function(s) to use for eth_calls
      --inputs <INPUTS>...           Input(s) to use for eth_calls
      --slot <SLOT>...               Slot(s)
      --contract <CONTRACT>...       Contract address(es)
      --topic0 <TOPIC0>...           Topic0(s) [aliases: event]
      --topic1 <TOPIC1>...           Topic1(s)
      --topic2 <TOPIC2>...           Topic2(s)
      --topic3 <TOPIC3>...           Topic3(s)
      --event-signature <SIG>...     Event signature for log decoding
      --inner-request-size <BLOCKS>  Blocks per request (eth_getLogs) [default: 1]

use these for the transactions of each wallet
combine with this
--address (topic2) trader id
https://dune.com/queries/3164666
topic0 = transfer event

--topic0 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef --to-address 0xeA2b4e7F02b859305093f9F4778a19D66CA176d5 --address 0x59533a164a805cb5dfb4fa28af580cb7b52d22 --contract  0xea2b4e7f02b859305093f9f4778a19d66ca176d5 --network-name "goerli" 


full command with rate limits - not that successfull
cryo logs --topic0 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef --to-address 0xeA2b4e7F02b859305093f9F4778a19D66CA176d5  --contract  0xea2b4e7f02b859305093f9f4778a19d66ca176d5 --network-name 5  --rpc https://eth-goerli.g.alchemy.com/v2/O34BZtmZhQIURrZ8bxXYM7j4UVuZF_fU -l 330