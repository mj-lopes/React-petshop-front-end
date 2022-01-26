import { Container, Box, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import HeaderUsuario from "./HeaderUsuario";

const PaginaUsuario = () => {
  const usuario = useSelector(({ usuario }) => usuario.data);
  console.log(usuario);
  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
    </Container>
  );
};

export default PaginaUsuario;
