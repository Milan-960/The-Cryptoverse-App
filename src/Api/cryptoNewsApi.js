import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const cryptoNewsHeaders = {

};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// const options = {
//   method: "GET",
//   url: "https://bing-news-search1.p.rapidapi.com/news",
//   params: { safeSearch: "Off", textFormat: "Raw" },
//   headers: {
//     "X-BingApis-SDK": "true",
//     "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//     "X-RapidAPI-Key": "be5696e843msha65bb7bcecb2ed8p1bbd6fjsn37834df93e45",
//   },
// };
