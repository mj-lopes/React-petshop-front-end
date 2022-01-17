import { Box, Grid, TextField } from "@mui/material";
import { Botao, Subtitulo, Titulo } from "../../components";
import ImgLogin from "../../asserts/login-bg.png";

const Login = () => {
  return (
    <Grid container>
      <Grid item style={{ position: "relative", left: "0" }} md={6}>
        <img src={ImgLogin} alt="Cãe e gato juntos" />
      </Grid>
      <Grid item md={4} alignSelf={"center"}>
        <Titulo>Login</Titulo>
        <form>
          <TextField label="Usuario" fullWidth sx={{ my: 1 }}></TextField>
          <TextField label="Senha" fullWidth sx={{ my: 1 }}></TextField>
          <Botao amarelo="y">Entrar</Botao>
        </form>

        <Box my={4}>
          <Subtitulo>Cadastre-se</Subtitulo>
          <p style={{ marginBottom: "1rem" }}>
            Ainda não possui conta? Cadastre-se, é seguro e gratuito.
          </p>
          <Botao branco="y">Cadastrar</Botao>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
