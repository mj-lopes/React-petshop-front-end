import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PURCHASE } from "../../api/endPoints";
import { ProdutoListaItem, Subtitulo, Texto } from "../../components";

import {
  Categoria,
  ContainerHCompra,
  ContainerValorTotalHCompra,
  HeaderHCompra,
  HeaderHCompraCard,
  Informacao,
} from "./style";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import CalendarTodaySharpIcon from "@mui/icons-material/CalendarTodaySharp";

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
      <ContainerHCompra>
        <HeaderHCompra>
          <HeaderHCompraCard>
            <ListItem>
              <ListItemIcon>
                <ShoppingBasketSharpIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Categoria texto={"Compra"} />}
                secondary={<Informacao texto={infoCompra.idcompra} />}
              />
            </ListItem>
          </HeaderHCompraCard>
          <HeaderHCompraCard>
            <ListItem>
              <ListItemIcon>
                <LocalShippingSharpIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Categoria texto={"Status"} />}
                secondary={<Informacao texto={infoCompra.status} />}
              />
            </ListItem>
          </HeaderHCompraCard>
          <HeaderHCompraCard>
            <ListItem>
              <ListItemIcon>
                <CalendarTodaySharpIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Categoria texto={"Data"} />}
                secondary={
                  <Informacao
                    texto={new Date(infoCompra.data).toLocaleDateString(
                      "pt-BR",
                    )}
                  />
                }
              />
            </ListItem>
          </HeaderHCompraCard>
        </HeaderHCompra>

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

        <ContainerValorTotalHCompra>
          <Subtitulo>Total da compra:</Subtitulo>
          <Texto style={{ alignSelf: "flex-end" }} variant="h4">
            {converterParaStringPreco()}
          </Texto>
        </ContainerValorTotalHCompra>
      </ContainerHCompra>
    );
  return null;
};

export default HistoricoCompras;
