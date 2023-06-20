import styled from "styled-components";

export const CartSummaryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187,187,187);
  padding-top: 2rem;
`;

export const ClearCartButtonStyled = styled.button`
  width: 130px;
  max-width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  border: 0.5px solid rgb(177,177,177);
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
  
  &:hover {
    font-weight: 600;
  }
`;
