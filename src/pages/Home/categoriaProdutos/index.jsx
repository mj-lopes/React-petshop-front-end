import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCTS_FROM_CATEGORY } from "../../../api/endPoints";
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
          {dados.map((item) => (
            <Grid item key={`item ${item.uuid}`}>
              <CardProduto dados={item} />
            </Grid>
          ))}
        </WrapperCardProdutoHome>
      </WrapperProdutosHome>
    </WrapperPrincipalHome>
  );
};

export default CategoriaProdutos;
