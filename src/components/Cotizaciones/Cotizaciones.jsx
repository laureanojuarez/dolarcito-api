import {useContext} from "react";
import {DolarContext} from "../../context/DolarContext";
import {
  CotizacionesContainer,
  DolarBlue,
  DolaresSection,
  Valores,
} from "./cotizaciones-styles";
import {DolarItem} from "./DolarItem";

export const Cotizaciones = () => {
  const {dolares, isLoading, error} = useContext(DolarContext);

  // Necesito sacar el dolar Blue del mapeo
  const dolaresSinBlue = dolares.filter((dolar) => dolar.nombre !== "Blue");

  return (
    <CotizacionesContainer>
      {isLoading && <h2>Cargando...</h2>}
      {error && <h2>Error al cargar la cotización</h2>}

      <DolarBlue>
        <h1>Dolar Blue</h1>
        <Valores>
          <div>
            <p>Compra</p>
            <p>1200</p>
          </div>
          <div>
            <p>Venta</p>
            <p>1220</p>
          </div>
        </Valores>
      </DolarBlue>

      <DolaresSection>
        {dolaresSinBlue.map((dolar) => (
          <DolarItem key={dolar.nombre} dolar={dolar} />
        ))}
      </DolaresSection>
    </CotizacionesContainer>
  );
};
