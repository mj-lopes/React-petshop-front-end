import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HeaderUsuario from "./HeaderUsuario";
import { GET_ALL_PURCHASES } from "../../api/endPoints";

import { Container, Box } from "@mui/material";
import { Loading, Texto, Titulo } from "../../components";
import { CompraSpanSubtitulo, CompraSubtitulo, WrapperCompra } from "./style";

const PaginaUsuario = () => {
  const usuario = useSelector(({ usuario }) => usuario.data);
  const [comprasData, setComprasData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCompras() {
      setLoading(true);
      const { url, options } = GET_ALL_PURCHASES();
      const data = await fetch(url, options).then((r) => r.json());
      setComprasData(data.reverse());
      setLoading(false);
    }
    fetchCompras();
  }, []);

  const SemHistorico = () => (
    <Texto variant="h4" align="center" my={10}>
      O histórico parece está vázio, suas compras efetuadas apareceram aqui :)
    </Texto>
  );

  const LayoutHistoricoCompras = () => {
    return comprasData.length === 0 ? (
      <SemHistorico />
    ) : (
      <div>
        {comprasData.map((compra) => (
          <Fragment key={`Compra key: ${compra.uuid}`}>
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
          </Fragment>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <HeaderUsuario usuario={usuario} />
      <Box my={4}>
        <Titulo my={2}>Ultimas Compras</Titulo>
        {loading && <Loading />}
        <LayoutHistoricoCompras />
      </Box>
    </Container>
  );
};

export default PaginaUsuario;
