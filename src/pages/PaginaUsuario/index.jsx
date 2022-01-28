import { useEffect, useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import HeaderUsuario from "./HeaderUsuario";
import { Texto, Titulo } from "../../components";
import { GET_ALL_PURCHASES } from "../../api/endPoints";
import { Link } from "react-router-dom";
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

  const semHistorico = () => (
    <Texto variant="h4" align="center" my={10}>
      O histórico parece está vázio, suas compras efetuadas apareceram aqui :)
    </Texto>
  );

  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
      <Box my={4}>
        <Titulo my={2}>Ultimas Compras</Titulo>
        <div>
          {comprasData.map((compra) => (
            <Paper elevation={2} sx={{ my: 2, padding: 2, display: "flex" }}>
              <Link to={`/compra/${compra.uuid}`}>
                <h4>Compra: {compra.uuid}</h4>
              </Link>
              <Texto style={{ flex: "1" }}>{compra.data}</Texto>
              <Texto style={{ flex: "1", color: "#FFC100" }}>
                <span style={{ fontWeight: "Bold", color: "#333" }}>
                  Status:
                </span>{" "}
                {compra.status}
              </Texto>
            </Paper>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default PaginaUsuario;
