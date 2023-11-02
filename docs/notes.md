

this address has a rich data history
http://localhost:3000/traders/0x10bc7c3aae1f2f792097b96dd8b37030d9e66088

## not needed

- [ ] use seaport or token logs and ABI to read in the events 
- [x] check that the ABI is right for the logs - only logs emitted by the transaction itself - yeah it's seaport that emits most logs but there's no need to work directly with these
- [ ] or make an explicit reference in the where clause to the 10 addresses, hard code these
- [ ] make the data fetch client side so that it's ok on fleek - ipfs wouldn't accept such large files on this page
