import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//import { baseUrl } from '../databases/realTimeDataBase'


export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  tagTypes: ["profileImageGet", "locationGet"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
        return responseTransformed;
      },
    }),
    getProductById: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
        if (responseTransformed.length) return responseTransformed[0];
        return null;
      },
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getOrders: builder.query({
      query: () => `orders.json`,
    }),
    updateStock: builder.mutation({
      query: ({ ...order }) => ({
        url: "products.json",
        method: "PATCH",
        body: order,
      }),
    }),
    //Obtener imagen desde la base de datos
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    // Guardar imagen en la base de datos.
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),
    //Obtener direccion desde la base de datos
    getLocation: builder.query({
      query: (localId) => `locations/${localId}.json`,
      providesTags: ["locationGet"],
    }),
    // Guardar imagen en la base de datos.
    postLocation: builder.mutation({
      query: ({ location, localId }) => ({
        url: `locations/${localId}.json`,
        method: "PUT",
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
          updatedAt: location.updatedAt,
        },
      }),
      invalidatesTags: ["locationGet"],
    }),
  }),
});

export const {
  useGetCategoriesQuery, 
  useGetProductsByCategoryQuery, 
  useGetProductByIdQuery,
  usePostOrderMutation,
  useGetOrdersQuery,
  useUpdateStockMutation, 
  useGetProfileImageQuery,
  usePostProfileImageMutation, 
  useGetLocationQuery,
  usePostLocationMutation
} = shopApi
