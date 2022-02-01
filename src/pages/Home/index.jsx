import CarrouselHome from "./CarouselFotosPromocionais";
import Qualidades from "./Qualidades";
import CategoriaProdutos from "./CategoriaProdutos";
import Cupom from "./CupomDesconto";
import FooterQuote from "./Quote";

import { Container } from "@mui/material";
import { Titulo } from "../../components";

import Gato from "../../asserts/gato.png";
import Cachorro from "../../asserts/cachorro.png";
import OutrosAnimais from "../../asserts/outros-img.png";
import Brinquedos from "../../asserts/brinquedos.png";

const Home = () => {
  return (
    <>
      <CarrouselHome />
      <Qualidades />
      <Container maxWidth={"lg"}>
        <Titulo>Produtos para os seus Pets</Titulo>

        <CategoriaProdutos
          categoria={"gatos"}
          imgLateral={Gato}
          imgAlt={"Gato rajado olhando para a tela"}
          tituloSessao={"Produtos felinos mais vendidos 🐱"}
        />
        <CategoriaProdutos
          categoria={"cachorro"}
          imgLateral={Cachorro}
          imgAlt={"Cachorro olhando para a tela"}
          tituloSessao={"Produtos caninos mais vendidos 🐶"}
          ladoDireito="true"
        />
        <CategoriaProdutos
          categoria={"outros"}
          imgLateral={OutrosAnimais}
          imgAlt={"Papaguaio, hamister e cobra-do-milho"}
          tituloSessao={"Produtos para os mais diversos pets 🐹"}
        />
        <CategoriaProdutos
          categoria={"acessorios_brinquedos"}
          imgLateral={Brinquedos}
          imgAlt={"Coleira, arranhador para gatos e bolinha"}
          tituloSessao={"Brinquedos e acessórios para diversão 🧶"}
          ladoDireito="true"
        />
        <Cupom />
      </Container>
      <FooterQuote />
    </>
  );
};

export default Home;
