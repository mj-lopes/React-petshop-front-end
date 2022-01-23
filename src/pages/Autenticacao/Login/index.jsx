import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Botao, Subtitulo, Titulo } from "../../../components";
import Input from "../../../components/Input";
import { fetchUsuario } from "../../../store/user";

const Login = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    usuario: yup
      .string("Escreva o seu nome de usuário")
      .required("É necessário preencher o campo"),
    senha: yup
      .string("Escreva a sua senha")
      .required("É necessário preencher o campo"),
  });

  const formik = useFormik({
    initialValues: {
      usuario: "",
      senha: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ usuario, senha }) => {
      dispatch(fetchUsuario(usuario, senha));
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
          error={formik.touched.usuario && Boolean(formik.errors.usuario)}
          helperText={formik.touched.usuario && formik.errors.usuario}
        />
        <Input
          label="Senha"
          id="senha"
          type={"password"}
          name="senha"
          value={formik.values.senha}
          onChange={formik.handleChange}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
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
        <Link to={"./cadastro"}>
          <Botao branco="y">Cadastrar</Botao>
        </Link>
      </Box>
    </>
  );
};

export default Login;
