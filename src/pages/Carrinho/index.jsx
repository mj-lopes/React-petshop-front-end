import { useSelector } from "react-redux";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  console.log(listaProdutos);
  return (
    <div>
      {listaProdutos.map((i) => (
        <h1>{i.produto}</h1>
      ))}
    </div>
  );
};

export default Carrinho;
