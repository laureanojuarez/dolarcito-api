import {DolarCardStyled, DolarCotizacion} from "./cotizaciones-styles";

export const DolarItem = ({dolar}) => {
  const formatName = (name) => {
    if (name === "Contado con liquidación") {
      return "CCL";
    }
    return name;
  };

  return (
    <DolarCardStyled>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "150px",
        }}
      >
        <h1>{`Dolar ${formatName(dolar.nombre)}`}</h1>
      </div>
      <DolarCotizacion>
        <div>
          <p>Compra </p>
          <p>{dolar.compra}</p>
        </div>
        <div>
          <p>Venta</p>
          <p>{dolar.venta}</p>
        </div>
      </DolarCotizacion>
    </DolarCardStyled>
  );
};
