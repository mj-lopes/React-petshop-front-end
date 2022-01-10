import styled from "@emotion/styled";
import seta from "../../asserts/seta.svg";

const ArrowNext = styled("div")({
  position: "absolute",
  top: "calc(50% - 22px)",

  display: "block",
  backgroundImage: `url(${seta})`,
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  opacity: ".6",
  width: "21px",
  height: "38px",
  zIndex: "100",
  right: "10px",

  cursor: "pointer",
});

const ArrowPrev = styled(ArrowNext)({
  transform: "rotate(180deg)",
  left: "10px",
});

export { ArrowNext, ArrowPrev };
