import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Botao, Subtitulo, Texto, Titulo } from "../../components";
import ProdutoCarrinho from "./produtoCarrinho";

const Carrinho = () => {
  const { listaProdutos } = useSelector((store) => store.carrinho);
  const wrap = useMediaQuery("(max-width: 830px)");

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <Grid container gap={2} my={4} flexWrap={"wrap-reverse"}>
        <Grid
          item
          flex={"10 1 400px"}
          sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
          padding={2}
        >
          <Subtitulo>Produto e Cupom</Subtitulo>

          <List>
            {listaProdutos.map((produto) => {
              return <ProdutoCarrinho produto={produto} key={produto.uuid} />;
            })}
          </List>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "white",
            borderRadius: "6px",
            position: wrap ? "static" : "sticky",
            top: "32px",
          }}
          padding={2}
          flex={"1 1 350px"}
          alignSelf={"flex-end"}
          maxHeight={350}
        >
          <Subtitulo>Resumo</Subtitulo>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={"0px 8px"}
            marginTop={4}
          >
            <Texto fontSize={"14px"}>Valor dos Produtos:</Texto>
            <Texto fontWeight={"bold"}>adasd</Texto>
          </Box>
          <Divider flexItem sx={{ my: 1 }} />

          <Box
            sx={{ backgroundColor: "#FAFAFB", padding: "8px" }}
            marginBottom={4}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Texto fontSize={"14px"}>Total à prazo:</Texto>
              <Texto fontWeight={"bold"}>adasd</Texto>
            </Box>

            <Texto fontSize={"14px"} textAlign="center">
              (em até 12x de R$ 43,55 sem juros)
            </Texto>
          </Box>

          <Botao amarelo="y" sx={{ width: "100%", marginBottom: "1rem" }}>
            Continuar comprando
          </Botao>
          <Botao variant="outlined" branco="y" sx={{ width: "100%" }}>
            Ir para o Pagamento
          </Botao>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carrinho;
