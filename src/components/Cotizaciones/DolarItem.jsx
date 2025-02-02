import {DolarItemStyled, Valores} from "./cotizaciones-styles";

export const DolarItem = ({dolar}) => {
  return (
    <DolarItemStyled>
      <h1>{dolar.nombre}</h1>
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
    </DolarItemStyled>
  );
};
