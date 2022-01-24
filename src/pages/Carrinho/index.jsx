import { Container, List } from "@mui/material";
import { useSelector } from "react-redux";
import { Titulo } from "../../components";
import ProdutoCarrinho from "./produtoCarrinho";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <List>
        {listaProdutos.map((produto) => {
          return <ProdutoCarrinho produto={produto} key={produto.uuid} />;
        })}
      </List>
    </Container>
  );
};

export default Carrinho;
