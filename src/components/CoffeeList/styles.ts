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

export const List = styled.ul`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  list-style: none;
`;

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    width: 7.5rem;
    top: -20px;
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    max-width: 5rem;
    max-height: 1.25rem;
    background: ${(props) => props.theme["brand-yellow-light"]};
    color: ${(props) => props.theme["brand-yellow-dark"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;

    small {
      font-size: 0.625rem;
      text-transform: uppercase;
      line-height: 130%;
      font-weight: 700;
    }
  }
`;

export const CardInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  padding: 0 1.25rem;
  text-align: center;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }
  dd {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CardPrice = styled.div`
  margin-top: 1.875rem;
  display: flex;
`;
