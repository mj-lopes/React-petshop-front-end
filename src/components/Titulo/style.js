import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledTypography = styled(Typography)({
  position: "relative",

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
});

export { StyledTypography };