import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme, borda, destaque }) => ({
  backgroundColor: (destaque && "#FFC100") || "#fff",
  color: (destaque && "white") || theme.palette.primary.main,
  fontWeight: "bold",
  padding: ".5rem",

  ":hover": {
    backgroundColor:
      (destaque && "#EDB506") || (borda && "white") || "transparent",
    color: (destaque && "white") || theme.palette.secondary.main,
    boxShadow: `0 0 6px 4px ${(destaque && "white") || "#fff"}`,
  },
}));

export default Btn;
