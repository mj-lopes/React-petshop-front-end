import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { GET_PRODUCTS_FROM_CATEGORY } from "../../api/endPoints";

import { Grid, Skeleton } from "@mui/material";
import {
  CardProduto,
  ProdutosCategoriaGrid,
  ProdutosCategoriaWrapper,
  Titulo,
} from "../../components";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = GET_PRODUCTS_FROM_CATEGORY(categoria);
      const data = await fetch(url, options).then((response) =>
        response.json(),
      );

      setData(data);
    }
    fetchProdutos();
  }, [categoria]);

  const ProdutosLayout = () => {
    return data ? (
      data.map((item) => (
        <Grid item key={`item ${item.uuid}`}>
          <CardProduto dados={item} />
        </Grid>
      ))
    ) : (
      <>
        <Skeleton width={250} height={340} variant="rectangular" />
        <Skeleton width={250} height={340} variant="rectangular" />
        <Skeleton width={250} height={340} variant="rectangular" />
      </>
    );
  };

  return (
    <ProdutosCategoriaWrapper>
      <Titulo>{tituloCategoria(categoria)}</Titulo>
      <ProdutosCategoriaGrid>
        <ProdutosLayout />
      </ProdutosCategoriaGrid>
    </ProdutosCategoriaWrapper>
  );
};

export default ListaProdutosCategoria;
