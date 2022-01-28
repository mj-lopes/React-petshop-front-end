import styled from "@emotion/styled";

const NavWrapper = styled("div")(({ mobile }) => ({
  backgroundColor: mobile ? "#fff" : "#E7A716",
}));

const NavList = styled("ul")(({ mobile }) => ({
  maxWidth: "1200px",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-around",
  gap: mobile ? "0" : "2rem",

  flexDirection: mobile ? "column" : "row",
}));

const NavItem = styled("li")({
  listStyle: "none",
});

const NavTextItem = styled("p")(({ mobile }) => ({
  padding: "1rem",
  textAlign: "center",

  letterSpacing: "4px",
  fontSize: "14px",
  color: "#333",
  fontWeight: "600",

  transition: ".3s",

  "&:hover": {
    color: mobile ? "#FFC100" : "white",
  },
}));

export { NavWrapper, NavList, NavItem, NavTextItem };
