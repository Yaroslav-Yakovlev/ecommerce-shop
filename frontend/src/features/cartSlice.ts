import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Products} from "./productsSlice";
import {toast} from "react-toastify";

export interface cartInitialState {
    cartItems: Products[],
    cartTotalQuantity: number,
    cartTotalAmount: number,
}

const initialState: cartInitialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') || '')
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Products>) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(
                    `increased ${state.cartItems[itemIndex].name} quantity`, {
                    position: "bottom-left",
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(` ${action.payload.name} added to cart`, {
                    position: "bottom-left",
                })
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action: PayloadAction<Products>) {
           state.cartItems = state.cartItems.filter(
               cartItem => cartItem.id !== action.payload.id
           );

           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

           toast.error(`${action.payload.name} removed from cart`, {
               position: 'bottom-left'
           })
        },

        decreaseCartItem (state, action: PayloadAction<Products>) {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: 'bottom-left'
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);

                toast.error(`${action.payload.name} removed from cart`, {
                    position: 'bottom-left'
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        clearCart (state) {
            state.cartItems = [];

            toast.error(`cart cleared`, {
                position: 'bottom-left'
            });

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    }
});


export const {addToCart, removeFromCart, decreaseCartItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
