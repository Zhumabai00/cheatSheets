// import { MyComponentState } from "@components/Test";
import { IGoods } from "@models/IGoods";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const goodsApi = createApi({
	reducerPath: 'goodsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	tagTypes: ['Products'],
	endpoints: (build) => ({
		getGoods: build.query<IGoods[], string>({
			query: (limit: string) => ({
				url: `/goods`,
				params: {
					_limit: limit
				}
				// can write other appeals such as method and body.
			}),
			providesTags: ['Products'],
		}),
		addProduct: build.mutation<IGoods, IGoods>({
			query: (arg) => ({
				url: '/goods',
				method: "POST",
				body: arg
			}),
			invalidatesTags: ['Products'],
		}),
		deleteProduct: build.mutation({
			query: (arg) => ({
				url: `/goods/${arg}`,
				method: "DELETE",
			}),
			invalidatesTags: ['Products'],
		})
	})
});

export const { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } = goodsApi
