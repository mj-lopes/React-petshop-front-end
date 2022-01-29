import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS_FROM_SEARCH } from "../../api/endPoints";
import {
  CardProduto,
  ProdutosCategoriaWrapper,
  Titulo,
} from "../../components";
import { ContainerBusca, GridProdutos } from "./style";

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
    <ProdutosCategoriaWrapper>
      <Titulo>{`Busca: '${query}'`}</Titulo>
      <ProdutosCategoriaWrapper>
        {data.map((produto) => (
          <Grid item>
            <CardProduto dados={produto} key={`produto - ${produto.uuid}`} />
          </Grid>
        ))}
      </ProdutosCategoriaWrapper>
    </ProdutosCategoriaWrapper>
  );
};

export default BuscaPorQuery;
