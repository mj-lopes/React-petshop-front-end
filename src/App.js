import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import ListaProdutosCategoria from "./pages/ProdutosCategoria";
import Autenticacao from "./pages/Autenticacao";
import BuscaPorQuery from "./pages/Busca";
import PaginaUsuario from "./pages/PaginaUsuario";
import ProtectedRoute from "./helper/protectedRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAutomatico } from "./store/user";
import Carrinho from "./pages/Carrinho";
import HistoricoCompra from "./pages/CompraHistorico";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAutomatico());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca/:query" element={<BuscaPorQuery />} />

          <Route path="/produto/:uuid" element={<Produto />} />
          <Route path="/produtos" element={<ListaProdutosCategoria />} />
          <Route
            path="/produtos/:categoria"
            element={<ListaProdutosCategoria />}
          />

          <Route to="/" element={<ProtectedRoute />}>
            <Route path="/conta/*" element={<PaginaUsuario />} />
            <Route path="/compra/:uuid" element={<HistoricoCompra />} />
          </Route>

          <Route path="/login/*" element={<Autenticacao />} />
          <Route path="/carrinho" element={<Carrinho />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
