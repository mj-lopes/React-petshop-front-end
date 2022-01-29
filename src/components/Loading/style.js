import styled from "@emotion/styled";

const WrapperLoading = styled((props) => <div {...props} />)({
  width: "100%",
  height: "100vh",
  display: "flex",
  top: "0px",
  left: " 0px",
  zIndex: "1000",
  background: "rgba(0, 0, 0, 0.2)",
});

const LoadingSvg = styled((props) => <div {...props} />)({
  margin: "auto",
  width: "80px",
  aspectRatio: "1/1",
  borderRadius: " 50%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: "rgba(255, 255, 255, 0.5)",

  paddingLeft: "5px",
});

export { LoadingSvg, WrapperLoading };
