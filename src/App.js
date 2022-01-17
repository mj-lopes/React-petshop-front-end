import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produto from "./pages/Produto";
import ListaProdutosCategoria from "./pages/ProdutosCategoria";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutosCategoria />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/produtos/:categoria"
          element={<ListaProdutosCategoria />}
        />
        <Route path="/produto/:uuid" element={<Produto />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
