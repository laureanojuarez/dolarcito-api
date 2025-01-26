import {useContext} from "react";
import {DolarContext} from "../../context/DolarContext";
import {DolarItem} from "./DolarItem";
import {CotizacionesContainer} from "./cotizaciones-styles";

export const Cotizaciones = () => {
  const {dolares, isLoading, error} = useContext(DolarContext);

  return (
    <CotizacionesContainer>
      {isLoading && <h2>Cargando...</h2>}
      {error && <h2>Error al cargar la cotización</h2>}
      {dolares.map((dolar) => (
        <DolarItem key={dolar.casa} dolar={dolar} />
      ))}
    </CotizacionesContainer>
  );
};
