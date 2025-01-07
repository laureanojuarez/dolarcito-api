import {DolarCardStyled} from "./dolarcard-styled";
import {dolares} from "../../data/dolares";

export const DolarCard = () => {
  return (
    <>
      {dolares.map((dolar) => (
        <DolarCardStyled key={dolar.id}>
          <h1>{dolar.nombre}</h1>
          <hr />
          <div style={{display: "flex", gap: "25px"}}>
            <p>Compra: $100</p>
            <p>Vende a: $150</p>
          </div>
        </DolarCardStyled>
      ))}
    </>
  );
};
