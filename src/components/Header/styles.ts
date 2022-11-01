import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    width: 143px;
    height: 38px;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["brand-purple-dark"]};
    background: ${(props) => props.theme["brand-purple-light"]};
  }
`;
