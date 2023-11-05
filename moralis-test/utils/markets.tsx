export type Market = {
  contractAddress: string;
  name: string;
  duneQueryNumber?: string;
};

export const getMarketLink = (m: Market) =>
  `https://goerli.etherscan.io/address/${m.contractAddress}`;

export const markets: Market[] = [
  {
    contractAddress: "0x98a47a182880e0b94a403f9f174116d816d171de",
    name: "green",
    duneQueryNumber: "3168397",
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
    duneQueryNumber: "3151753",
  },
  {
    contractAddress: "0x2715ccea428f8c7694f7e78b2c89cb454c5f7294",
    name: "weth",
    duneQueryNumber: "3150665",
  },
];
