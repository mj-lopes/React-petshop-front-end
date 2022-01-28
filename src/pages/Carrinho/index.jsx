import { useState } from "react";
import { useSelector } from "react-redux";

import { Container, Divider, Grid, List } from "@mui/material";
import { Subtitulo, Titulo } from "../../components";

import CupomForm from "./CupomForm";
import ProdutoCarrinho from "./ProdutoCarrinho";
import ResumoCompra from "./ResumoCompra";
import Vazio from "./Vazio";
import { SAVE_NEW_PURCHASE } from "../../api/endPoints";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  const comprador = useSelector((store) => store.usuario?.data);
  const [cupom, setCupom] = useState("");
  const [temDesconto, setTemDesconto] = useState(false);

  function handleSubmitCupom(e) {
    e.preventDefault();
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
    await fetch(url, options);
  }

  const Layout = () => (
    <Grid container gap={2} my={4} flexWrap={"wrap-reverse"}>
      <Grid
        item
        flex={"10 1 400px"}
        sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
        padding={2}
      >
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
        <CupomForm
          cupom={cupom}
          setCupom={setCupom}
          handleSubmitCupom={handleSubmitCupom}
        />
      </Grid>
      <ResumoCompra
        desconto={temDesconto}
        listaProdutos={listaProdutos}
        handleFinalizarCompra={() => handleFinalizarCompra()}
      />
    </Grid>
  );

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      {listaProdutos.length !== 0 ? <Layout /> : <Vazio />}
    </Container>
  );
};

export default Carrinho;
