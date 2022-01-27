import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS_FROM_SEARCH } from "../../api/endPoints";
import { CardProduto, Titulo } from "../../components";

const BuscaPorQuery = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = GET_PRODUCTS_FROM_SEARCH(query);
      const data = await fetch(url, options).then((response) =>
        response.json(),
      );

      setData(data);
    }
    fetchProdutos();
  }, [query]);

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Titulo>{`Busca: '${query}'`}</Titulo>
      <Grid container justifyContent={"space-around"} gap={3}>
        {data.map((produto) => (
          <Grid item>
            <CardProduto dados={produto} key={`produto - ${produto.uuid}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BuscaPorQuery;
