import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const GridItemResumoCompra = styled((props) => <Grid item {...props} />)(
  (props) => ({
    padding: "1rem",
    flex: "1 1 350px",
    alignSelf: "flex-end",
    position: props.devequebrar ? "static" : "sticky",
    top: "36px",

    backgroundColor: "white",
    borderRadius: "6px",
  }),
);

const WrapperValorResumoCompra = styled((props) => <Box {...props} />)(
  (props) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "0 8px",
    marginTop: "2rem",
  }),
);

const WrapperValorAPrazoResumoCompra = styled((props) => <Box {...props} />)(
  (props) => ({
    backgroundColor: "#FAFAFB",
    padding: "8px",
    marginBottom: "2rem",
  }),
);

export {
  GridItemResumoCompra,
  WrapperValorResumoCompra,
  WrapperValorAPrazoResumoCompra,
};
