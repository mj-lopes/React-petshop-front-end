import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Img from "../../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useCallback, useEffect, useState } from "react";
import { GET_PRODUCT_BY_UUID } from "../../../api/endPoints";
import { useDispatch } from "react-redux";
import { addAoCarrinho, removeDoCarrinho } from "../../../store/carrinho";

const ProdutoCarrinho = ({ dadosProduto, setValor }) => {
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
        sx={{
          "& .MuiListItemSecondaryAction-root": {
            opacity: "0",
            transition: ".2s",
          },
          "&:hover .MuiListItemSecondaryAction-root": {
            opacity: "1",
            transition: ".3s",
          },
        }}
        secondaryAction={
          <>
            <IconButton
              onClick={() => dispatch(removeDoCarrinho(dadosProduto.uuid))}
              sx={{ marginTop: "-85px" }}
            >
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => dispatch(addAoCarrinho(dadosProduto.uuid))}
              sx={{ marginTop: "-85px" }}
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
          secondary={`${dadosProduto.quantidade}X - ${converterParaStringPreco(
            dadosProduto.preco,
          )}`}
        />
      </ListItem>
    );
  return null;
};

export default ProdutoCarrinho;
