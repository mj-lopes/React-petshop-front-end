import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme, branco, amarelo }) => ({
  backgroundColor: amarelo
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  color: amarelo ? theme.palette.secondary.main : theme.palette.primary.main,

  fontWeight: "bold",
  padding: ".5rem",

  ":hover": {
    backgroundColor:
      amarelo || branco ? theme.palette.secondary.main : "transparent",
    color:
      amarelo || branco
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    boxShadow: `0 0 7px 4px ${
      amarelo || branco
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }`,
  },
}));

export default Btn;
