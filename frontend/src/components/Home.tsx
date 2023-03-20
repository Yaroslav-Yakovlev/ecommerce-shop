import React from 'react';
import {useGetAllProductsQuery} from "../features/productsApi";
import {Products} from "../features/productsSlice";

const Home = () => {
    const { data, error, isLoading} = useGetAllProductsQuery('');


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
                            <button>Add To Cart</button>
                        </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
