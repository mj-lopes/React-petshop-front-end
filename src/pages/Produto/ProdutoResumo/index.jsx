import { Box } from "@mui/material";
import { Botao } from "../../../components";
import cartao from "../../../asserts/cartao.svg";

const ProdutoDescricao = ({ produtoInfo, addAoCarrinho }) => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>{produtoInfo.nome}</h2>
        <p>{produtoInfo.descricao}</p>
      </div>
      <Box display={"flex"} alignItems={"center"} gap={5}>
        <div>
          <h1 style={{ lineHeight: 1 }}>
            {produtoInfo.preco?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
          <sub>
            ou <img src={cartao} alt="cartao" width={18} /> 3x de{" "}
            {(produtoInfo.preco / 3 + 3)?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </sub>
        </div>
        <Botao variant="contained" amarelo="y" onClick={addAoCarrinho}>
          <p>adicionar ao carrinho</p>
        </Botao>
      </Box>
    </>
  );
};

export default ProdutoDescricao;
