
export interface MoralisData {
  page_size: number;
  page: number;
  cursor: any;
  result: OneResult[];
}

export interface OneResult {
  hash: string;
  nonce: string;
  transaction_index: string;
  from_address: string;
  from_address_label: string;
  to_address: string;
  to_address_label: any;
  value: string;
  gas: string;
  gas_price: string;
  input: string;
  receipt_cumulative_gas_used: string;
  receipt_gas_used: string;
  receipt_contract_address: any;
  receipt_root: any;
  receipt_status: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
  transfer_index: number[];
  logs: any[];
  decoded_call: any;
}
