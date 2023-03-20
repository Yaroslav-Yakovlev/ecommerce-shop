import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Products} from "./productsSlice";

export interface ProductsResponse {
    data: Products [],
}


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: (build) => ({
        getAllProducts: build.query<ProductsResponse, string>({
            query: () => 'products',
        })
    })
});

export const { useGetAllProductsQuery } = productsApi;


