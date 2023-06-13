import styled from "styled-components";

export const EmptyCartStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-top: 2rem;
  color: rgb(84,84,84);
  
  > div {
    margin-top: 1rem;
  }
  
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: gray;
  }
  
  span {
    margin-left: 0.5rem;
  }
`;
