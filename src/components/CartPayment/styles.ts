import styled from "styled-components";
import { Button } from "../../pages/Checkout/styles";

export const CartPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid ${(props) => props.theme["base-button"]};
  padding-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }

  .total {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const BtnConfirm = styled(Button)`
  background: ${(props) => props.theme["brand-yellow"]};
  color: ${(props) => props.theme["base-white"]};
  font-weight: 400;
  font-size: 0.875rem;
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme["brand-yellow-dark"]};
  }
`;
