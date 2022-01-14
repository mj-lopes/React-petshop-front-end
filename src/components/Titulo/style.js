import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledTypography = styled(Typography)({
  fontSize: "clamp(1rem, 10vw, 4rem)",
  color: "#333",
  lineHeight: "1",
  position: "relative",
  fontFamily: "Sen, Helvetica, Sans-serif",

  ":after": {
    content: '""',
    position: "absolute",
    left: "5px",
    bottom: "-5px",
    width: "60px",
    height: "6px",
    backgroundColor: "#FFC100",
  },
});

export { StyledTypography };
