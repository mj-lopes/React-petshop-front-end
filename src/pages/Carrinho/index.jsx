import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Divider, Grid, List } from "@mui/material";
import { Subtitulo, Titulo, Alerta } from "../../components";

import CupomForm from "./CupomForm";
import ProdutoCarrinho from "./ProdutoCarrinho";
import ResumoCompra from "./ResumoCompra";
import Vazio from "./Vazio";
import { SAVE_NEW_PURCHASE } from "../../api/endPoints";
import {
  ContainerListaProdutosCarrinho,
  WrapperListaProdutosCarrinho,
} from "./style";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";
import { limparCarrinho } from "../../store/carrinho";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  const comprador = useSelector((store) => store.usuario?.data);
  const [temDesconto, setTemDesconto] = useState(false);
  const [avisoCompra, setAvisoCompra] = useState("");
  const [avisoCupom, setAvisoCupom] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmitCupom(cupom) {
    if (cupom.toLocaleLowerCase() === "react10") {
      setAvisoCupom("Cupom aplicado!");
      setTemDesconto(true);
    } else {
      setTemDesconto(false);
    }
  }

  async function handleFinalizarCompra() {
    const bodyRequest = listaProdutos.map((item) => {
      return {
        uuid: item.uuid,
        quantidade: item.quantidade,
        preco: item.produto.preco,
      };
    });
    bodyRequest.unshift({ comprador: comprador.uuid });

    setLoading(true);

    const { url, options } = SAVE_NEW_PURCHASE(bodyRequest);
    const { ok } = await fetch(url, options);

    setLoading(false);

    if (ok) {
      setAvisoCompra("Compra realizada com sucesso!");
      setTimeout(() => {
        dispatch(limparCarrinho());
        navigate("/conta");
      }, 3000);
    }
  }

  const Layout = () => (
    <ContainerListaProdutosCarrinho>
      <WrapperListaProdutosCarrinho>
        <Subtitulo my={1}>Produtos</Subtitulo>

        <List>
          {listaProdutos.map((item) => {
            return (
              <Fragment key={item.uuid}>
                <Divider variant="middle" flexItem />
                <ProdutoCarrinho
                  dadosProduto={item.produto}
                  quantidade={item.quantidade}
                />
              </Fragment>
            );
          })}
        </List>
        <Subtitulo my={2}>Cupom</Subtitulo>

        <CupomForm onSubmit={(cupom) => handleSubmitCupom(cupom)} />
      </WrapperListaProdutosCarrinho>

      <ResumoCompra
        desconto={temDesconto}
        listaProdutos={listaProdutos}
        handleFinalizarCompra={() => handleFinalizarCompra()}
        loading={loading}
      />
    </ContainerListaProdutosCarrinho>
  );

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      {listaProdutos.length !== 0 ? <Layout /> : <Vazio />}
      <Alerta
        tipo={"success"}
        mensagem={avisoCompra}
        icone={<CheckCircleRoundedIcon />}
      />
      <Alerta
        tipo={"success"}
        mensagem={avisoCupom}
        icone={<CheckCircleRoundedIcon />}
      />
    </Container>
  );
};

export default Carrinho;
