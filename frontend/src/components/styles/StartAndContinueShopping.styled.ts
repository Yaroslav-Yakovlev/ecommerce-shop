import styled from "styled-components";

interface StartAndContinueShoppingStyledProps {
    flexDirection: string;
}


export const StartAndContinueShoppingStyled = styled.div<StartAndContinueShoppingStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
  font-size: 20px;
  margin-top: 1rem;
  color: rgb(84,84,84);
  
   div {
    margin-top: 1rem;
  }
  
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: gray;
    font-weight: 700;
  }
  
  span {
    margin-left: 0.5rem;
  }
`;
