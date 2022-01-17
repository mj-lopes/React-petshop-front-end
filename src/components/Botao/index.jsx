import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme, branco }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,

  fontWeight: "bold",
  padding: ".5rem",

  ":hover": {
    backgroundColor: branco ? theme.palette.secondary.main : "transparent",
    color: branco ? theme.palette.primary.main : "white",
    boxShadow: `0 0 7px 4px ${
      branco ? theme.palette.primary.main : theme.palette.secondary.main
    }`,
  },
}));

export default Btn;
