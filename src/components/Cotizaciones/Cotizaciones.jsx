import {CotizacionesContainer} from "./cotizaciones-container";
import {DolarCard} from "./DolarCard/DolarCard";

export const Cotizaciones = () => {
  return (
    <CotizacionesContainer className="cotizaciones-container">
      <DolarCard />
    </CotizacionesContainer>
  );
};
