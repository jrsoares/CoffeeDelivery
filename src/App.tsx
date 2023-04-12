import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
