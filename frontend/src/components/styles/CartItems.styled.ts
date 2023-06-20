import styled from "styled-components";

export const CartItemsContainerStyled = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  border-top: 1px solid rgb(187,187,187);
  padding: 1rem 0;
  color: black;
  font-weight: 400;
`;

export const CartItemStyled = styled.div`
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

export const QuantityStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 130px;
  max-width: 100%;
  border: 0.5px solid rgb(177,177,177);
  border-radius: 5px;
  
  button {
    border: none;
    outline: none;
    background: none;
    padding: 0.7rem;
    cursor: pointer;
    width: 50px;
  }
  
  div {
    padding: 0.7rem 0;
  }
`;

export const TotalPriceStyled = styled.div`
  justify-self: right;
  padding-right: 0.5rem;
  font-weight: 700;
`;
