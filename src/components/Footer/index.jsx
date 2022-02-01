import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { ReactComponent as Visa } from "../../asserts/visa.svg";
import { ReactComponent as AmericanEx } from "../../asserts/americanexpress.svg";
import { ReactComponent as MasterCard } from "../../asserts/mastercard.svg";
import { ReactComponent as Boleto } from "../../asserts/boleto.svg";
import { ReactComponent as Marca } from "../../asserts/dogs.svg";

const Titilo = ({ children }) => {
  return (
    <Typography
      variant="h5"
      paragraph
      fontWeight={"bold"}
      color={"#333"}
      fontFamily={'Sen, Helvetica, "Sans-serif"'}
    >
      {children}
    </Typography>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FFC100" }}>
      <Container sx={{ padding: "3rem 1rem" }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Titilo>Endereço</Titilo>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Rua João e o pé de feijão, 368, bairro Quântico "
                  secondary="São Carlos, SP - CEP 13566-977"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Titilo>Contato</Titilo>
            <List dense={true}>
              <ListItem>
                <ListItemIcon>
                  <WhatsappOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="(99) 99999 9999" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalPhoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="(99) 99999 9999" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="react_petshopSP@gmail.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Titilo>Meios de pagamento</Titilo>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Visa />
              <MasterCard />
              <Boleto />
              <AmericanEx />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box display={"flex"} gap={2} padding={"0 0 1rem 1rem"}>
        <Marca />
        <Typography paragraph>
          Criado por: <span style={{ fontWeight: "bold" }}>Marcos Júnior</span>{" "}
          - Somente para fins pessoais
          <br /> Todas as imagens são de direito de seus respectivos autores
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
