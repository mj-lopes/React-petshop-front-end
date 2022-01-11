import { Route, Routes } from "react-router-dom";
import { Header, NavagacaoCategoria } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <NavagacaoCategoria />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Home />} />
        <Route path="/produtos/:categoria" element={<Home />} />
        <Route path="/produto/:uuid" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
