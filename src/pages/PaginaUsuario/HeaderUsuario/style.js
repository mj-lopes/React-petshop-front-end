import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

const WrapperBtnLogout = styled((props) => (
  <IconButton size="large" {...props} />
))((props) => ({
  color: "#FFC100",
  backgroundColor: "#333",
  transition: ".3s",
  ":hover": {
    color: "#333",

    borderRadius: "6px",
    backgroundColor: "#FFC100",
  },
}));

export { WrapperBtnLogout };
