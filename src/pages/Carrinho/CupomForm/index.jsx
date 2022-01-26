import { Botao, Input } from "../../../components";

const CupomForm = ({ cupom, setCupom, handleSubmitCupom }) => {
  return (
    <form
      style={{
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
      onSubmit={(e) => handleSubmitCupom(e)}
    >
      <Input
        variant={"outlined"}
        value={cupom}
        onChange={({ target }) => setCupom(target.value)}
        label="Ensira o código do cupom"
        sx={{ flex: "1 1 300px", borderRadius: "0" }}
      />
      <Botao
        branco="y"
        variant="outlined"
        sx={{ flex: "1", maxWidth: "100px" }}
        type="submit"
      >
        Aplicar
      </Botao>
    </form>
  );
};

export default CupomForm;
