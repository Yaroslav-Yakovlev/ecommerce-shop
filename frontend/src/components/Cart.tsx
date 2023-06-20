import React, {FC, useEffect} from 'react';
import {useAppSelector, useAppDispatch} from "../hooks";
import {Link} from "react-router-dom";
import {Products} from "../features/productsSlice";
import {addToCart, clearCart, decreaseCartItem, getTotals, removeFromCart} from "../features/cartSlice";
import {StartAndContinueShoppingStyled} from "./styles/StartAndContinueShopping.styled";
import {TitlesStyled} from "./styles/Titles.styled";
import {CartContainerStyled} from "./styles/CartContainer.styled";
import {CartItemsContainerStyled, CartItemStyled, QuantityStyled, TotalPriceStyled} from "./styles/CartItems.styled";
import {CartSummaryStyled, ClearCartButtonStyled} from "./styles/CartSummary.styled";
import {CheckOutStyled} from "./styles/CheckOut.styled";
import {ButtonStyled} from "./styles/Button.styled";


const Cart: FC = () => {
    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem: Products): void => {
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCartItem = (cartItem: Products): void => {
        dispatch(decreaseCartItem(cartItem));
    };

    const handleIncreaseCartItem = (cartItem: Products): void => {
        dispatch(addToCart(cartItem));
    };

    const handleClearCart = (): void => {
        dispatch(clearCart());
    };

    return (
        <CartContainerStyled>
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <StartAndContinueShoppingStyled flexDirection='column'>
                    <p>Your cart is currently empty</p>
                    <div>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 fill="currentColor"
                                 className="bi bi-arrow-left"
                                 viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </StartAndContinueShoppingStyled>
            ) : (
                <div>
                    <TitlesStyled>
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </TitlesStyled>
                    <div>
                        {cart.cartItems?.map(cartItem => (
                            <CartItemsContainerStyled key={cartItem.id}>
                                <CartItemStyled>
                                    <img src={cartItem.image} alt={cartItem.name}/>
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.description}</p>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </CartItemStyled>
                                <div>${cartItem.price}</div>
                                <QuantityStyled>
                                    <button onClick={() => handleDecreaseCartItem(cartItem)}>-</button>
                                    <div>{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCartItem(cartItem)}>+</button>
                                </QuantityStyled>
                                <TotalPriceStyled>
                                    ${cartItem.price * cartItem.cartQuantity}
                                </TotalPriceStyled>
                            </CartItemsContainerStyled>
                        ))}
                    </div>
                    <CartSummaryStyled>
                        <ClearCartButtonStyled onClick={() => handleClearCart()}>
                            Clear Cart
                        </ClearCartButtonStyled>
                        <CheckOutStyled>
                            <div>
                                <span>Subtotal</span>
                                <span>${cart.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <ButtonStyled>Check out</ButtonStyled>
                            <StartAndContinueShoppingStyled flexDirection='row'>
                                <Link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="20"
                                         height="20"
                                         fill="currentColor"
                                         className="bi bi-arrow-left"
                                         viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </StartAndContinueShoppingStyled>
                        </CheckOutStyled>
                    </CartSummaryStyled>
                </div>
            )}
        </CartContainerStyled>
    );
};

export default Cart;
