import dolarLogo from "../../assets/dolarlogo.png";
import {HeaderStyled, NameLogo} from "./navbar-styles";

export const Navbar = () => {
  return (
    <HeaderStyled>
      <NameLogo>
        <img src={dolarLogo} alt="" />
        <h1>Dolar argentino</h1>
      </NameLogo>
    </HeaderStyled>
  );
};
