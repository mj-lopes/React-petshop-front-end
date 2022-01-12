import { Grid, useMediaQuery } from "@mui/material";

const MainGrid = ({ ladoDireito, children }) => {
  return (
    <Grid
      container
      flexDirection={ladoDireito ? "row-reverse" : "row"}
      marginY={4}
    >
      {children}
    </Grid>
  );
};

const ImgGridContainer = ({ children }) => {
  return (
    <Grid
      item
      md={3}
      display={useMediaQuery("(min-width: 1100px)") ? "block" : "none"}
    >
      {children}
    </Grid>
  );
};

export { MainGrid, ImgGridContainer };
