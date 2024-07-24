import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const busApiSlice = createApi({
  reducerPath: "busApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://data.etabus.gov.hk/",
  }),
  endpoints: (build) => ({
    getRouteList: build.query<any, void>({
      query: () => `v1/transport/kmb/route/`,
    }),
  }),
});

export const { useGetRouteListQuery } = busApiSlice;
