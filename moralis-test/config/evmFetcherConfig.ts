import { FetchParams } from "@moralisweb3/next";

export const evmFetcherConfig: FetchParams = {
  shouldRetryOnError: false,
  errorRetryCount: 2,
  revalidateOnMount: false,
  revalidateOnFocus: false,
  refreshInterval: 50000
};
