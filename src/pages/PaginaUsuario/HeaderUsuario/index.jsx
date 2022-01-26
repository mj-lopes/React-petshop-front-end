import { Box, Divider, IconButton } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/user";

const WrapperBtnLogout = styled(({ ...props }) => (
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

const HeaderUsuario = ({ usuario }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} my={4}>
        <h1>Bem vindo, {usuario.nome}!</h1>
        <Box>
          <WrapperBtnLogout
            aria-label="botao logout"
            onClick={() => dispatch(logout())}
          >
            <LogoutOutlinedIcon />
          </WrapperBtnLogout>
        </Box>
      </Box>
      <Divider variant="middle" />
    </>
  );
};

export default HeaderUsuario;
