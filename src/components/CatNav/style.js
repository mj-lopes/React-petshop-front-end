import styled from "@emotion/styled";

const NavWrapper = styled("div")({
  backgroundColor: "#E7A716",
});

const NavList = styled("ul")({
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  margin: "0 auto",
  padding: ".5rem",
});

const NavItem = styled("li")({
  listStyle: "none",
});

const NavTextItem = styled("p")({
  letterSpacing: "3px",
  color: "#333",
  fontWeight: "bold",
  transition: ".3s",
  "&:hover": {
    color: "white",
  },
});

export { NavWrapper, NavList, NavItem, NavTextItem };
