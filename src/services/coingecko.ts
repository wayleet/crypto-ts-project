import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FavouriteAssets, Prices, SingleAsset } from '../common/types/services';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const coingeckoAPI = createApi({
	reducerPath: 'coingeckoAPI',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getFavouriteAssets: builder.query<Prices, string>({
			query: (name) => ({
				url: `/coins/${name}/market_chart?vs_currency=usd&days=90`
			}),
			transformResponse: (response: FavouriteAssets) =>
				response.prices.slice(
					response.prices.length - 45,
					response.prices.length - 1
				)
		}),
		getSingleAsset: builder.query<SingleAsset[], string>({
			query: (name) => ({
				url: `coins/markets?vs_currency=usd&ids=${name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
			})
		})
	})
});

export const { useGetFavouriteAssetsQuery, useGetSingleAssetQuery } =
	coingeckoAPI;
