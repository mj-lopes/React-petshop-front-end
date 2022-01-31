import { Box, Container, Grid } from "@mui/material";
import Entrega from "../../../asserts/entrega.svg";
import Cartao from "../../../asserts/cartao.svg";
import Rapido from "../../../asserts/rapido.svg";
import Suporte from "../../../asserts/suporte.svg";
import {
  QualidadeSubTexto,
  QualidadeTexto,
  WrapperQualidade,
  WrapperQualidades,
} from "./style";

const Qualidade = (img, texto, sub) => {
  return (
    <Grid item paddingY={1} flex={"1 1 150px"}>
      <WrapperQualidade>
        <img src={img} alt={texto}></img>
        <Box>
          <QualidadeTexto>
            {texto} <br />
            <QualidadeSubTexto>{sub}</QualidadeSubTexto>
          </QualidadeTexto>
        </Box>
      </WrapperQualidade>
    </Grid>
  );
};

const Qualidades = () => {
  return (
    <Container>
      <WrapperQualidades>
        {Qualidade(Entrega, "Frete Gratis", "*Sujeito à condições")}
        {Qualidade(Cartao, "Até 3x sem juros", "*Compras acima de R$ 150")}
        {Qualidade(
          Rapido,
          "Retire em lojas parceiras",
          "Consulte a disponibilidade",
        )}
        {Qualidade(
          Suporte,
          "Atendimento por WhatsApp",
          "Seg. à sexta - 08hrs às 18hrs",
        )}
      </WrapperQualidades>
    </Container>
  );
};

export default Qualidades;
