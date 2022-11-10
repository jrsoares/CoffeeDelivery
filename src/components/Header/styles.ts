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
  position: relative;
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["brand-yellow-dark"]};
  background: ${(props) => props.theme["brand-yellow-light"]};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme["brand-yellow-dark"]};
    color: ${(props) => props.theme["base-white"]};
    border-radius: 1000px;
 
    right: -8.35px;
    top: -8px;
  }
`;
