import { Link } from "react-router-dom";
import { NavList, NavItem, NavWrapper, NavTextItem } from "./style";

const NavItemElement = (link, titulo, mobile) => {
  return (
    <NavItem>
      <Link to={link}>
        <NavTextItem mobile={mobile}>{titulo}</NavTextItem>
      </Link>
    </NavItem>
  );
};

const NavagacaoCategoria = ({ mobile, onClick }) => {
  return (
    <NavWrapper mobile={mobile}>
      <nav>
        <NavList mobile={mobile} onClick={onClick}>
          {NavItemElement("/produtos/cachorro", "CACHORROS", mobile)}
          {NavItemElement("/produtos/gatos", "GATOS", mobile)}
          {NavItemElement("/produtos/outros", "OUTROS ANIMAIS", mobile)}
          {NavItemElement(
            "/produtos/acessorios_brinquedos",
            "ACESSÓRIOS E BRINQUEDOS",
            mobile,
          )}
          {NavItemElement("/produtos/remedios", "MEDICAÇÃO", mobile)}
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default NavagacaoCategoria;
