import styled from "styled-components";

export const ItemStyled = styled.div`
  width: 250px;
  height: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
  2px 2px 5px rgba(94, 104, 121, 0.3);
  
  img {
    width: 80%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  h3 {
    font-size: 25px;
    font-weight: 400;
  }
  
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
