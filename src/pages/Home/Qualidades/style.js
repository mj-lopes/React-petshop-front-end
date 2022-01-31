import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Texto } from "../../../components";

const WrapperQualidades = styled((props) => <Grid container {...props} />)(
  (props) => ({
    backgroundColor: "#FFC100",
    marginTop: "-70px",
    padding: "50px 16px 20px 16px",
    borderRadius: "50px",
    justifyContent: "space-around",
    gap: "1rem",
  }),
);

const WrapperQualidade = styled((props) => <Grid container {...props} />)(
  (props) => ({
    gap: "1rem",
    flexDirection: "column",
    alignItems: "center",
  }),
);

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
