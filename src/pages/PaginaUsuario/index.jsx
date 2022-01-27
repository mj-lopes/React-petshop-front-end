import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import HeaderUsuario from "./HeaderUsuario";
import { Texto, Titulo } from "../../components";
import { GET_ALL_PURCHASES } from "../../api/endPoints";
const PaginaUsuario = () => {
  const usuario = useSelector(({ usuario }) => usuario.data);
  const [comprasData, setComprasData] = useState([]);

  useEffect(() => {
    async function fetchCompras() {
      const { url, options } = GET_ALL_PURCHASES();
      const data = await fetch(url, options).then((r) => r.json());
      setComprasData(data);
    }
    fetchCompras();
  }, []);

  console.log(comprasData);

  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
      <Box>
        <Titulo my={2}>Ultimas Compras</Titulo>
        <div>
          {comprasData.map((compra) => (
            <h4>{compra.uuid}</h4>
          ))}
        </div>
        <Texto variant="h4" align="center" my={10}>
          O histórico parece está vázio, suas compras efetuadas apareceram aqui
          :)
        </Texto>
      </Box>
    </Container>
  );
};

export default PaginaUsuario;
