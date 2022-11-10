import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme["brand-yellow-dark"]};;

  }
  
  
body {
  font-family: 'Roboto', sans-serif;
  background: ${(props) => props.theme["base--background"]};

}
`;
