import styled from "@emotion/styled";
import { Box } from "@mui/material";
import QuoteAbertura from "../../../asserts/quote-abertura.png";
import QuoteFechamento from "../../../asserts/quote-fechamento.png";

const QuoteWrapper = styled(Box)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5rem",

  backgroundImage: `url(${props.imgUrl})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  "@media screen and (max-width: 760px)": {
    backgroundImage: `url(${props.imgMobileUrl})`,
  },
}));

const Quote = styled("p")({
  maxWidth: "60%",
  margin: "auto",
  padding: "6rem 0",
  textAlign: "center",
  position: "relative",

  color: "#FFC100",
  fontWeight: "bold",
  fontSize: "clamp(1.25rem, 5vw, 2.25rem)",
  lineHeight: "1.3",

  ":before": {
    content: "''",
    width: "clamp(32px, 10vw, 64px)",
    aspectRatio: "1/1",
    backgroundImage: `url(${QuoteAbertura})`,
    backgroundSize: "cover",

    top: "70px",
    position: "absolute",
    left: "-10%",
  },

  ":after": {
    content: "''",
    width: "clamp(32px, 10vw, 64px)",
    aspectRatio: "1/1",
    backgroundImage: `url(${QuoteFechamento})`,
    backgroundSize: "cover",

    bottom: "70px",
    position: "absolute",
    right: "-10%",
  },

  "@media screen and (max-width: 1025px)": {
    ":before": {
      left: "-15%",
    },
    ":after": {
      right: "-15%",
    },
  },
});

export { QuoteWrapper, Quote };
