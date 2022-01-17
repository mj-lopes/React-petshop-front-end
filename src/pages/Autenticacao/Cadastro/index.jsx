import { Botao, Titulo } from "../../../components";
import Input from "../../../components/Input";

const Cadastro = () => (
  <>
    <Titulo>Cadastro</Titulo>
    <form>
      <Input label="E-mail" />
      <Input label="CPF" />
      <Input label="Usuario" />
      <Input label="Senha" />
      <Botao amarelo="y">Enviar</Botao>
    </form>
  </>
);

export default Cadastro;
