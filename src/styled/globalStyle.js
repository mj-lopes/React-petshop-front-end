import { createTheme, GlobalStyles } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc100",
    },
    secondary: {
      main: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      bplistaprodutosmobile: 700,
      md: 900,
      bplistaprodutos: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

const InputGlobalStyle = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: "#f4f5f6",
        fontFamily: "Sen, Helvetica, Sans-serif",
        overflowX: "hidden",
      },
      img: { maxWidth: "100%" },
      "*": { margin: "0px", padding: "0px" },
      a: { textDecoration: "none", color: "#333" },
      div: { margin: "0px", padding: "0px" },
    }}
  />
);
export { InputGlobalStyle };

export default theme;
