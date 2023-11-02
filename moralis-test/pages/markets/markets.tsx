export type Market = {
  contractAddress: string;
  name: string;
  duneUrl?: string;
};
const getLink = (m: Market) =>
  `https://goerli.etherscan.io/address/${m.contractAddress}`;
export const markets: Market[] = [
  {
    contractAddress: "0x98a47a182880e0b94a403f9f174116d816d171de",
    name: "green",
  },
  {
    contractAddress: "0x1325712f116faddb20c8905bb0c41bb3be1247c1",
    name: "red",
  },
  {
    contractAddress: "0x32692d2d6837dd9e48fb2dc8b703b2621b0e2a6c",
    name: "yellow",
  },
  {
    contractAddress: "0x36ebee707d6a0931a0b9d6fabec252fb9f2865ac",
    name: "blue",
  },
  {
    contractAddress: "0xd3664b5e72b46eaba722ab6f43c22dbf40181954",
    name: "usdc",
    duneUrl: "https://api.dune.com/api/v1/query/3151753/results",
  },
  {
    contractAddress: "0x2715ccea428f8c7694f7e78b2c89cb454c5f7294",
    name: "weth",
    duneUrl: "https://api.dune.com/api/v1/query/3150665/results",
  },
];
