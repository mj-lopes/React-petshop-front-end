import { Box, Container, Grid } from "@mui/material";
import Entrega from "../../../asserts/entrega.svg";
import Cartao from "../../../asserts/cartao.svg";
import Rapido from "../../../asserts/rapido.svg";
import Suporte from "../../../asserts/suporte.svg";

const Qualidade = (img, texto, sub) => {
  return (
    <Grid item md={3} sm={6} xs={12} paddingY={1}>
      <Grid container gap={1} direction={"column"} alignItems={"center"}>
        <img src={img} alt={texto}></img>
        <Box>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            {texto} <br />
            <sub style={{ fontWeight: "normal" }}>{sub}</sub>
          </p>
        </Box>
      </Grid>
    </Grid>
  );
};

const Qualidades = () => {
  return (
    <Container>
      <Grid
        container
        style={{
          backgroundColor: "#FFC100",
          marginTop: "-70px",
          padding: "50px 0 20px 0",
          borderRadius: "50px",
        }}
      >
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
      </Grid>
    </Container>
  );
};

export default Qualidades;
