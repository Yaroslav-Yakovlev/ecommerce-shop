import {configureStore} from "@reduxjs/toolkit";
import productsReducer, {productsFetch} from "./productsSlice";
import {productsApi} from "./productsApi";
import cartReducer, {getTotals} from "./cartSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),

});

store.dispatch(productsFetch);
store.dispatch(getTotals());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
