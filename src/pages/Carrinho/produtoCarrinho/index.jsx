import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Img from "../../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useEffect, useState } from "react";
import { GET_PRODUCT_BY_UUID } from "../../../api/endPoints";
import { useDispatch } from "react-redux";
import { addAoCarrinho, removeDoCarrinho } from "../../../store/carrinho";

const ProdutoCarrinho = ({ produto }) => {
  const [dadosProduto, setDadosProduto] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch_produto(uuid) {
      const { url, options } = GET_PRODUCT_BY_UUID(uuid);
      const dado = await fetch(url, options).then((r) => r.json());

      setDadosProduto(dado);
      console.log(dado);
    }

    fetch_produto(produto.produto);
  }, [produto.produto]);

  function converterParaStringPreco(stringValor) {
    return stringValor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (dadosProduto)
    return (
      <ListItem
        key={dadosProduto.uuid}
        sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
        secondaryAction={
          <>
            <IconButton
              onClick={() => dispatch(removeDoCarrinho(dadosProduto.uuid))}
            >
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => dispatch(addAoCarrinho(dadosProduto.uuid))}
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar sx={{ maxWidth: "100px", mx: 2 }}>
          <img
            src={dadosProduto.imgurl || Img}
            alt={dadosProduto.nome || "Imagem placeholder do produto"}
          />
        </ListItemAvatar>
        <ListItemText
          primary={dadosProduto.nome}
          secondary={`${produto.quantidade}X - ${converterParaStringPreco(
            dadosProduto.preco,
          )}`}
        />
      </ListItem>
    );
  return null;
};

export default ProdutoCarrinho;
