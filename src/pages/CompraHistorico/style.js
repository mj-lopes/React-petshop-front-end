import styled from "@emotion/styled";
import { Box, Container, List, Typography } from "@mui/material";

const ContainerHCompra = styled((props) => <Container {...props} />)(
  (props) => ({
    padding: "1rem ",
  }),
);

const HeaderHCompra = styled((props) => <Box {...props} />)((props) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "2rem 0",
}));

const HeaderHCompraCard = styled((props) => <List elevation={5} {...props} />)(
  (props) => ({
    flex: "1 1 250px",
  }),
);

const ContainerValorTotalHCompra = styled((props) => <Box {...props} />)(
  (props) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
    margin: "2rem 0",
  }),
);

const Categoria = ({ texto }) => (
  <Typography fontWeight="bold" color={"black"} my={0} component={"span"}>
    {texto}
  </Typography>
);
const Informacao = ({ texto }) => (
  <Typography fontWeight="bold" color={"#333"} my={0} component={"span"}>
    {texto}
  </Typography>
);

export {
  ContainerHCompra,
  HeaderHCompra,
  HeaderHCompraCard,
  Categoria,
  Informacao,
  ContainerValorTotalHCompra,
};
