import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme, { InputGlobalStyle } from "./styled/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      {InputGlobalStyle}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
