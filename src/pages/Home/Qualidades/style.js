import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Texto } from "../../../components";

const WrapperQualidades = styled((props) => (
  <Grid container justifyContent={"space-around"} gap={2} {...props} />
))((props) => ({
  backgroundColor: "#FFC100",
  marginTop: "-70px",
  padding: "50px 16px 20px 16px",
  borderRadius: "50px",
}));

const WrapperQualidade = styled((props) => (
  <Grid
    container
    gap={1}
    direction={"column"}
    alignItems={"center"}
    {...props}
  />
))((props) => ({}));

const QualidadeTexto = styled((props) => <Texto {...props} />)((props) => ({
  fontSize: "14px",
  textAlign: "center",
  fontWeight: "bolder",
}));

const QualidadeSubTexto = styled((props) => <sub {...props} />)((props) => ({
  fontWeight: "normal",
}));

export {
  WrapperQualidades,
  WrapperQualidade,
  QualidadeTexto,
  QualidadeSubTexto,
};
