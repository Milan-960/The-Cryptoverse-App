import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiheaders });

const cryptoApiheaders = {
 
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     "X-RapidAPI-Key": "be5696e843msha65bb7bcecb2ed8p1bbd6fjsn37834df93e45",
//   },
// };
