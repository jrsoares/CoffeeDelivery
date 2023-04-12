import styled from "styled-components";

export const Counter = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 0.625rem;
  gap: 4px;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    border: 0;
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
