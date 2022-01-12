import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";

const Cupom = () => {
  return (
    <Grid
      container
      justifyContent={"space-around"}
      bgcolor={"white"}
      padding={"24px 16px"}
      gap={3}
      alignItems={"center"}
      direction={useMediaQuery("(min-width: 1050px)") ? "row" : "column"}
    >
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
        orientation={
          useMediaQuery("(min-width: 1050px)") ? "vertical" : "horizontal"
        }
        flexItem
        variant="middle"
      />

      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        flexDirection={useMediaQuery("(min-width: 500px)") ? "row" : "column"}
      >
        <Typography
          maxWidth={useMediaQuery("(min-width: 500px)") ? 150 : "auto"}
          fontSize={"1.125rem"}
          marginRight={1}
        >
          Ensira no carrinho de compras o código:
        </Typography>
        <Box border={"3px dashed #FFC100"} padding={1}>
          <Typography fontSize={48} color={"primary"}>
            REACT10
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Cupom;
