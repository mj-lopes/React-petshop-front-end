import { Typography, Card, CardMedia } from "@mui/material";

import styled from "@emotion/styled";

const WrapperCartao = styled(Card)((props) => ({
  maxWidth: "250px",
  minHeight: "340px",
  borderRadius: "12px",
  ":hover": {
    boxShadow: `0 0 7px 4px ${props.theme.palette.main}`,
  },
  "& .MuiCardHeader-action": {
    marginRight: 0,
  },
}));

const PrecoAVista = styled(Typography)((props) => ({
  fontFamily: "Sen",
  fontWeight: "bold",
  lineHeight: "1",
  "& span": {
    display: "inline",
    fontWeight: "normal",
  },
}));

const CardImg = styled(CardMedia)((props) => ({
  width: "50%",
  margin: "auto",
}));

const PrecoParcelado = styled("sub")({
  fontWeight: "normal",
});

export { WrapperCartao, PrecoAVista, PrecoParcelado, CardImg };
