export type MoralisTokenMetadataResponse = {

  address: string; // starts with 0x
  address_label: string;
  name: string;
  symbol: string;
  decimals: string;
  logo: string;
  logo_hash: string;
  thumbnail: string;
  block_number: any;
  validated: any;
  created_at: string; // data object into string
  possible_spam: boolean;
};
const exampleResponse: MoralisTokenMetadataResponse[] = [{
  address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  address_label: 'Wrapped Ether',
  name: 'Wrapped Ether',
  symbol: 'WETH',
  decimals: '18',
  logo: 'https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
  logo_hash: '0a7fc292596820fe066ce8ce3fd6e2ad9d479c2993f905e410ef74f2062a83ec',
  thumbnail: 'https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.png',
  block_number: null,
  validated: null,
  created_at: '2022-01-20T10:39:55.818Z',
  possible_spam: false
}, {
  address: '0x514910771af9ca656af840dff83e8264ecf986ca',
  address_label: 'ChainLink Token',
  name: 'Chain Link',
  symbol: 'LINK',
  decimals: '18',
  logo: 'https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png',
  logo_hash: 'fd74ea1227adb458733847c09aab05d89c35c14b640c5ee1e0a8bffa79193eb4',
  thumbnail: 'https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca_thumb.png',
  block_number: null,
  validated: null,
  created_at: '2022-01-20T10:39:55.818Z',
  possible_spam: false
}
];
