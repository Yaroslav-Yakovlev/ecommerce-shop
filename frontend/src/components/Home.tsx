import React, {FC} from 'react';
import {useGetAllProductsQuery} from "../features/productsApi";
import {Products} from "../features/productsSlice";
import {useAppDispatch} from "../hooks";
import {addToCart} from "../features/cartSlice";

const Home: FC = () => {
    const { data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useAppDispatch();

    const handleAddCart = (product: Products): void => {
        dispatch(addToCart(product))
    };

    return (
        <div className='home-container'>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred..</p>
            ) : (
                <>
                    <h2>New Arrivals</h2>

                    <div className="products">
                        {
                           Array.isArray(data) && data?.map((product: Products) => (
                               <div
                                key={product.id}
                                className={'product'}
                               >
                            <h3>{product.name}</h3>
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                            <div className='details'>
                                <span>{product.description}</span>
                                <span className='price'>${product.price}</span>
                            </div>
                            <button onClick={() => handleAddCart(product)}>Add To Cart</button>
                        </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
