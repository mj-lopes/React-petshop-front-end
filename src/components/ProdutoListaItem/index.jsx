import { Link } from "react-router-dom";

import { ListItemAvatar, ListItemText } from "@mui/material";

import ImgPlaceHolder from "../../asserts/imgPlaceholder.png";

const ProdutoListaItem = ({ dadosProduto, quantidade }) => {
  function converterParaStringPreco(stringValor) {
    return stringValor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <>
      <ListItemAvatar sx={{ maxWidth: "clamp(60px, 15vw, 150px)", mx: 2 }}>
        <Link to={`../produto/${dadosProduto.uuid}`}>
          <img
            src={dadosProduto.imgurl || ImgPlaceHolder}
            alt={dadosProduto.nome || "Imagem placeholder do produto"}
          />
        </Link>
      </ListItemAvatar>
      <ListItemText
        primary={dadosProduto.nome}
        sx={{ flexBasis: "300px" }}
        secondary={`${quantidade}X - ${converterParaStringPreco(
          dadosProduto.preco,
        )}`}
      />
    </>
  );
};
export default ProdutoListaItem;
