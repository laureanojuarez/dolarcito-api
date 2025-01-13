import dolarLogo from "../../assets/dolarlogo.png";
import {HeaderStyled} from "./navbar-styles";

export const Navbar = () => {
  return (
    <HeaderStyled>
      <div style={{display: "flex", alignItems: "center"}}>
        <img src={dolarLogo} alt="" />
        <h1>Dolar argentino</h1>
      </div>
      {/* 
      <nav>
        <ul>
          <li>Cotizaciones</li>
        </ul>
      </nav> */}
    </HeaderStyled>
  );
};
