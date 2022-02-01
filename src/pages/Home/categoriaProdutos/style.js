import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const WrapperPrincipalHome = styled((props) => <Grid container {...props} />)(
  (props) => ({
    margin: "2rem 0",
    flexDirection: props.ladodireito ? "row-reverse" : "row",
  }),
);

const WrapperImgHome = styled((props) => <Grid item md={3} {...props} />)(
  (props) => ({
    "@media screen and (min-width: 1100px)": {
      display: "block",
    },
    display: "none",
  }),
);

const ImgCategoriasHome = styled((props) => <img alt={props.alt} {...props} />)(
  (props) => ({
    width: "250px",
    position: "absolute",
    left: props.ladodireito ? "" : "-10px",
    right: props.ladodireito ? "-10px" : "",
  }),
);

const WrapperProdutosHome = styled((props) => (
  <Grid item bplistaprodutosmobile={12} bplistaprodutos={9} {...props} />
))((props) => ({
  gap: "2.5rem",
}));

const HeaderProdutosHome = styled((props) => <Box {...props} />)((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem",
  gap: "1rem",
}));

const WrapperCardProdutoHome = styled((props) => <Grid container {...props} />)(
  (props) => ({
    gap: "1rem",
    "@media screen and (max-width: 850px)": {
      justifyContent: "center",
    },
    justifyContent: "space-between",
  }),
);

export {
  WrapperPrincipalHome,
  ImgCategoriasHome,
  WrapperImgHome,
  WrapperProdutosHome,
  HeaderProdutosHome,
  WrapperCardProdutoHome,
};
