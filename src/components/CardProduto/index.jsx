import { CardContent, CardHeader, Typography } from "@mui/material";
import Product from "../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";
import {
  WrapperCartao,
  PrecoAVista,
  PrecoParcelado,
  CardImg,
} from "./style.js";

const CardProduto = () => {
  return (
    <WrapperCartao raised>
      <CardHeader action={"☆4.9"} sx={{ margin: "0" }} />
      <CardImg image={Product} component={"img"} />
      <CardContent>
        <Typography paragraph textAlign={"center"} fontFamily={"Sen"}>
          Ração asdasd
        </Typography>
        <PrecoAVista paragraph>
          R$ 99,99 <span>ou</span>
          <br />
          <PrecoParcelado>até 3x de R$ 35,99</PrecoParcelado>
        </PrecoAVista>
      </CardContent>
    </WrapperCartao>
  );
};

export default CardProduto;
