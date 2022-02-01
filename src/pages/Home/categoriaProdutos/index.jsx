import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GET_PRODUCTS_FROM_CATEGORY } from "../../../api/endPoints";

import { Grid, Skeleton } from "@mui/material";
import { Botao, CardProduto } from "../../../components";
import {
  HeaderProdutosHome,
  ImgCategoriasHome,
  WrapperCardProdutoHome,
  WrapperImgHome,
  WrapperPrincipalHome,
  WrapperProdutosHome,
} from "./style";

const CategoriaProdutos = ({
  ladoDireito,
  imgLateral,
  imgAlt,
  tituloSessao,
  categoria,
}) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchDados() {
      const { url, options } = GET_PRODUCTS_FROM_CATEGORY(categoria);
      const dados = await fetch(url, options).then((resp) => resp.json());
      setDados(dados.slice(0, 3));
    }
    fetchDados();
  }, [categoria]);

  const ProdutosLayout = () => {
    return dados ? (
      dados.map((item) => (
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
    <WrapperPrincipalHome ladodireito={ladoDireito}>
      <WrapperImgHome>
        <ImgCategoriasHome
          src={imgLateral}
          alt={imgAlt}
          ladodireito={ladoDireito}
        />
      </WrapperImgHome>

      <WrapperProdutosHome>
        <HeaderProdutosHome>
          <h3>{tituloSessao}</h3>
          <Botao variant="contained" branco="y">
            <Link to={`/produtos/${categoria}`}>Veja todos</Link>
          </Botao>
        </HeaderProdutosHome>
        <WrapperCardProdutoHome>
          <ProdutosLayout />
        </WrapperCardProdutoHome>
      </WrapperProdutosHome>
    </WrapperPrincipalHome>
  );
};

export default CategoriaProdutos;
