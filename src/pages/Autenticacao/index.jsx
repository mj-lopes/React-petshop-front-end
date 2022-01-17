import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ImgLogin from "../../asserts/login-bg.png";
import Login from "./Login";
import Cadastro from "./Cadastro";

const Autenticacao = () => {
  return (
    <Grid container>
      <Grid item style={{ position: "relative", left: "0" }} md={6}>
        <img src={ImgLogin} alt="Cãe e gato juntos" />
      </Grid>
      <Grid item md={4} alignSelf={"center"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Autenticacao;
