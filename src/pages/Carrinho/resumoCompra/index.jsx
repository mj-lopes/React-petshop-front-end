import { Box, Divider, Grid, useMediaQuery } from "@mui/material";
import { Botao, Subtitulo, Texto } from "../../../components";

const ResumoCompra = ({ desconto, listaProdutos, handleFinalizarCompra }) => {
  const wrap = useMediaQuery("(max-width: 830px)");

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

  return (
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

      <Box sx={{ backgroundColor: "#FAFAFB", padding: "8px" }} marginBottom={4}>
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
      <Botao
        variant="outlined"
        branco="y"
        sx={{ width: "100%" }}
        onClick={handleFinalizarCompra}
      >
        Ir para o Pagamento
      </Botao>
    </Grid>
  );
};

export default ResumoCompra;
