import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";

export interface Products {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}

export interface InitialState  {
    items: Products,
    status: string | null,
}


export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async () => {
            const response: AxiosResponse<Products> = await axios.get('http://localhost:5000/products');

            return response?.data;
        })


export const productsSlice = createSlice({
    name: 'products',
    initialState:<InitialState> {
        items: {},
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(productsFetch.fulfilled, (state, action: PayloadAction<Products>) => {
            state.status = 'success';
            state.items = action.payload;
        })
        builder.addCase(productsFetch.rejected, (state) => {
            state.status = 'rejected';
        })
    }

});

export default productsSlice.reducer;
