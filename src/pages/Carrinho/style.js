import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const ContainerListaProdutosCarrinho = styled((props) => (
  <Grid container {...props} />
))((props) => ({
  gap: "1rem",
  margin: "2rem 0",
  flexWrap: "wrap-reverse",
}));

const WrapperListaProdutosCarrinho = styled((props) => (
  <Grid item {...props} />
))((props) => ({
  flex: "10 1 400px",
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "1rem",
}));

export { ContainerListaProdutosCarrinho, WrapperListaProdutosCarrinho };
