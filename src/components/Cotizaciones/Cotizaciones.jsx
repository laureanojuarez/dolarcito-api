import {useContext} from "react";
import {DolarContext} from "../../context/DolarContext";
import {
  CotizacionesContainer,
  DolarBlue,
  DolaresSection,
} from "./cotizaciones-styles";
import {DolarItem} from "./DolarItem";

export const Cotizaciones = () => {
  const {dolares, isLoading, error} = useContext(DolarContext);

  const dolaresSinBlue = dolares.filter(
    (dolar) => dolar.nombre !== "Dolar Blue"
  );

  // Necesito sacar el dolar Blue del mapeo

  return (
    <CotizacionesContainer>
      {isLoading && <h2>Cargando...</h2>}
      {error && <h2>Error al cargar la cotización</h2>}

      <DolarBlue>
        <h1>Dolar Blue</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p>Compra</p>
            <p>1200</p>
          </div>
          <div>
            <p>Venta</p>
            <p>1220</p>
          </div>
        </div>
      </DolarBlue>

      <DolaresSection>
        {dolaresSinBlue.map((dolar) => (
          <DolarItem key={dolar.nombre} dolar={dolar} />
        ))}
      </DolaresSection>
    </CotizacionesContainer>
  );
};
