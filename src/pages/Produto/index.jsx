import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduto } from "../../store/carrinho";

import { GET_PRODUCT_DATA } from "../../api/endPoints";

import ProdutoAvaliacao from "./ProdutoAvaliacao";
import Comentarios from "./ProdutoComentarios";
import ProdutoDescricaoCompleta from "./ProdutoDescricao";
import ProdutoImg from "./ProdutoImg";
import ProdutoResumo from "./ProdutoResumo";

import { Container, Divider, Grid, useMediaQuery } from "@mui/material";
import { Loading, Alerta } from "../../components";
import { ProdutoResumoWrapper } from "./style";
import PegadasBG from "../../asserts/paw-bg.png";

const Produto = () => {
  const { uuid } = useParams();
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertaCompraAdd, setAlertaCompraAdd] = useState("");

  const mobile = useMediaQuery("(max-width: 700px)");
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchDados() {
      setLoading(true);
      const { url, options } = GET_PRODUCT_DATA(uuid);
      const dados = await fetch(url, options).then((resp) => resp.json());
      setDados(dados);

      setLoading(false);
    }
    fetchDados();
  }, [uuid]);

  function handleClickCarrinho() {
    if (alertaCompraAdd) {
      setAlertaCompraAdd("");
      setTimeout(() => {
        setAlertaCompraAdd("Produto adicionado ao carrinho");
      }, 400);
    } else {
      setAlertaCompraAdd("Produto adicionado ao carrinho");
    }

    dispatch(addProduto(dados.uuid));
  }

  if (loading) return <Loading />;

  return (
    <Container sx={{ my: 6 }}>
      <Grid container gap={5}>
        <Grid container item flex={"1"}>
          <Grid container item gap={2}>
            <Grid item sm={4}>
              <ProdutoImg imgUrl={dados.imgurl} nomeProduto={dados.nome} />
            </Grid>
            <ProdutoResumoWrapper>
              <ProdutoResumo
                addAoCarrinho={() => handleClickCarrinho()}
                produtoInfo={dados}
              />
            </ProdutoResumoWrapper>
          </Grid>

          <Divider sx={{ width: "100%", my: 6 }} component={"div"} />

          <ProdutoDescricaoCompleta />

          <ProdutoAvaliacao mobile={`${mobile}`} />

          <Comentarios />
        </Grid>

        <Grid item alignSelf={"center"} display={mobile ? "none" : "block"}>
          <img
            src={PegadasBG}
            alt="Patas de animal ao fundo da tela"
            width={150}
          />
        </Grid>
      </Grid>

      <Alerta mensagem={alertaCompraAdd} tipo="success" />
    </Container>
  );
};

export default Produto;
