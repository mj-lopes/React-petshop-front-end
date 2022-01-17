import { Box, Container, Divider, Grid, useMediaQuery } from "@mui/material";
import { Botao, Titulo } from "../../components/";
import Img from "../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";
import PegadasBG from "../../asserts/paw-bg.png";
import cartao from "../../asserts/cartao.svg";

const Comentario = () => (
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
      aliquet mi et tincidunt.{" "}
    </p>
  </Grid>
);

const Produto = () => {
  const mobile = useMediaQuery("(max-width: 700px)");
  return (
    <Container sx={{ my: 6 }}>
      <Grid container gap={5}>
        <Grid container item flex={"1"}>
          <Grid container item gap={2}>
            <Grid item sm={4}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "80%",
                  padding: "1rem 0",
                  borderRadius: "12px",
                }}
              >
                <img src={Img} width={300} alt="" />
              </div>
            </Grid>
            <Grid
              item
              maxWidth={600}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              flex={"1"}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>
                  Produto Nome - Ração mockup
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet assumenda nobis hic magni voluptatem repellat vitae
                  culpa earum minima suscipit, cupiditate enim nam laborum
                  velit, eligendi excepturi corrupti expedita ad!
                </p>
              </div>
              <Box display={"flex"} alignItems={"center"} gap={5}>
                <div>
                  <h1 style={{ lineHeight: 1 }}>R$99.99</h1>
                  <sub>
                    ou <img src={cartao} alt="cartao" width={18} /> 3x de R$
                    35,99
                  </sub>
                </div>
                <Botao variant="contained" branco="y">
                  <p>adicionar ao carrinho</p>
                </Botao>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ width: "100%", my: 6 }} component={"div"} />

          <Grid container item gap={2}>
            <Grid item marginBottom={1}>
              <Titulo>Descrição</Titulo>
            </Grid>
            <Grid item>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam maxime unde facilis nobis amet exercitationem,
                ducimus ipsum corrupti officia assumenda consequuntur, iste
                cumque sunt nesciunt numquam impedit hic nam quam. Error
                blanditiis id distinctio facilis perspiciatis in suscipit
                corporis modi ratione vitae ipsum dolor assumenda expedita
                dolores numquam voluptate libero sequi praesentium fugiat quasi
                necessitatibus cupiditate, consequatur ipsam maxime. Et.
                Veritatis ea architecto repellendus quasi quod ipsum minus eaque
                numquam explicabo veniam accusamus esse molestias blanditiis
                saepe totam soluta aperiam molestiae est, sit in corrupti velit
                aspernatur iste. Ea, nesciunt. Rem, provident, sint id assumenda
                asperiores quia ullam, recusandae dolorem vitae deserunt dolorum
                facilis nobis dolores quibusdam dicta quam. Qui est beatae
                officia dicta velit assumenda, labore excepturi magnam illum.
                Eaque sunt laudantium deleniti repudiandae eius unde itaque
                magni consequuntur cumque aut maxime, cum harum voluptatum
                adipisci repellendus voluptas velit quidem? Inventore animi
                iusto quis rem modi cum cupiditate delectus? Aspernatur eum
                libero incidunt, repellat sit perspiciatis blanditiis alias
                pariatur dolore quo? Dolorem, numquam enim. Id tempore neque
                eius esse quo mollitia, harum, atque eum officia quam inventore
                incidunt repudiandae. Itaque vel quibusdam ducimus, quas eius
                dolorem, deleniti cupiditate reiciendis quis doloremque ad rem
                corrupti consequatur consectetur ipsum minus illum quod non
                nostrum sint illo, dolorum iure? Eum, officia ut! Molestias sed
                aperiam accusantium consequatur? Accusantium sunt minima,
                maiores laboriosam, at, magnam praesentium exercitationem esse
                autem dolor inventore obcaecati cumque dicta nulla aspernatur in
                magni. Eveniet magni autem accusamus consequuntur. Odio officiis
                ipsam id commodi inventore atque consectetur, nostrum ipsa
                sequi. Accusamus expedita nam quidem, vel nisi necessitatibus!
                Est mollitia pariatur illum dolor minus nihil corporis odio
                atque eum ea. Repellat dolore suscipit perspiciatis consequatur
                esse amet fugit deleniti perferendis temporibus hic fuga magnam
                non cum natus voluptatem officia quos dolores, nemo ea. Optio
                excepturi magni nobis et quo laboriosam?
              </p>
            </Grid>
            <Divider sx={{ width: "100%", my: 3 }} />
          </Grid>

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

          <Grid container item>
            {Comentario()}
            {Comentario()}
            {Comentario()}
            {Comentario()}
          </Grid>
        </Grid>
        <Grid item alignSelf={"center"} display={mobile ? "none" : "block"}>
          <img
            src={PegadasBG}
            alt="Patas de animal ao fundo da tela"
            width={150}
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Produto;
