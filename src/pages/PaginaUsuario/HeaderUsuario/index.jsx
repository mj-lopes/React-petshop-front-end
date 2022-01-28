import { useDispatch } from "react-redux";
import { logout } from "../../../store/user";

import { Box, Divider } from "@mui/material";
import { WrapperBtnLogout } from "./style";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const HeaderUsuario = ({ usuario }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} my={4}>
        <h2>Bem vindo, {usuario.nome}!</h2>
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
