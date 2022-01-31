import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { CupomWrapper, CupomCodigoWrapper, CupomTexto } from "./style";

const Cupom = () => {
  const orientacaoHorizontal = useMediaQuery("(min-width: 1070px)");
  const quebraSmartphone = useMediaQuery("(min-width: 500px)");

  return (
    <CupomWrapper container direction={orientacaoHorizontal ? "row" : "column"}>
      <Box textAlign={"center"}>
        <Typography variant="h4" paragraph maxWidth={500}>
          Você tem
          <span style={{ color: "#ffc100", fontSize: "2.5rem" }}>
            {" "}
            10% de desconto{" "}
          </span>
          na sua primeira compra!
        </Typography>
        <Typography variant="subtitle2">
          *Desconto não acumulativo e sujeito a outras restrições
        </Typography>
      </Box>

      <Divider
        orientation={orientacaoHorizontal ? "vertical" : "horizontal"}
        flexItem
        variant="middle"
      />

      <CupomCodigoWrapper flexDirection={quebraSmartphone ? "row" : "column"}>
        <CupomTexto maxWidth={quebraSmartphone ? 150 : "auto"}>
          Ensira no carrinho de compras o código:
        </CupomTexto>
        <Box border={"3px dashed #FFC100"} padding={1}>
          <Typography fontSize={48} color={"primary"}>
            REACT10
          </Typography>
        </Box>
      </CupomCodigoWrapper>
    </CupomWrapper>
  );
};

export default Cupom;
