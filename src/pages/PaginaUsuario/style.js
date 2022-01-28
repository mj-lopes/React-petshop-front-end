import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const WrapperCompra = styled((props) => <Paper elevation={2} {...props} />)(
  (props) => ({
    margin: "2rem 0",
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    gap: ".5rem",
  }),
);

const CompraSpanSubtitulo = styled((props) => <span {...props} />)(() => ({
  fontWeight: "Bold",
  color: "#333",
  fontFamily: "Sen",
}));

const CompraSubtitulo = styled((props) => <span {...props} />)(() => ({
  flex: "1 1 200px",
}));

export { WrapperCompra, CompraSpanSubtitulo, CompraSubtitulo };
