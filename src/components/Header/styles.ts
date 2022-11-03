import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    padding: 10px 8px;
    width: 143px;
    height: 38px;

    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["brand-purple-dark"]};
    background: ${(props) => props.theme["brand-purple-light"]};

    svg {
      color: ${(props) => props.theme["brand-purple"]};
      margin-right: 7px;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["brand-yellow-dark"]};
  background: ${(props) => props.theme["brand-yellow-light"]};
`;
