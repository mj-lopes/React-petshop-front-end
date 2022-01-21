import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router";
import { CardProduto, Titulo } from "../../components";
import { GET_PRODUCTS_FROM_CATEGORY } from "../../api/endPoints";

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
      const { url, options } = GET_PRODUCTS_FROM_CATEGORY(categoria);
      const data = await fetch(url, options).then((response) =>
        response.json(),
      );

      setData(data);
      console.log(data);
    }
    fetchProdutos();
  }, [categoria]);

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Titulo>{tituloCategoria(categoria)}</Titulo>
      <Grid container justifyContent={"space-around"} gap={5} marginBottom={6}>
        {data.map((produto) => (
          <Grid item>
            <CardProduto dados={produto} key={`produto - ${produto.uuid}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListaProdutosCategoria;
