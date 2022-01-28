import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Titulo = styled((props) => (
  <Typography variant="h3" component="h2" {...props} />
))(({ theme }) => ({
  position: "relative",
  margin: "2rem 0",

  fontSize: "clamp(1rem, 10vw, 4rem)",
  color: "#333",
  lineHeight: "1",
  fontFamily: "Sen, Helvetica, Sans-serif",

  " :after": {
    content: '""',
    width: "25px",
    height: "25px",
    zIndex: "-1",

    position: "absolute",
    left: "0px",
    bottom: "5px",

    backgroundColor: "#FFC100",
    borderRadius: "6px",
  },
}));

export default Titulo;
