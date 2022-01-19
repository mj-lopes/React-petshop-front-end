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
    <WrapperCartao raised>
      <Link to="/produtos/cachorro">
        <CardActionArea>
          <CardHeader action={"☆4.9"} sx={{ margin: "0px" }} />
          <CardImg image={imgurl || Product} component={"img"} />
          <CardContent>
            <Typography paragraph textAlign={"center"} fontFamily={"Sen"}>
              {nome}
            </Typography>
            <PrecoAVista paragraph>
              {precoVenda} <span>ou</span>
              <br />
              <PrecoParcelado>até 3x de {precoParcelado}</PrecoParcelado>
            </PrecoAVista>
          </CardContent>
        </CardActionArea>
      </Link>
    </WrapperCartao>
  );
};

export default CardProduto;
