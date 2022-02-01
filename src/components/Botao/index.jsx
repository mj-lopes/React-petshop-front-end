import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme, branco, amarelo }) => ({
  backgroundColor: amarelo
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  color: amarelo ? theme.palette.secondary.main : theme.palette.primary.main,

  fontWeight: "bold",
  padding: ".5rem 1rem",

  ":hover": {
    backgroundColor:
      amarelo || branco ? theme.palette.secondary.main : "transparent",
    color:
      amarelo || branco
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    boxShadow: `0 0 0 2px ${
      amarelo || branco
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }, 0 0 8px 2px ${
      amarelo || branco
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }`,
  },
}));

export default Btn;
