import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GET_PRODUCTS_FROM_CATEGORY } from "../../../api/endPoints";

import { Box, Grid, useMediaQuery } from "@mui/material";
import { CardProduto, Botao } from "../../../components";

const CategoriaProdutos = ({
  ladoDireito,
  imgLateral,
  imgAlt,
  tituloSessao,
  categoria,
}) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchDados() {
      const { url, options } = GET_PRODUCTS_FROM_CATEGORY(categoria);
      const dados = await fetch(url, options).then((resp) => resp.json());
      setDados(dados.slice(0, 3));
    }
    fetchDados();
  }, [categoria]);

  return (
    // grid principal
    <Grid
      container
      flexDirection={ladoDireito ? "row-reverse" : "row"}
      marginY={4}
    >
      {/* Grid Imagem */}
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
      {/* Grid produtos */}
      <Grid item bplistaprodutosmobile={12} bplistaprodutos={9}>
        <Box display={"flex"} justifyContent={"space-between"} marginY={2}>
          <h3>{tituloSessao}</h3>
          <Botao variant="contained" branco="y">
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
          {dados.map((item) => (
            <Grid item key={`item ${item.uuid}`}>
              <CardProduto dados={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoriaProdutos;
