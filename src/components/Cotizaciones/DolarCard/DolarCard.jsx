import {useContext} from "react";
import DolarItem from "./DolarItem";
import {DolarContext} from "../../../context/DolarContext";

export const DolarCard = () => {
  const {dolares, tiempoTranscurrido} = useContext(DolarContext);

  if (!Array.isArray(dolares) || dolares.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <>
      {dolares.map((dolar) => (
        <DolarItem
          key={dolar.casa}
          dolar={dolar}
          tiempoTranscurrido={tiempoTranscurrido}
        />
      ))}
    </>
  );
};
