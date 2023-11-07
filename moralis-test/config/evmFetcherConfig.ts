import { FetchParams } from "@moralisweb3/next";

export const evmFetcherConfig: FetchParams = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
  refreshInterval: 50000
};
