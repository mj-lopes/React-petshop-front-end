import {
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
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
      <Link to="/produtos/cachorro">
        <CardActionArea>
          <CardHeader action={"☆4.9"} sx={{ margin: "0px" }} />
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
        </CardActionArea>
      </Link>
    </WrapperCartao>
  );
};

export default CardProduto;
