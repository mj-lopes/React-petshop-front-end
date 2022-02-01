import { Box } from "@mui/material";
import { Botao, Subtitulo, Texto } from "../../../components";
import cartao from "../../../asserts/cartao.svg";

const ProdutoDescricao = ({ produtoInfo, addAoCarrinho }) => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Subtitulo my={2} component="h2">
          {produtoInfo.nome}
        </Subtitulo>
        <Texto>{produtoInfo.descricao}</Texto>
      </div>
      <Box display={"flex"} alignItems={"center"} gap={5}>
        <div>
          <Subtitulo>
            {produtoInfo.preco?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Subtitulo>

          <sub>
            ou <img src={cartao} alt="" width={18} /> 3x de{" "}
            {((produtoInfo.preco * 1.25) / 3)?.toLocaleString("pt-BR", {
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
