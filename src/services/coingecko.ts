import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export interface FavouriteAssets {
	prices: Array<number[]>;
	market_caps: Array<number[]>;
	total_volumes: Array<number[]>;
}

export const coingeckoAPI = createApi({
	reducerPath: 'coingeckoAPI',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getFavouriteAssets: builder.query<FavouriteAssets, string>({
			query: (name) => ({
				url: `/coins/${name}/market_chart?vs_currency=usd&days=90`
			})
		})
	})
});

export const { useGetFavouriteAssetsQuery } = coingeckoAPI;
