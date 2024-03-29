import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 15px;
  }
`;

export const CheckoutForm = styled.div`
  width: 40rem;
`;

export const WrapperForm = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  > div {
    display: grid;
    grid-template-columns: 30px 1fr;
    margin-bottom: 2rem;
    line-height: 130%;

    svg {
      color: ${(props) => props.theme["brand-yellow-dark"]};
    }

    span {
      line-height: 130%;
      margin-bottom: 2px;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }

    small {
      grid-column-start: 2;
      grid-column-end: 2;
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  width: 35rem;
  grid-template-columns: 200px 276px 60px;
  grid-row-gap: 16px;
  grid-column-gap: 12px;

  > input:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 1;
  }

  > input:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  > input:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 4;
    position: relative;

    & + label {
      position: absolute;
      width: 100%;
      transition: 0.2s;
    }
    &:focus + label {
    }
  }

  input {
    height: 2.625rem;
    border: none;
    border-radius: 4px;
    padding: 0.75rem;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const Payment = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  .info {
    display: grid;
    grid-template-columns: 30px 1fr;
    margin-bottom: 2rem;
    line-height: 130%;

    svg {
      color: ${(props) => props.theme["brand-purple"]};
    }

    span {
      line-height: 130%;
      margin-bottom: 2px;

      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }

    small {
      color: ${(props) => props.theme["base-text"]};
      grid-column-start: 2;
      grid-column-end: 2;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  border: 0;

  height: 3.125rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  justify-content: center;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["base--hover"]};
  }
`;

export const WrapperPayment = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2rem;
`;

export const BtnPayment = styled(Button)`
  width: 12rem;
  svg {
    font-size: 1rem;
    color: ${(props) => props.theme["brand-purple"]};
  }

  &:focus {
    background: ${(props) => props.theme["brand-purple-light"]};
    box-shadow: 0 0 0 1px ${(props) => props.theme["brand-purple"]};
  }
`;
