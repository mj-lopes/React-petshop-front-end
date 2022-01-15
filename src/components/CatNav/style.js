import styled from "@emotion/styled";

const NavWrapper = styled("div")(({ mobile }) => ({
  backgroundColor: mobile ? "#fff" : "#E7A716",
}));

const NavList = styled("ul")(({ mobile }) => ({
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  gap: mobile ? "0" : "2rem",
  margin: "0 auto",
  padding: ".5rem",

  flexDirection: mobile ? "column" : "row",
}));

const NavItem = styled("li")({
  listStyle: "none",
});

const NavTextItem = styled("p")(({ mobile }) => ({
  letterSpacing: "3px",
  color: "#333",
  fontWeight: "bold",
  transition: ".3s",
  padding: ".5rem",
  "&:hover": {
    color: mobile ? "#FFC100" : "white",
  },
}));

export { NavWrapper, NavList, NavItem, NavTextItem };
