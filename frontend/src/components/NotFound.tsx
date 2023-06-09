import React, {FC} from 'react';
import {NotFoundStyled} from "./styles/NotFound.styled";

const NotFound: FC = () => {
    return (
        <NotFoundStyled>
            <h2>404</h2>
            <p>Page not found</p>
        </NotFoundStyled>
    );
};

export default NotFound;
