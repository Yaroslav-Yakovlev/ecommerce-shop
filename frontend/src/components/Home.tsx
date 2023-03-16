import React from 'react';
import {useGetAllProductsQuery} from "../features/productsApi";

const Home = () => {
    // @ts-ignore
    const { data, error, isLoading} = useGetAllProductsQuery();
    return (
        <div>

        </div>
    );
};

export default Home;
