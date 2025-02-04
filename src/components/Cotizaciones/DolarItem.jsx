import {DolarItemStyled, Valores} from "./cotizaciones-styles";

export const DolarItem = ({dolar, isBlue}) => {
  return (
    <DolarItemStyled isBlue={isBlue}>
      <h1 style={{width: "150px"}}>{dolar.nombre}</h1>
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
  );
};
