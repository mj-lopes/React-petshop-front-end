import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Botao, Subtitulo, Texto, Titulo, Input } from "../../components";
import ProdutoCarrinho from "./produtoCarrinho";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  const wrap = useMediaQuery("(max-width: 830px)");
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(false);

  function converterParaStringPreco(num, taxaPrazo = 1) {
    let valor = num * taxaPrazo;
    valor *= desconto ? 0.9 : 1;
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function pegarOPrecoDeTodosProdutos() {
    let preco = 0;
    for (const item of listaProdutos) {
      preco += item.quantidade * item.produto.preco;
    }
    return preco;
  }

  function handleSubmitCupom(e) {
    e.preventDefault();
    cupom.toLocaleLowerCase() === "react10"
      ? setDesconto(true)
      : setDesconto(false);
  }

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
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

          <form
            style={{
              display: "flex",
              alignContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
            onSubmit={(e) => handleSubmitCupom(e)}
          >
            <Input
              variant={"outlined"}
              value={cupom}
              onChange={({ target }) => setCupom(target.value)}
              label="Ensira o código do cupom"
              sx={{ flex: "1 1 300px", borderRadius: "0" }}
            />
            <Botao
              branco="y"
              variant="outlined"
              sx={{ flex: "1", maxWidth: "100px" }}
              type="submit"
            >
              Aplicar
            </Botao>
          </form>
        </Grid>

        <Grid
          item
          sx={{
            backgroundColor: "white",
            borderRadius: "6px",
            position: wrap ? "static" : "sticky",
            top: "36px",
          }}
          padding={2}
          flex={"1 1 350px"}
          alignSelf={"flex-end"}
          maxHeight={350}
        >
          <Subtitulo>Resumo</Subtitulo>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={"0px 8px"}
            marginTop={4}
          >
            <Texto fontSize={"14px"}>Valor dos Produtos:</Texto>
            <Texto fontWeight={"bold"}>
              {converterParaStringPreco(pegarOPrecoDeTodosProdutos())}
            </Texto>
          </Box>
          <Divider flexItem sx={{ my: 1 }} />

          <Box
            sx={{ backgroundColor: "#FAFAFB", padding: "8px" }}
            marginBottom={4}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Texto fontSize={"14px"}>Total à prazo:</Texto>
              <Texto fontWeight={"bold"}>
                {converterParaStringPreco(pegarOPrecoDeTodosProdutos(), 1.2)}
              </Texto>
            </Box>

            <Texto fontSize={"14px"} textAlign="center">
              (em até 3x de{" "}
              {converterParaStringPreco(pegarOPrecoDeTodosProdutos() / 3, 1.2)})
            </Texto>
          </Box>

          <Botao amarelo="y" sx={{ width: "100%", marginBottom: "1rem" }}>
            Continuar comprando
          </Botao>
          <Botao variant="outlined" branco="y" sx={{ width: "100%" }}>
            Ir para o Pagamento
          </Botao>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carrinho;
