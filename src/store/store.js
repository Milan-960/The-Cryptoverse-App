import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Api/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
