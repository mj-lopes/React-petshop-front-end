import { Box } from "@mui/material";
import { Botao, Subtitulo, Titulo } from "../../../components";
import Input from "../../../components/Input";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      usuario: "",
      senha: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });

  return (
    <>
      <Titulo>Login</Titulo>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Usuario"
          id="usuario"
          name="usuario"
          value={formik.values.usuario}
          onChange={formik.handleChange}
        />
        <Input
          label="Senha"
          id="senha"
          name="senha"
          value={formik.values.senha}
          onChange={formik.handleChange}
        />
        <Botao amarelo="y" type="submit" style={{ margin: ".5rem 0" }}>
          Entrar
        </Botao>
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
};

export default Login;
