import styled from "@emotion/styled";
import { Container } from "@mui/material";

const ProdutosCategoriaWrapper = styled((props) => <Container {...props} />)(
  (props) => ({
    minHeight: "100vh",
    marginBottom: "6rem",
  }),
);

export default ProdutosCategoriaWrapper;
