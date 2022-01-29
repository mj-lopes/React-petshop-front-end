import { Divider, Grid } from "@mui/material";

export const Comentario = () => (
  <Grid item>
    <Divider sx={{ width: "100%", my: 3 }} />
    <p style={{ fontWeight: "bold" }}>4/5</p>
    <p
      style={{
        color: "#FFC100",
        margin: ".5rem 0",
        fontSize: "1.25rem",
        fontWeight: "bold",
      }}
    >
      Fulano da cida
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend
      lacus sapien, in volutpat lorem semper ut. Suspendisse potenti. Aenean
      placerat lacus odio, cursus ullamcorper nisl lacinia et. Nam feugiat
      aliquet mi et tincidunt.
    </p>
  </Grid>
);

const Comentarios = () => (
  <Grid container item>
    <Comentario />
    <Comentario />
    <Comentario />
    <Comentario />
  </Grid>
);

export default Comentarios;
