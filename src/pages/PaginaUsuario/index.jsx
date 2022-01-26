import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import HeaderUsuario from "./HeaderUsuario";
import { Texto, Titulo } from "../../components";
const PaginaUsuario = () => {
  const usuario = useSelector(({ usuario }) => usuario.data);
  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
      <Box>
        <Titulo my={2}>Ultimas Compras</Titulo>
        <Texto variant="h4" align="center" my={10}>
          O histórico parece está vázio, suas compras efetuadas apareceram aqui
          :)
        </Texto>
      </Box>
    </Container>
  );
};

export default PaginaUsuario;
