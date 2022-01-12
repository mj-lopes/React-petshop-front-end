import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Product from "../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";

const CardProduto = () => {
  return (
    <Card sx={{ width: "230px" }} raised>
      <CardHeader action={"☆4.9"} />
      <CardMedia
        component={"img"}
        image={Product}
        sx={{ width: "50%", margin: "auto" }}
      />
      <CardContent>
        <Typography paragraph textAlign={"center"} fontWeight={"bold"}>
          Ração asdasd
        </Typography>
        <Typography paragraph>
          R$ 99,99 ou
          <br />
          <sub>até 3x de R$ 35,99</sub>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardProduto;
