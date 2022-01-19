import { Botao, Titulo } from "../../../components";
import Input from "../../../components/Input";
import * as yup from "yup";
import { useFormik } from "formik";

const Cadastro = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Escreva o seu email")
      .email("Entre com um email válido")
      .required("Email é requerido"),
    cpf: yup
      .string("Escreva o seu CPF")
      .matches(/(?:\d{3}[-.]?){3}\d{2}/g, "Preencha com um CPF válido")
      .required("O CPF é um necessário"),
    usuario: yup
      .string("Escreva o seu nome de usuário")
      .min(8, "Escreva ao menos 8 caracteres")
      .required("É necessário escolher um nome de usuário"),
    senha: yup
      .string("Escreva a sua senha")
      .matches(
        /^(?=.*\d).{6,}$/,
        "A senha deve ter ao menos 6 digitos, e conter ao menos 1 caractere númerico",
      )
      .required("É necessário preencher uma senha"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      cpf: "",
      usuario: "",
      senha: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });

  return (
    <>
      <Titulo>Cadastre-se</Titulo>

      <form onSubmit={formik.handleSubmit}>
        <Input
          label="E-mail*"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          label="CPF*"
          id="cpf"
          name="cpf"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
          helperText={formik.touched.cpf && formik.errors.cpf}
        />
        <Input
          label="Usuario*"
          id="usuario"
          name="usuario"
          value={formik.values.usuario}
          onChange={formik.handleChange}
          error={formik.touched.usuario && Boolean(formik.errors.usuario)}
          helperText={formik.touched.usuario && formik.errors.usuario}
        />
        <Input
          label="Senha*"
          id="senha"
          name="senha"
          value={formik.values.senha}
          onChange={formik.handleChange}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
        />
        <Botao amarelo="y" type="submit" style={{ margin: "1rem 0" }}>
          Enviar
        </Botao>
      </form>
    </>
  );
};

export default Cadastro;
