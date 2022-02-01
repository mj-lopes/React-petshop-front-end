import { useState } from "react";

import { TextField } from "@mui/material";
import { Botao } from "../../../components";
import { FormCupom } from "./style";

const CupomForm = ({ onSubmit }) => {
  const [cupom, setCupom] = useState("");

  return (
    <FormCupom
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(cupom);
      }}
    >
      <TextField
        variant={"outlined"}
        value={cupom}
        onChange={({ target }) => setCupom(target.value)}
        label="Ensira o código do cupom"
        sx={{ flex: "1 1 300px" }}
      />
      <Botao
        branco="y"
        variant="outlined"
        sx={{ flex: "1", maxWidth: "100px" }}
        type="submit"
      >
        Aplicar
      </Botao>
    </FormCupom>
  );
};

export default CupomForm;
