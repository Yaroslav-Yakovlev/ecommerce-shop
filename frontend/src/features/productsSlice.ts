import {createSlice} from "@reduxjs/toolkit";

export type Items = {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}

export type InitialState = {
    items: Items[],
    status: string | null
}


export const productsSlice = createSlice({
    name: 'products',
    initialState:<InitialState> {
        items: [],
        status: null,
    },
    reducers: {},

});

export default productsSlice.reducer;