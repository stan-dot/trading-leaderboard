const walletTxExample: WalletTx[] = [
  {
    hash: '0xfa3271b93d5842b71ac8f8b2874fc244915b579fdfc7a57ecd36d688639892d0',
    nonce: '103',
    transaction_index: '53',
    from_address: '0x18deee9699526f8c8a87004b2e4e55029fb26b9a',
    from_address_label: null,
    to_address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    to_address_label: null,
    value: '50000000000000000',
    gas: '21896',
    gas_price: '13873230006',
    input: '0x706c616e65743a766974616c696b2e6574682f67656e6572616c2f323032332f30332f33312f7a6b6d756c7469636c69656e742e68746d6c',
    receipt_cumulative_gas_used: '5123545',
    receipt_gas_used: '21896',
    receipt_contract_address: null,
    receipt_root: null,
    receipt_status: '1',
    block_timestamp: '2023-04-11T22:53:00.000Z',
    block_number: '8814356',
    block_hash: '0x1319225bf1365cdaeaab891c983174903428976b8654495b092900f9b51241ae',
    transfer_index: [Array]
  },
];

export type WalletTx = {
  hash: string;
  nonce: string;
  transaction_index: string;
  from_address: string;
  from_address_label: string | null;
  to_address: string;
  to_address_label: string | null;
  value: string;
  gas: string;
  gas_price: string;
  input: string;
  receipt_cumulative_gas_used: string;
  receipt_gas_used: string;
  receipt_contract_address: null;
  receipt_root: null;
  receipt_status: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
  transfer_index: any[];
};
