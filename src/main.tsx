import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RootState, store } from "./store/store.ts";
import { Provider, useSelector } from "react-redux";
import GlobalStyle from "./theme/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme.ts";

const ThemedApp = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </StrictMode>,
);
