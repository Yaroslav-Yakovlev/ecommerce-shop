import {configureStore} from "@reduxjs/toolkit";
import productsReducer, {productsFetch} from "./productsSlice";
import {productsApi} from "./productsApi";

const store = configureStore({
    reducer: {
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),

});

store.dispatch(productsFetch());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
