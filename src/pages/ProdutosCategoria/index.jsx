import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router";
import { CardProduto, Titulo } from "../../components";

const tituloCategoria = (cat) => {
  switch (cat) {
    case "cachorro":
      return "Produtos caninos";
    case "gatos":
      return "Produtos felinos";
    case "outros":
      return "Produtos para animais diversos";
    case "acessorios_brinquedos":
      return "Brinquedos e acessórios";
    case "remedios":
      return "Remédios e tratamento";
    default:
      return "nulo";
  }
};

const ListaProdutosCategoria = () => {
  const { categoria } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch(
        `http://localhost:9090/products/${categoria}`,
      );
      const json = await response.json();
      setData(json);
    }
    fetchProdutos();
  }, [categoria]);

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Titulo>{tituloCategoria(categoria)}</Titulo>
      <Grid container justifyContent={"space-around"} gap={3}>
        <Grid item>
          <CardProduto />
        </Grid>
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
    </Container>
  );
};

export default ListaProdutosCategoria;
