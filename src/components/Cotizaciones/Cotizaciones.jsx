import {
  CotizacionesContainer,
  DolaresSection,
  DolarItemStyled,
  Valores,
} from "./cotizaciones-styles";
import {fetchDolares} from "../../features/dolar/dolarSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const Cotizaciones = () => {
  const dispatch = useDispatch();
  const {dolares, isLoading, error} = useSelector((state) => state.dolar);

  useEffect(() => {
    dispatch(fetchDolares());
  }, [dispatch]);

  const dolaresOrdenados = [...dolares].sort((a, b) =>
    a.nombre === "Blue" ? -1 : 1
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CotizacionesContainer>
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
