import { useEffect, useState } from "react";

import { Alert, Slide, Snackbar } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
const Alerta = ({ tipo, mensagem, icone }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    mensagem ? setOpen(true) : setOpen(false);
  }, [mensagem]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      severity={tipo}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={TransitionDown}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        severity={tipo}
        variant="filled"
        icon={icone || <AddShoppingCartIcon fontSize="inherit" />}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
};

export default Alerta;
