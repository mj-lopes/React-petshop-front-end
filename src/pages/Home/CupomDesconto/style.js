import styled from "@emotion/styled";
import { Grid, Box, Typography } from "@mui/material";

const CupomWrapper = styled(Grid)((props) => ({
  justifyContent: "space-around",
  borderRadius: "8px",
  backgroundColor: "white",
  padding: "24px 16px",
  gap: "3rem",
  alignItems: "center",
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
