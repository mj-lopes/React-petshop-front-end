import { Box } from "@mui/material";
import { Botao, Subtitulo, Titulo } from "../../../components";
import Input from "../../../components/Input";

const Login = () => (
  <>
    <Titulo>Login</Titulo>
    <form>
      <Input label="Usuario" />
      <Input label="Senha" />
      <Botao amarelo="y">Entrar</Botao>
    </form>

    <Box my={4}>
      <Subtitulo>Cadastre-se</Subtitulo>
      <p style={{ marginBottom: "1rem" }}>
        Ainda não possui conta? Cadastre-se, é seguro e gratuito.
      </p>
      <Botao branco="y">Cadastrar</Botao>
    </Box>
  </>
);

export default Login;
