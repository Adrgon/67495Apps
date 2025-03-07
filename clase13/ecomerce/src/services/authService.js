import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseAuthUrl, apiKey } from "../databases/users";


const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (...auth) => ({
        url: `/accounts:signUp?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    signIn: builder.mutation({
      query: (...auth) => ({
        url: `/accounts:signInWithPassword?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});

export const {useSignUpMutation, useSignInMutation} = authApi;
