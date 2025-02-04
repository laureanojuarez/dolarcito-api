import {useContext} from "react";
import {DolarContext} from "../../context/DolarContext";
import {
  CotizacionesContainer,
  DolaresSection,
  DolarItemStyled,
  Valores,
} from "./cotizaciones-styles";

export const Cotizaciones = () => {
  const {dolares, isLoading, error} = useContext(DolarContext);

  // Ordenar los datos para que el Dolar Blue aparezca primero
  const dolaresOrdenados = dolares.sort((a, b) =>
    a.nombre === "Blue" ? -1 : 1
  );

  return (
    <CotizacionesContainer>
      {isLoading && <h2>Cargando...</h2>}
      {error && <h2>Error al cargar la cotización</h2>}

      <DolaresSection>
        {dolaresOrdenados.map((dolar) => (
          <DolarItemStyled key={dolar.nombre} isBlue={dolar.nombre === "Blue"}>
            <h1>{dolar.nombre}</h1>
            <Valores>
              <div>
                <p>Compra</p>
                <p>{dolar.compra}</p>
              </div>
              <div>
                <p>Venta</p>
                <p>{dolar.venta}</p>
              </div>
            </Valores>
          </DolarItemStyled>
        ))}
      </DolaresSection>
    </CotizacionesContainer>
  );
};
