import styled from "styled-components";

export const Intro = styled.div`
  height: 544px;
  display: flex;
  padding: 0 10rem;
  margin-top: 5.875rem;
  justify-content: space-between;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const Title = styled.div`
  width: 36.75rem;
  margin-bottom: 4.125rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }
  small {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 231px 1fr;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  list-style: none;
  width: 35.5rem;
`;

const ICON_COLORS = {
  shopping: "brand-yellow-dark",
  package: "base-text",
  timer: "brand-yellow",
  coffee: "brand-purple",
} as const;

interface ItemsProps {
  icon: keyof typeof ICON_COLORS;
}

export const Item = styled.li<ItemsProps>`
  display: flex;
  align-items: center;

  font-weight: 400;

  small {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme[ICON_COLORS[props.icon]]};

    svg {
      color: ${(props) => props.theme["base--background"]};
    }
  }
`;
