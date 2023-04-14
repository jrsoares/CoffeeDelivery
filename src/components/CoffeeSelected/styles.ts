import styled from "styled-components";
import { Button } from "../../pages/Checkout/styles";
export const CoffeeSelectedItem = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 700;
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  & + & {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme["base-button"]};
  }
`;

export const Info = styled.div`
  width: 5.937rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > div {
    width: 10.625rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  width: 72px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 26px;
  gap: 4px;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    border: transparent;
    background: transparent;
    color: ${(props) => props.theme["brand-purple"]};
    font-size: 20px;
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
    padding: 0 0.25rem;
  }
`;
export const BtnRemove = styled(Button)`
  width: 91px;
  height: 32px svg {
    color: ${(props) => props.theme["brand-purple"]};
    font-weight: 700;
  }
`;

export const CoffeeCardContainer = styled.div`
  width: 28rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  .items {
    border-top: 1px solid #ccc;
    padding-top: 24px;
  }

  .items-info {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
  .total {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 700;
  }
`;
