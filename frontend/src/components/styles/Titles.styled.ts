import styled from "styled-components";

export const TitlesStyled = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 1rem;
  margin: 2rem 0 1rem 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  h3 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  h3:last-child {
    justify-self: right;
  }
`;
