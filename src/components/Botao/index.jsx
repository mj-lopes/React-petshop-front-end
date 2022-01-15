import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.primary.main,
  padding: ".5rem .125rem",
  ":hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: "0 0 6px 4px #fff",
  },
}));

export default Btn;
