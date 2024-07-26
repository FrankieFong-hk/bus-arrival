import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SuccessResponse } from "./DTO/common.interface";
import { ETA, RouteList, RouteStopList, StopList } from "./DTO/bus.interface";

export const busApiSlice = createApi({
  reducerPath: "busApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://data.etabus.gov.hk/",
  }),
  endpoints: (builder) => ({
    // This API return all bus routes of KMB.
    getRouteList: builder.query<SuccessResponse<RouteList[]>, void>({
      query: () => ({ url: `v1/transport/kmb/route/` }),
    }),

    // This API takes a KMB’s operating bus route number, direction and service type,
    // and returns the respective route information.
    getRouteDetail: builder.query<
      SuccessResponse<RouteList>,
      { route: string; direction: string; service_type: string }
    >({
      query: ({ route, direction, service_type }) => ({
        url: `/v1/transport/kmb/route/${route}/${direction}/${service_type}`,
      }),
    }),

    // This API returns all bus stop information at once.
    getBusStopList: builder.query<SuccessResponse<StopList[]>, void>({
      query: () => ({ url: `v1/transport/kmb/stop` }),
    }),

    // This API takes a 16-character bus stop ID and returns the respective bus stop
    // information.
    getBusStopDetail: builder.query<SuccessResponse<StopList>, string>({
      query: (stop_id) => ({ url: `v1/transport/kmb/stop/${stop_id}` }),
    }),

    // This API takes returns the stop information of all routes.
    getRouteStopList: builder.query<SuccessResponse<RouteStopList[]>, void>({
      query: () => ({ url: `v1/transport/kmb/route-stop` }),
    }),

    // This API takes a route direction and the KMB’s operating bus route number and
    // returns the stop information of the respective route.
    getRouteStopDetail: builder.query<
      SuccessResponse<RouteStopList[]>,
      { route: string; direction: string; service_type: string }
    >({
      query: ({ route, direction, service_type }) => ({
        url: `v1/transport/kmb/route-stop/${route}/${direction}/${service_type}`,
      }),
    }),

    // This API takes a bus stop ID, the KMB’s operating bus route number and service
    // type; then, it returns the "estimated time of arrival" (ETA) information of the respective route
    // at the stop. Please note that the returned ETA information is also included in other service types
    // of the same route number if they share the same bus stop.
    getETA: builder.query<
      SuccessResponse<ETA[]>,
      { route: string; stop_id: string; service_type: string }
    >({
      query: ({ route, stop_id, service_type }) => ({
        url: `/v1/transport/kmb/eta/${stop_id}/${route}/${service_type}`,
      }),
    }),

    // This API takes a bus stop ID; then, it returns the "estimated time of arrival"
    // (ETA) information of all routes at that stop.
    getETAAll: builder.query<SuccessResponse<ETA[]>, { stop_id: string }>({
      query: ({ stop_id }) => ({
        url: `/v1/transport/kmb/stop-eta/${stop_id}`,
      }),
    }),

    // This API takes the KMB’s operating bus route number(s) and service type(s);
    // then, it returns the "estimated time of arrival" (ETA) information of all stops on the respective
    // route. The data format is the same as ETA API. Please note that the returned ETA information
    // is also included in other service types of the same route number if they share the same bus stop
    getETAAllRoute: builder.query<
      SuccessResponse<ETA[]>,
      { route: string; service_type: string }
    >({
      query: ({ route, service_type }) => ({
        url: `/v1/transport/kmb/route-eta/${route}/${service_type}`,
      }),
    }),
  }),
});

export const {
  useGetRouteListQuery,
  useGetRouteDetailQuery,
  useGetBusStopListQuery,
  useGetBusStopDetailQuery,
  useGetRouteStopListQuery,
  useGetRouteStopDetailQuery,
  useGetETAQuery,
  useGetETAAllQuery,
  useGetETAAllRouteQuery,
} = busApiSlice;
