import { useDispatch } from "react-redux";
import { addProduto, removerProduto } from "../../../store/carrinho";

import { IconButton, ListItem } from "@mui/material";
import { ProdutoListaItem } from "../../../components";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const ProdutoCarrinho = ({ dadosProduto, quantidade }) => {
  const dispatch = useDispatch();

  if (dadosProduto)
    return (
      <ListItem
        key={dadosProduto.uuid}
        sx={{ flexWrap: "wrap", my: 1 }}
        secondaryAction={
          <>
            <IconButton
              onClick={() => dispatch(removerProduto(dadosProduto.uuid))}
              sx={{ marginTop: "-85px" }}
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
        <ProdutoListaItem dadosProduto={dadosProduto} quantidade={quantidade} />
      </ListItem>
    );
  return null;
};

export default ProdutoCarrinho;
