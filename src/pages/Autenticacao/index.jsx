import { Grid, useMediaQuery } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ImgLogin from "../../asserts/login-bg.png";
import Login from "./Login";
import Cadastro from "./Cadastro";
import { useSelector } from "react-redux";

const Autenticacao = () => {
  const userData = useSelector(({ usuario }) => usuario?.data);
  const mobile = useMediaQuery("(max-width: 900px)");

  if (userData) return <Navigate to="/conta" replace={true} />;
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
