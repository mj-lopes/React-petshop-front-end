import { Route, Routes } from "react-router-dom";
import { Footer, Header, NavagacaoCategoria } from "./components";
import Home from "./pages/Home";
import ListaProdutosCategoria from "./pages/ProdutosCategoria";

function App() {
  return (
    <>
      <Header />
      <NavagacaoCategoria />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Home />} />
        <Route
          path="/produtos/:categoria"
          element={<ListaProdutosCategoria />}
        />
        <Route path="/produto/:uuid" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
