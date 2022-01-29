import styled from "@emotion/styled";

const WrapperLoading = styled((props) => <div {...props} />)({
  position: "absolute",
  width: "100%",
  height: "100vh",
  display: "flex",
  top: "0px",
  left: " 0px",
  zIndex: "1000",
});

const Loading = styled((props) => <div {...props} />)({
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

export { Loading, WrapperLoading };
