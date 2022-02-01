import { useNavigate } from "react-router-dom";

import { Box, Divider, useMediaQuery } from "@mui/material";
import { Botao, Subtitulo, Texto } from "../../../components";
import {
  GridItemResumoCompra,
  WrapperValorAPrazoResumoCompra,
  WrapperValorResumoCompra,
} from "./style";

const ResumoCompra = ({
  desconto,
  listaProdutos,
  handleFinalizarCompra,
  loading,
}) => {
  const wrap = useMediaQuery("(max-width: 830px)");
  const navigate = useNavigate();

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
    <GridItemResumoCompra devequebrar={`${wrap}`}>
      <Subtitulo>Resumo</Subtitulo>
      <WrapperValorResumoCompra>
        <Texto fontSize={"14px"}>Valor dos Produtos:</Texto>
        <Texto fontWeight={"bold"}>
          {converterParaStringPreco(pegarOPrecoDeTodosProdutos())}
        </Texto>
      </WrapperValorResumoCompra>

      <Divider flexItem sx={{ my: 1 }} />

      <WrapperValorAPrazoResumoCompra>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Texto fontSize={"14px"}>Total à prazo:</Texto>
          <Texto fontWeight={"bold"}>
            {converterParaStringPreco(pegarOPrecoDeTodosProdutos(), 1.2)}
          </Texto>
        </Box>

        <Texto fontSize={"14px"} textAlign="center">
          (em até 3x de{" "}
          {converterParaStringPreco(pegarOPrecoDeTodosProdutos() / 3, 1.25)})
        </Texto>
      </WrapperValorAPrazoResumoCompra>

      <Botao
        amarelo="y"
        sx={{ width: "100%", marginBottom: "1rem" }}
        onClick={() => navigate("/")}
      >
        Continuar comprando
      </Botao>
      <Botao
        variant="outlined"
        branco="y"
        sx={{ width: "100%" }}
        onClick={handleFinalizarCompra}
        disabled={loading}
      >
        {loading ? "Finalizando..." : "Realizar o Pagamento"}
      </Botao>
    </GridItemResumoCompra>
  );
};

export default ResumoCompra;
