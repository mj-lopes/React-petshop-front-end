import { Link } from "react-router-dom";
import { NavList, NavItem, NavWrapper, NavTextItem } from "./style";

const NavItemElement = (link, titulo) => {
  return (
    <NavItem>
      <Link to={link}>
        <NavTextItem>{titulo}</NavTextItem>
      </Link>
    </NavItem>
  );
};

const NavagacaoCategoria = () => {
  return (
    <NavWrapper>
      <nav>
        <NavList>
          {NavItemElement("/produtos/caes", "Cachorros")}
          {NavItemElement("/produtos/gatos", "Gatos")}
          {NavItemElement("/produtos/outros", "Outros Animais")}
          {NavItemElement(
            "/produtos/acessorios_brinquedos",
            "Acessórios e brinquedos",
          )}
          {NavItemElement("/produtos/remedios", "Medicação")}
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default NavagacaoCategoria;
