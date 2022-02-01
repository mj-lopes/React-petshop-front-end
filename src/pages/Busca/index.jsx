import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS_FROM_SEARCH } from "../../api/endPoints";

import { Grid } from "@mui/material";
import {
  CardProduto,
  ProdutosCategoriaGrid,
  ProdutosCategoriaWrapper,
  Titulo,
} from "../../components";

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
      <ProdutosCategoriaGrid>
        {data.map((produto) => (
          <Grid item key={`produto - ${produto.uuid}`}>
            <CardProduto dados={produto} />
          </Grid>
        ))}
      </ProdutosCategoriaGrid>
    </ProdutosCategoriaWrapper>
  );
};

export default BuscaPorQuery;
