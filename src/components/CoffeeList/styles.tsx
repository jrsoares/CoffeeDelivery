import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem;
  margin-top: 6.75rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
