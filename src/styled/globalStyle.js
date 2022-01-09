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
});

const InputGlobalStyle = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: "#eceff1",
        fontFamily: "Sen, Helvetica, Sans-serif",
      },
      img: { maxWidth: "100%" },
      "*": { margin: "0", padding: "0", textDecoration: "none" },
    }}
  />
);
export { InputGlobalStyle };

export default theme;
