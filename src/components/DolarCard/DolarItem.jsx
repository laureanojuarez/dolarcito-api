import {DolarCardStyled, DolarCotizacion} from "./dolarcard-styled";

const DolarItem = ({dolar}) => {
  const formatName = (name) => {
    if (name === "Contado con liquidación") {
      return "CCL";
    }
    return name;
  };

  return (
    <DolarCardStyled>
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          height: "40px",
          margin: "0",
        }}
      >
        {`Dolar ${formatName(dolar.nombre)}`}
      </h1>
      <hr />
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
