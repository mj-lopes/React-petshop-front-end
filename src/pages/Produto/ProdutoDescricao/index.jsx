import { Divider, Grid } from "@mui/material";
import { Texto, Titulo } from "../../../components";

const ProdutoDescricaoCompleta = () => {
  return (
    <Grid container item gap={2}>
      <Grid item marginBottom={1}>
        <Titulo>Descrição</Titulo>
      </Grid>
      <Grid item>
        <Texto>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          maxime unde facilis nobis amet exercitationem, ducimus ipsum corrupti
          officia assumenda consequuntur, iste cumque sunt nesciunt numquam
          impedit hic nam quam. Error blanditiis id distinctio facilis
          perspiciatis in suscipit corporis modi ratione vitae ipsum dolor
          assumenda expedita dolores numquam voluptate libero sequi praesentium
          fugiat quasi necessitatibus cupiditate, consequatur ipsam maxime. Et.
          Veritatis ea architecto repellendus quasi quod ipsum minus eaque
          numquam explicabo veniam accusamus esse molestias blanditiis saepe
          totam soluta aperiam molestiae est, sit in corrupti velit aspernatur
          iste. Ea, nesciunt. Rem, provident, sint id assumenda asperiores quia
          ullam, recusandae dolorem vitae deserunt dolorum facilis nobis dolores
          quibusdam dicta quam. Qui est beatae officia dicta velit assumenda,
          labore excepturi magnam illum. Eaque sunt laudantium deleniti
          repudiandae eius unde itaque magni consequuntur cumque aut maxime, cum
          harum voluptatum adipisci repellendus voluptas velit quidem?
        </Texto>
      </Grid>
      <Divider sx={{ width: "100%", my: 3 }} />
    </Grid>
  );
};

export default ProdutoDescricaoCompleta;
