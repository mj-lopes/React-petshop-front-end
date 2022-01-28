import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";

const ContainerBusca = styled((props) => <Container {...props} />)((props) => ({
  minHeight: "100vh",
  marginBottom: "6rem",
}));

const GridProdutos = styled((props) => <Grid container {...props} />)(
  (props) => ({
    gap: "1.5rem",
    justifyContent: "space-around",
  }),
);

export { ContainerBusca, GridProdutos };
