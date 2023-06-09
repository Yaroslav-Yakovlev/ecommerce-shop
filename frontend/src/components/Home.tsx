import React, {FC} from 'react';
import {useGetAllProductsQuery} from "../features/productsApi";
import {Products} from "../features/productsSlice";
import Item from "./Item";
import {HomeContainerStyled} from "./styles/HomeContainer.styled";

const Home: FC = () => {
    const { data, error, isLoading} = useGetAllProductsQuery();

    return (
        <HomeContainerStyled>
            {isLoading && <p>Loading...</p>}

            {error && <p>An error occurred..</p>}

            {!isLoading && !error && (
                <>
                    <h2>New Arrivals</h2>
                    <div>
                        { Array.isArray(data) && data?.map((product: Products) => (
                            <Item
                                product={product}
                                key={product.id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                            />
                        ))}
                    </div>
                </>
            )}

        </HomeContainerStyled>
    );
};

export default Home;
