import { Box, Container, Divider, List, ListItem, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PURCHASE } from "../../api/endPoints";
import { ProdutoListaItem, Subtitulo, Texto } from "../../components";

const HistoricoCompras = () => {
  const { uuid } = useParams("uuid");
  const [infoCompra, setInfoCompra] = useState(null);
  const [produtosCompra, setProdutosCompra] = useState([]);

  useEffect(() => {
    async function fetchDadosCompra() {
      const { url, options } = GET_PURCHASE(uuid);
      const data = await fetch(url, options).then((r) => r.json());
      setInfoCompra(data.shift());
      setProdutosCompra(data);
    }
    fetchDadosCompra();
  }, [uuid]);

  function pegar_somatorio_valores() {
    return produtosCompra.reduce((acc, atual) => {
      return (acc += atual.preco * atual.quantidade);
    }, 0);
  }

  function converterParaStringPreco(num) {
    num = pegar_somatorio_valores();
    return num.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (produtosCompra.length)
    return (
      <Container sx={{ my: 2 }}>
        <Box
          display="flex"
          justifyContent={"space-between"}
          my={4}
          flexWrap={"wrap"}
          gap={2}
        >
          <Paper
            sx={{
              padding: "1rem",
              boxShadow: "0 0 8px 1px #FFC100, 0 0 2px 1px #FFC100",
              background: "white",
              flex: "1 1 250px",
            }}
            elevation={0}
          >
            <h4>Compra:</h4>
            <Texto>{infoCompra.idcompra}</Texto>
          </Paper>
          <Paper
            sx={{
              padding: "1rem",
              border: "1px solid #FFC100",
              boxShadow: "0 0 6px 0px #FFC100",
              background: "white",
              flex: "1 1 250px",
            }}
            elevation={0}
          >
            <h4>Status:</h4>
            <Texto>{infoCompra.status}</Texto>
          </Paper>
          <Paper
            sx={{
              padding: "1rem",
              border: "1px solid #FFC100",
              boxShadow: "0 0 6px 0px #FFC100",
              background: "white",
              flex: "1 1 250px",
            }}
            elevation={0}
          >
            <h4>Data da compra:</h4>
            <Texto>
              {new Date(infoCompra.data).toLocaleDateString("pt-BR")}
            </Texto>
          </Paper>
        </Box>
        <List>
          {produtosCompra.map((produto) => (
            <>
              <Divider variant="middle" flexItem />
              <ListItem key={produto.uuid} sx={{ my: 2 }}>
                <ProdutoListaItem
                  dadosProduto={produto}
                  quantidade={produto.quantidade}
                />
              </ListItem>
            </>
          ))}
        </List>
        <Divider />
        <Box
          display="flex"
          justifyContent={"space-between"}
          height={100}
          my={4}
        >
          <Subtitulo>Total da compra:</Subtitulo>
          <Texto style={{ alignSelf: "flex-end" }} variant="h4">
            {converterParaStringPreco()}
          </Texto>
        </Box>
      </Container>
    );
  return null;
};

export default HistoricoCompras;
