import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
