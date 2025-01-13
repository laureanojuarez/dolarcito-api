import {useContext} from "react";
import DolarItem from "./DolarItem";
import {DolarContext} from "../../context/DolarContext";

export const DolarCard = () => {
  const dolares = useContext(DolarContext);

  return (
    <>
      {dolares.map((dolar) => (
        <DolarItem key={dolar.casa} dolar={dolar} />
      ))}
    </>
  );
};
