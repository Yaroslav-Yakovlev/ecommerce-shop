import React, {FC, useEffect} from 'react';
import {useAppSelector, useAppDispatch} from "../hooks";
import {Link} from "react-router-dom";
import {Products} from "../features/productsSlice";
import {addToCart, clearCart, decreaseCartItem, getTotals, removeFromCart} from "../features/cartSlice";
import {EmptyCartStyled} from "./styles/EmptyCart.styled";
import {TitlesStyled} from "./styles/Titles.styled";
import {CartContainerStyled} from "./styles/CartContainer.styled";
import {CartItemsStyled, CartProductStyled} from "./styles/CartItems.styled";

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
                <EmptyCartStyled>
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
                </EmptyCartStyled>
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
                            <CartItemsStyled>
                                <CartProductStyled>
                                    <img src={cartItem.image} alt={cartItem.name}/>
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.description}</p>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </CartProductStyled>
                                <div className="cart-product-price">${cartItem.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => handleDecreaseCartItem(cartItem)}>-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCartItem(cartItem)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    ${cartItem.price * cartItem.cartQuantity}
                                </div>
                            </CartItemsStyled>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <button
                            onClick={() => handleClearCart()}
                            className="clear-cart"
                        >
                            Clear Cart
                        </button>
                        <div className='cart-checkout'>
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className='amount'>${cart.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button>Check out</button>
                            <div className='continue-shopping'>
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </CartContainerStyled>
    );
};

export default Cart;
