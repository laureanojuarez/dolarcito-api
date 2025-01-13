import {useContext} from "react";
import {MobileDiv} from "./dolarcard-styled";
import DolarItem from "./DolarItem";
import {DolarContext} from "../../../context/DolarContext";

export const DolarCard = () => {
  const dolares = useContext(DolarContext);

  return (
    <>
      <MobileDiv>
        <h3>Tipo de cambio</h3>
        <h2>
          <span>Compra </span>
          <span>/</span>
          <span> Vende</span>
        </h2>
      </MobileDiv>

      {dolares.map((dolar) => (
        <DolarItem key={dolar.casa} dolar={dolar} />
      ))}
    </>
  );
};
