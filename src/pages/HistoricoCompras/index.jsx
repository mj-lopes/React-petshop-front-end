import { Container, Divider, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PURCHASE } from "../../api/endPoints";
import { ProdutoListaItem } from "../../components";

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

  if (produtosCompra.length)
    return (
      <Container>
        <h4>{infoCompra.idcompra}</h4>
        <h4>{infoCompra.status}</h4>
        <h4>{new Date(infoCompra.data).toLocaleDateString("pt-BR")}</h4>
        <List>
          {produtosCompra.map((produto) => (
            <>
              <Divider variant="middle" flexItem />
              <ListItem key={produto.uuid} sx={{ maxHeight: "300px" }}>
                <ProdutoListaItem
                  dadosProduto={produto}
                  quantidade={produto.quantidade}
                />
              </ListItem>
            </>
          ))}
        </List>
      </Container>
    );
  return null;
};

export default HistoricoCompras;
