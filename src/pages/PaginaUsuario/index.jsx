import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HeaderUsuario from "./HeaderUsuario";
import { GET_ALL_PURCHASES } from "../../api/endPoints";

import { Container, Box } from "@mui/material";
import { Texto, Titulo } from "../../components";
import { CompraSpanSubtitulo, CompraSubtitulo, WrapperCompra } from "./style";

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

  const SemHistorico = () => (
    <Texto variant="h4" align="center" my={10}>
      O histórico parece está vázio, suas compras efetuadas apareceram aqui :)
    </Texto>
  );

  if (comprasData.length === 0) return <SemHistorico />;
  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
      <Box my={4}>
        <Titulo my={2}>Ultimas Compras</Titulo>
        <div>
          {comprasData.map((compra) => (
            <Link to={`/compra/${compra.uuid}`}>
              <WrapperCompra>
                <CompraSubtitulo fontFamily={"monospace"}>
                  <CompraSpanSubtitulo>Compra:</CompraSpanSubtitulo>{" "}
                  {compra.uuid}
                </CompraSubtitulo>
                <CompraSubtitulo>
                  <CompraSpanSubtitulo>Data:</CompraSpanSubtitulo>{" "}
                  {new Date(compra.data).toLocaleDateString("pt-BR")}
                </CompraSubtitulo>
                <CompraSubtitulo style={{ color: "#FFC100" }}>
                  <CompraSpanSubtitulo>Status:</CompraSpanSubtitulo>{" "}
                  {compra.status}
                </CompraSubtitulo>
              </WrapperCompra>
            </Link>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default PaginaUsuario;
