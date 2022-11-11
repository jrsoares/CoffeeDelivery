import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 160px;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme["brand-yellow-dark"]};
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  width: 32.875rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 32px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1))
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 22.125rem;
  gap: 0.75rem;
`;

const ICON_COLORS = {
  pin: "brand-purple",
  timer: "brand-yellow",
  currency: "brand-yellow-dark",
} as const;

interface ItemsProps {
  icon: keyof typeof ICON_COLORS;
}

export const Icon = styled.div<ItemsProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 1000px;
  background: ${(props) => props.theme[ICON_COLORS[props.icon]]};

  svg {
    color: ${(props) => props.theme["base--background"]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 6.375rem;
`;
