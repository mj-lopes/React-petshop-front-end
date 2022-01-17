import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Subtitulo = styled(Typography)(() => ({
  position: "relative",
  margin: ".5rem 0",

  fontSize: "clamp(1rem, 10vw, 2rem)",
  color: "#333",
  lineHeight: "1",
  fontFamily: "Sen, Helvetica, Sans-serif",

  " :after": {
    content: '""',
    width: "10px",
    height: "10px",
    zIndex: "-1",

    position: "absolute",
    left: "0px",
    bottom: "3px",

    backgroundColor: "#FFC100",
    borderRadius: "4px",
  },
}));

export default Subtitulo;
