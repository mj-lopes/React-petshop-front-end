import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const GridAvaliacao = styled((props) => <Grid container item {...props} />)(
  (props) => ({
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: props.mobile ? "space-between" : "center",
    alignItems: "center",
    gap: "1rem",
  }),
);

const TextoRecomendacaoAvaliacao = styled((props) => <p {...props} />)(
  (props) => ({
    fontSize: "1.5rem",
    textAlign: "center",
    lineHeight: 1.1,
  }),
);

const SpanRecomendacaoAvaliacao = styled((props) => <span {...props} />)(
  (props) => ({
    color: "#FFC100",
    fontWeight: "bold",
  }),
);

export { GridAvaliacao, SpanRecomendacaoAvaliacao, TextoRecomendacaoAvaliacao };
