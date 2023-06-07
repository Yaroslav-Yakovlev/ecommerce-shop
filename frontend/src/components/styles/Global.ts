import {createGlobalStyle} from "styled-components";

const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,700;1,400&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'nunito', sans-serif;

  }
`;

export default GlobalStyled;
