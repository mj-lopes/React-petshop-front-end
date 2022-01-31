import { Botao, Titulo, Texto } from "../../../components";
import Input from "../../../components/Input";
import * as yup from "yup";
import { useFormik } from "formik";
import { POST_NEW_USER } from "../../../api/endPoints";

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
    onSubmit: async (values) => {
      const formData = {
        nome: values.usuario,
        cpf: values.cpf,
        email: values.email,
        senha: values.senha,
      };
      const { url, options } = POST_NEW_USER(formData);

      const token = await fetch(url, options).then((response) => {
        console.log(response);
        response.json();
      });
      // dispatch(saveTokenAndLogin(token.uuid));
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
          type={"password"}
          value={formik.values.senha}
          onChange={formik.handleChange}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
        />
        <Botao amarelo="y" type="submit" style={{ margin: "1rem 0" }}>
          Enviar
        </Botao>
      </form>
      <Texto>
        As suas informações estão totalmente seguras com a gente 🐱‍👤
      </Texto>
      <Texto>
        Todos os seus dados são criptografados, e o acesso é disponibilizado
        somente a você e aos novos administradores.
      </Texto>
      <Texto my={1}>
        Ao criar uma conta, você concorda com os Termos e Condições de Uso da
        ReactPetshop.
      </Texto>
      <Texto marginBottom={4}>
        Para mais informações,{" "}
        <span
          style={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => alert("Sou eeeeuu, o tiririiica")}
        >
          leia os nossos termos de uso.
        </span>
      </Texto>
    </>
  );
};

export default Cadastro;
