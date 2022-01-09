import { Link } from "react-router-dom";
import {
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { FieldSearch, LoginText } from "./style";
import Marca from "../../asserts/marca.svg";
import { ReactComponent as UserLogin } from "../../asserts/userlogin.svg";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#EEBB00" }}>
      <Container maxWidth={"lg"} sx={{ py: 2 }}>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item sm={3}>
            <Link to="/">
              <img src={Marca} alt="Logomarca da React Dogs" height={"64px"} />
            </Link>
          </Grid>
          <Grid item sm={6}>
            <form>
              <FieldSearch
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton type="submit">
                        <SearchRoundedIcon color="secondary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid>
          <Grid item sm={3} display={"flex"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"} marginRight={3}>
              <UserLogin />
              <LoginText>
                Bem-vindo! Entre ou <br />
                Crie uma Conta
              </LoginText>
            </Box>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
