import {DolarCardStyled} from "./dolarcard-styled";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          textAlign: "center",
        }}
      >
        <p>Compra: {dolar.compra}</p>
        <p>Vende a: {dolar.venta}</p>
      </div>
    </DolarCardStyled>
  );
};

export default DolarItem;
