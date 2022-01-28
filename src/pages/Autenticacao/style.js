import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const WrapperImgAutenticacao = styled((props) => (
  <Grid item md={6} {...props} />
))((props) => ({
  marginBottom: "-7px",

  "@media screen and (max-width: 900px)": {
    display: "none",
  },
  display: "auto",
}));

const WrapperConteudoAutenticacao = styled((props) => (
  <Grid item md={4} {...props} />
))((props) => ({
  alignSelf: "center",
  margin: "1rem",
}));

export { WrapperImgAutenticacao, WrapperConteudoAutenticacao };
