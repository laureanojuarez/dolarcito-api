import {DolarCardStyled} from "./dolarcard-styled";

const DolarItem = ({dolar}) => {
  return (
    <DolarCardStyled>
      <h1 style={{textAlign: "center"}}>{dolar.nombre}</h1>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          textAlign: "center",
        }}
      >
        <p>Compra: $100</p>
        <p>Vende a: $150</p>
      </div>
    </DolarCardStyled>
  );
};

export default DolarItem;
