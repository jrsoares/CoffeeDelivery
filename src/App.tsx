import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
