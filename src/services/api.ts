import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Shift {
  id: string;
  logo: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  companyName: string;
  dateStartByCity: string;
  timeStartByCity: string;
  timeEndByCity: string;
  currentWorkers: number;
  planWorkers: number;
  workTypes: [
    {
      "id": number;
      "name": string;
      "nameGt5": string;
      "nameLt5": string;
      "nameOne": string;
    }
  ];
  priceWorker: number;
  bonusPriceWorker: number;
  customerFeedbacksCount: string;
  customerRating: number;
  isPromotionEnabled: boolean;
}

export interface ShiftsData {
  data: Shift[];
  status: number;
}

interface GetShiftsArgs {
  latitude: number;
  longitude: number;
}

export const shiftsApi = createApi({
  reducerPath: 'shiftsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mobile.handswork.pro/api/shifts/'
  }),
  endpoints: (builder) => ({
    getShifts: builder.query<ShiftsData, GetShiftsArgs>({
      query: ({ latitude, longitude }) => `map-list-unauthorized?latitude=${latitude}&longitude=${longitude}`,
    }),
  }),
});

export const { useLazyGetShiftsQuery } = shiftsApi;
