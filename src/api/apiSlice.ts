import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://data.etabus.gov.hk/",
  }),
  endpoints: () => ({}),
});
