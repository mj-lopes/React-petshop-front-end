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

const CardProduto = ({ dados }) => {
  const { uuid, imgurl, nome, preco } = dados;
  const precoVenda = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const precoParcelado = (preco / 3 + 3).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardActionArea>
      <WrapperCartao raised>
        <Link to={`/produto/${uuid}`}>
          <CardHeader action={"★4.9"} sx={{ margin: "0px" }} />
          <CardImg image={imgurl || Product} component={"img"} />
          <CardContent sx={{ position: "absolute", bottom: "0" }}>
            <Typography paragraph textAlign={"center"} fontFamily={"Sen"}>
              {nome}
            </Typography>
            <PrecoAVista paragraph>
              {precoVenda} <span>ou</span>
              <br />
              <PrecoParcelado>até 3x de {precoParcelado}</PrecoParcelado>
            </PrecoAVista>
          </CardContent>
        </Link>
      </WrapperCartao>
    </CardActionArea>
  );
};

export default CardProduto;
