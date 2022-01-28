import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Cadastro from "./Cadastro";
import Login from "./Login";

import { WrapperConteudoAutenticacao, WrapperImgAutenticacao } from "./style";
import { Grid } from "@mui/material";
import ImgLogin from "../../asserts/login-bg.png";

const Autenticacao = () => {
  const userData = useSelector(({ usuario }) => usuario?.data);

  if (userData) return <Navigate to="/conta" replace={true} />;
  return (
    <Grid container gap={3}>
      <WrapperImgAutenticacao>
        <img src={ImgLogin} alt="Cãe e gato juntos" />
      </WrapperImgAutenticacao>
      <WrapperConteudoAutenticacao>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </WrapperConteudoAutenticacao>
    </Grid>
  );
};

export default Autenticacao;
