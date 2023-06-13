import styled from "styled-components";

export const CartItemsStyled = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  border-top: 1px solid rgb(187,187,187);
  padding: 1rem 0;
  color: black;
  font-weight: 400;
  cursor: pointer;
`;

export const CartProductStyled = styled.div`
  display: flex;
  font-weight: 400;
  
  img {
    width: 100px;
    max-width: 100%;
    margin-right: 1rem;
  }
  
  h3 {
    font-weight: 400;
  }
  
  button {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    background: none;
    color: gray;
  }
  
  button:hover {
    color: black;
    font-weight: 600;
    cursor: pointer; 
  }
`;
