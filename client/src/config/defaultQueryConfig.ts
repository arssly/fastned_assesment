import { DefaultOptions } from "react-query";
export default {
  queries: {
    // we don't need stale time
    staleTime: Infinity,

    // we don't need to refetch on every focus. that's just unnecessary stress on server
    refetchOnWindowFocus: false,

    refetchOnReconnect: true,

    /*
     * If set to `false`, the query will not be retried on mount if it contains an error.
     * Defaults to `true`.
     */
    retryOnMount: true,

    /*
     * If set to true, the query will refetch on mount if the data is stale.
     * If set to false, the query will not refetch on mount.
     * If set to "always", the query will always refetch on mount.
     */
    refetchOnMount: "always",

    // I believe the default is alright
    // cacheTime: 5 * 60 * 1000,
  },
} as DefaultOptions;
