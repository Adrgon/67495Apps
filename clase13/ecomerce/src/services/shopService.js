import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../databases/realTimeDataBase'
export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        //console.log(response);
        const responseTransformed = Object.values(response);
        //console.log(responseTransformed);
        return responseTransformed;
      },
    }),
    getProductById: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
        if(responseTransformed.length) return responseTransformed[0]
        return null
      },
    }),
    postOrder: builder.mutation({
      query: ({...order}) => ({
        url: 'orders.json',
        method: 'POST',
        body: order
      })
    }),
    updateStock: builder.mutation({
      query: ({...order}) => ({
        url: 'products.json',
        method: 'PATCH',
        body: order
      })
    })
  }),
});

export const {
  useGetCategoriesQuery, 
  useGetProductsByCategoryQuery, 
  useGetProductByIdQuery,
  usePostOrderMutation,
  useUpdateStockMutation
} = shopApi
