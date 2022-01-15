import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { CardProduto, Botao } from "../../../components";

const CategoriaProdutos = ({
  ladoDireito,
  imgLateral,
  imgAlt,
  tituloSessao,
  categoria,
}) => {
  return (
    <Grid
      container
      flexDirection={ladoDireito ? "row-reverse" : "row"}
      marginY={4}
    >
      <Grid
        item
        md={3}
        display={useMediaQuery("(min-width: 1100px)") ? "block" : "none"}
      >
        <img
          src={imgLateral}
          width={"250px"}
          alt={imgAlt}
          style={{
            position: "absolute",
            left: ladoDireito ? "" : "-10px",
            right: ladoDireito ? "-10px" : "",
          }}
        />
      </Grid>
      <Grid item bplistaprodutosmobile={12} bplistaprodutos={9}>
        <Box display={"flex"} justifyContent={"space-between"} marginY={2}>
          <h3>{tituloSessao}</h3>
          <Botao variant="contained" borda="#FFC100">
            <Link to={`/produtos/${categoria}`}>Veja todos</Link>
          </Botao>
        </Box>
        <Grid
          container
          justifyContent={
            useMediaQuery("(max-width: 785px)") ? "center" : "space-between"
          }
          gap={2}
        >
          <Grid item>
            <CardProduto />
          </Grid>
          <Grid item>
            <CardProduto />
          </Grid>
          <Grid item>
            <CardProduto />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoriaProdutos;
