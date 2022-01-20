import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import ListaProdutosCategoria from "./pages/ProdutosCategoria";
import Autenticacao from "./pages/Autenticacao";
import BuscaPorQuery from "./pages/Busca";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Autenticacao />} />
        <Route path="/busca/:query" element={<BuscaPorQuery />} />
        <Route path="/produto/:uuid" element={<Produto />} />
        <Route path="/produtos" element={<ListaProdutosCategoria />} />
        <Route
          path="/produtos/:categoria"
          element={<ListaProdutosCategoria />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
