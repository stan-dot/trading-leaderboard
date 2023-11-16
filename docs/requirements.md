## main task
- [x] connect data to the UI
  - [x] do data fetching in the client components instead
  - [x] filter client side for transactions to a given token (seaport or just the main token here)
  - [x] fix the too much use of API, infinite re-renders - [x] using the immutable feature https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
  - [x] also had to disable that for the EVM hooks https://www.npmjs.com/package/@moralisweb3/next#3-disable-auto-data-fetching
  - [ ] get the trader data
  - [x] display the trader data as another pie chart - what pairs do compose given trader's portfolio.
  - [ ] deploy stuff

- [x] hard code some traders
- [x] try setting up storybook
- [ ] make the UI nice
- [ ] starting from the big layout
- [ ] focus on the components according to the best practices
- [ ] possibly migrate to Next14 for better tailwind support

## caching stage
- [x] change from evm moralis hooks into API routes proper
- [ ] persist the token metadata with mongodb - ok actually only 6 markets are out there
- [ ] persist the dune top trader values in monogdb
  - [ ] add a refresh button 

## questions
- [ ] definitely not integrated with the current app
- [ ] Hilliam mentioned that have frontend devs, but should I do this?
- [ ] how much view inside?
- [ ] how many hard-coded wallets or some specific ones?
- [ ] storybook good for this or not?
- [ ] some issues with metadata
- [ ] what deliverables exactly?
- [ ] 