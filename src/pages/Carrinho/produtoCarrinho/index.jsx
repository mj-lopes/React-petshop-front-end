import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import Img from "../../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";
import { addProduto, removerProduto } from "../../../store/carrinho";

const ProdutoCarrinho = ({ dadosProduto, quantidade }) => {
  const dispatch = useDispatch();

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
        sx={{ flexWrap: "wrap" }}
        secondaryAction={
          <>
            <IconButton
              onClick={() => dispatch(removerProduto(dadosProduto.uuid))}
              sx={{ marginTop: "-85px" }}
              color="primary"
            >
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => dispatch(addProduto(dadosProduto.uuid))}
              sx={{ marginTop: "-85px" }}
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar sx={{ maxWidth: "clamp(20%, 25vw, 25%)", mx: 2 }}>
          <img
            src={dadosProduto.imgurl || Img}
            alt={dadosProduto.nome || "Imagem placeholder do produto"}
          />
        </ListItemAvatar>
        <ListItemText
          primary={dadosProduto.nome}
          sx={{ flexBasis: "300px" }}
          secondary={`${quantidade}X - ${converterParaStringPreco(
            dadosProduto.preco,
          )}`}
        />
      </ListItem>
    );
  return null;
};

export default ProdutoCarrinho;
