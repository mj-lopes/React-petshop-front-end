import { useState } from "react";
import { useSelector } from "react-redux";

import { Container, Divider, Grid, List } from "@mui/material";
import { Subtitulo, Titulo } from "../../components";

import CupomForm from "./CupomForm";
import ProdutoCarrinho from "./ProdutoCarrinho";
import ResumoCompra from "./ResumoCompra";
import Vazio from "./Vazio";
import { SAVE_NEW_PURCHASE } from "../../api/endPoints";
import {
  ContainerListaProdutosCarrinho,
  WrapperListaProdutosCarrinho,
} from "./style";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  const comprador = useSelector((store) => store.usuario?.data);
  const [temDesconto, setTemDesconto] = useState(false);
  const navigate = useNavigate();

  function handleSubmitCupom(cupom) {
    cupom.toLocaleLowerCase() === "react10"
      ? setTemDesconto(true)
      : setTemDesconto(false);
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

    const { url, options } = SAVE_NEW_PURCHASE(bodyRequest);
    const r = await fetch(url, options);
    if (r.ok) navigate("/conta");
  }

  const Layout = () => (
    <ContainerListaProdutosCarrinho>
      <WrapperListaProdutosCarrinho>
        <Subtitulo my={1}>Produtos</Subtitulo>

        <List>
          {listaProdutos.map((item) => {
            return (
              <>
                <Divider variant="middle" flexItem />
                <ProdutoCarrinho
                  key={item.uuid}
                  dadosProduto={item.produto}
                  quantidade={item.quantidade}
                />
              </>
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
      />
    </ContainerListaProdutosCarrinho>
  );

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      {listaProdutos.length !== 0 ? <Layout /> : <Vazio />}
    </Container>
  );
};

export default Carrinho;
