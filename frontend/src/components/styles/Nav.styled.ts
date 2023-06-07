import styled from "styled-components";

export const NavStyled = styled.nav`
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  
  a {
    text-decoration: none;
    color: white;
  }
  
  h2 {
    font-size: 40px;
  }
  
  div {
    display: flex;
    align-items: center;
  }
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 700;
    margin-left: 5px;
    color: black;
    background-color: yellow;
  }
  
`;
