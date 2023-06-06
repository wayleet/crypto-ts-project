import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';
import { coingeckoAPI } from '../services/coingecko';

const store = configureStore({
	reducer: {
		[coingeckoAPI.reducerPath]: coingeckoAPI.reducer,
		auth: authSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(coingeckoAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
