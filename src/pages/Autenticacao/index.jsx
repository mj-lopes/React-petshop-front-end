import { Grid, useMediaQuery } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ImgLogin from "../../asserts/login-bg.png";
import Login from "./Login";
import Cadastro from "./Cadastro";

const Autenticacao = () => {
  const mobile = useMediaQuery("(max-width: 900px)");
  return (
    <Grid container gap={3}>
      <Grid
        item
        md={6}
        marginBottom={"-7px"}
        sx={{ display: mobile ? "none" : "auto" }}
      >
        <img src={ImgLogin} alt="Cãe e gato juntos" />
      </Grid>
      <Grid item md={4} alignSelf={"center"} margin={[1, 2]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Autenticacao;
