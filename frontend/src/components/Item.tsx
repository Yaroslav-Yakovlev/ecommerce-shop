import React from 'react';
import {ItemStyled} from "./styles/Item.styled";
import {useAppDispatch} from "../hooks";
import {useNavigate} from "react-router-dom";
import {addToCart} from "../features/cartSlice";
import {Products} from "../features/productsSlice";
import {ButtonStyled} from "./styles/Button.styled";

interface ItemProps {
    product: Products,
    image: string,
    name: string,
    description: string,
    price: number,
}

const Item: React.FC<ItemProps> = ({image, name, description, price, product}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleAddCart = (product: Products): void => {
        dispatch(addToCart(product));
        navigate('/cart');
    };

    return (
        <ItemStyled>
            <h3>{name}</h3>
            <img
                src={image}
                alt={name}
            />
            <div>
                <p>{description}</p>
                <span>${price}</span>
            </div>
            <ButtonStyled onClick={() => handleAddCart(product)}>Add To Cart</ButtonStyled>
        </ItemStyled>
    );
};

export default Item;
