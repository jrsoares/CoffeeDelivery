import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const List = styled.ul`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  list-style: none;
`;
