/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../services/apiSlice";

export const Store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(Store.dispatch);

export default Store;
