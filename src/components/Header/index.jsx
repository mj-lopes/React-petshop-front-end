import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

import { Botao, NavagacaoCategoria } from "..";
import { FieldSearch, LoginText } from "./style";

import {
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  useMediaQuery,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ReactComponent as UserLogin } from "../../asserts/userlogin.svg";
import Marca from "../../asserts/marca.svg";

const Header = () => {
  const mediaMobile = useMediaQuery("(max-width: 768px)");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigator = useNavigate();
  const user = useSelector(({ usuario }) => usuario?.data);
  const quantidadeProdutos = useSelector(
    ({ carrinho }) => carrinho.listaProdutos.length,
  );

  function closeMenuMobile(event) {
    event.stopPropagation();
    setMenuIsOpen(false);
  }

  function openMenuMobile(event) {
    event.stopPropagation();
    setMenuIsOpen(true);
  }

  const validationSchema = yup.object({
    query: yup
      .string("Escreva um valor chave para a pesquisa")
      .required("Escreva termos chaves para a pesquisa"),
  });

  const formik = useFormik({
    initialValues: { query: "" },
    validationSchema: validationSchema,
    onSubmit: ({ query }) => {
      navigator(`../busca/${query}`);
    },
  });

  const campoPesquisa = (mobile = "") => (
    <form onSubmit={formik.handleSubmit}>
      <FieldSearch
        fullWidth
        mobile={mobile}
        value={formik.values.query}
        onChange={({ target }) => formik.setValues({ query: target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" onClick={closeMenuMobile}>
                <SearchRoundedIcon color={mobile ? "primary" : "secondary"} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );

  const marca = () => (
    <Grid item sm={3}>
      <Link to="/">
        <h1 style={{ lineHeight: 1 }}>
          <img src={Marca} alt="Logomarca da React Dogs" height={"64px"} />
        </h1>
      </Link>
    </Grid>
  );

  const carrinho = (mobile) => (
    <Badge
      badgeContent={quantidadeProdutos}
      color={mobile ? "primary" : "secondary"}
      onClick={closeMenuMobile}
    >
      <Link to="/carrinho">
        <ShoppingCartOutlinedIcon sx={{ color: "#333" }} />
      </Link>
    </Badge>
  );

  const contaUsuario = () => {
    return (
      <>
        <UserLogin />
        <LoginText onClick={closeMenuMobile}>
          {user ? (
            <Link to="/conta">Olá, {user?.nome}</Link>
          ) : (
            <Link to="/login">
              Bem-vindo! Entre ou <br />
              Crie uma Conta
            </Link>
          )}
        </LoginText>
      </>
    );
  };

  if (mediaMobile) {
    return (
      <header style={{ backgroundColor: "#EEBB00" }}>
        <Container maxWidth={"lg"} sx={{ py: 2 }}>
          <Grid
            container
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
          >
            {marca()}
            <Grid item>
              <Botao variant="contained" onClick={openMenuMobile}>
                <MenuOutlinedIcon />
              </Botao>
            </Grid>
          </Grid>

          <Drawer open={menuIsOpen} anchor="right" onClose={closeMenuMobile}>
            <Stack sx={{ width: "250px", margin: 1 }} gap={1}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                {contaUsuario()}
                {carrinho("mobile")}
              </Box>
              {campoPesquisa("mobile")}
              <Divider sx={{ my: 1 }} />
              <NavagacaoCategoria mobile onClick={closeMenuMobile} />
            </Stack>
          </Drawer>
        </Container>
      </header>
    );
  }
  return (
    <header style={{ backgroundColor: "#EEBB00" }}>
      <Container maxWidth={"lg"} sx={{ py: 2 }}>
        <Grid container alignItems={"center"} spacing={2}>
          {marca()}
          <Grid item sm={6}>
            {campoPesquisa()}
          </Grid>
          <Grid item sm={3} display={"flex"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"} marginRight={3}>
              {contaUsuario()}
            </Box>
            {carrinho()}
          </Grid>
        </Grid>
      </Container>
      <NavagacaoCategoria />
    </header>
  );
};

export default Header;
