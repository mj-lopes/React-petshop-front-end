import { Box, Grid } from "@mui/material";

const ProdutoAvaliacao = ({ mobile }) => {
  return (
    <Grid
      display={"flex"}
      flexWrap={"wrap-reverse"}
      justifyContent={mobile ? "center" : "space-between"}
      alignItems={"center"}
      container
      item
      gap={2}
    >
      <Box flexBasis={300} textAlign={"center"}>
        <p style={{ fontWeight: "bold" }}>Avaliação dos Clientes</p>
        <p style={{ fontSize: "3rem", lineHeight: 1.1 }}>4/5</p>
        <p>3 avaliações</p>
      </Box>
      <Box>
        <p
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              color: "#FFC100",
              fontWeight: "bold",
            }}
          >
            100%
          </span>{" "}
          dos clientes{" "}
          <span
            style={{
              color: "#FFC100",
              fontWeight: "bold",
            }}
          >
            recomendam
          </span>{" "}
          este produto
        </p>
      </Box>
    </Grid>
  );
};
export default ProdutoAvaliacao;
