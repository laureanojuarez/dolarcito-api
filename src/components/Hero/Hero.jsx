import {HeroStyled} from "./hero-styles";

export const Hero = () => {
  return (
    <HeroStyled>
      <h1 style={{color: "#22C063"}}>Cotizacion del Dolar Hoy</h1>
      <h2 style={{fontSize: "20px", fontWeight: "400"}}>
        Cotizacion del dolar actualizada
      </h2>
      <h3 style={{fontSize: "15px", color: "#A0AEC0", fontWeight: "400"}}>
        Dolar Oficial, Dolar Mep y Dolar Tarjeta
      </h3>
    </HeroStyled>
  );
};
