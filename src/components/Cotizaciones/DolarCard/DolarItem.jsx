import {DolarCardStyled, DolarCotizacion} from "./dolarcard-styled";

const DolarItem = ({dolar, tiempoTranscurrido}) => {
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
        }}
      >
        <h1>{`Dolar ${formatName(dolar.nombre)}`}</h1>
        <p>{tiempoTranscurrido}</p>
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

export default DolarItem;
