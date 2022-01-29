import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const ProdutoResumoWrapper = styled((props) => <Grid item {...props} />)(
  (props) => ({
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
  }),
);

export { ProdutoResumoWrapper };
