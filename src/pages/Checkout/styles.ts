import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem;
`;

export const CheckoutForm = styled.div`
  width: 40rem;
`;

export const Form = styled.form`
  margin-top: 15px;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    span {
      line-height: 130%;
      margin-bottom: 2px;
    }
  }
`;

export const Payment = styled.div``;
