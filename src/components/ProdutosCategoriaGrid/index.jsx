import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const ProdutosCategoriaGrid = styled((props) => <Grid container {...props} />)(
  (props) => ({
    gap: "2.5rem",
    justifyContent: "space-around",
  }),
);

export default ProdutosCategoriaGrid;
