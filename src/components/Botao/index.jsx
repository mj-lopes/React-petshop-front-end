import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme, borda }) => ({
  backgroundColor: "#fff",
  color: theme.palette.primary.main,
  padding: ".5rem",
  ":hover": {
    backgroundColor: (borda && "white") || "transparent",
    color: theme.palette.secondary.main,
    boxShadow: `0 0 6px 4px ${borda || "#fff"}`,
  },
}));

export default Btn;
