import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Api/cryptoApi";
import { cryptoNewsApi } from "../Api/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
