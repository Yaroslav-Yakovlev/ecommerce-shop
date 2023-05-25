import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    cartQuantity: number;
}

export interface InitialState {
    items: Products[] | undefined;
    status: 'idle' | 'pending' | 'success' | 'rejected';
}

const initialState: InitialState = {
    items: undefined,
    status: 'idle',
};

export const productsFetch = createAsyncThunk<Products[] | undefined>(
    'products/productsFetch',
    async () => {
        const response: AxiosResponse<Products[]> = await axios.get(
            "http://localhost:5000/products"
        );

        return response?.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state: InitialState) => {
            state.status = 'pending';
        });
        builder.addCase(
            productsFetch.fulfilled,
            (state: InitialState, action: PayloadAction<Products[] | undefined>) => {
                state.status = 'success';
                state.items = action.payload;
            }
        );
        builder.addCase(productsFetch.rejected, (state: InitialState) => {
            state.status = 'rejected';
        });
    },
});

export default productsSlice.reducer;
