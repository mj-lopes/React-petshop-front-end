import { Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import { Header, NavagacaoCategoria } from "./components";

function Content() {
  return (
    <div>
      <h1>test</h1>
      <Button variant="outlined">Test</Button>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <NavagacaoCategoria />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
