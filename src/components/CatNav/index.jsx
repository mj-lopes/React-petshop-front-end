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
          {NavItemElement("/produtos/cachorro", "Cachorros", mobile)}
          {NavItemElement("/produtos/gatos", "Gatos", mobile)}
          {NavItemElement("/produtos/outros", "Outros Animais", mobile)}
          {NavItemElement(
            "/produtos/acessorios_brinquedos",
            "Acessórios e brinquedos",
            mobile,
          )}
          {NavItemElement("/produtos/remedios", "Medicação", mobile)}
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default NavagacaoCategoria;
