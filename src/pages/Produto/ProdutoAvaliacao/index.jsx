import { Box } from "@mui/material";
import { Texto } from "../../../components";
import {
  GridAvaliacao,
  SpanRecomendacaoAvaliacao,
  TextoRecomendacaoAvaliacao,
} from "./style";

const ProdutoAvaliacao = ({ mobile }) => {
  return (
    <GridAvaliacao mobile={mobile}>
      <Box flexBasis={300} textAlign={"center"}>
        <p style={{ fontWeight: "bold" }}>Avaliação dos Clientes</p>
        <p style={{ fontSize: "3rem", lineHeight: 1.1 }}>4.9/5</p>
        <Texto>4 avaliações</Texto>
      </Box>
      <Box>
        <TextoRecomendacaoAvaliacao>
          <SpanRecomendacaoAvaliacao>100%</SpanRecomendacaoAvaliacao> dos
          clientes{" "}
          <SpanRecomendacaoAvaliacao>recomendam</SpanRecomendacaoAvaliacao> este
          produto
        </TextoRecomendacaoAvaliacao>
      </Box>
    </GridAvaliacao>
  );
};
export default ProdutoAvaliacao;
