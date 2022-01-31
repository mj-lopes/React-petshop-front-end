import styled from "@emotion/styled";
import { Grid, Box, Typography } from "@mui/material";

const CupomWrapper = styled(Grid)((props) => ({
  justifyContent: "space-around",
  borderRadius: "8px",
  backgroundColor: "white",
  padding: "24px 16px",
  gap: "1rem",
  alignItems: "center",
  margin: "3rem 0",
  boxShadow: "0 0 11px 3px #FFC100, 0 0 4px 1px #FFC100",
}));

const CupomCodigoWrapper = styled(Box)((props) => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
}));

const CupomTexto = styled(Typography)((props) => ({
  fontSize: "1.125rem",
  marginRight: "1rem",
}));

export { CupomWrapper, CupomCodigoWrapper, CupomTexto };
