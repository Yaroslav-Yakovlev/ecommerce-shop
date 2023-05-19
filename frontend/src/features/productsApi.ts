import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Products} from "./productsSlice";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Products[], void>({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;
