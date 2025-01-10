import DolarItem from "./DolarItem";
import {dolares} from "../../data/dolares";

export const DolarCard = () => {
  return (
    <>
      {dolares.map((dolar) => (
        <DolarItem key={dolar.id} dolar={dolar} />
      ))}
    </>
  );
};
