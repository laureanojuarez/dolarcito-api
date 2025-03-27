import { useEffect } from "react";
import useDolarStore from "../store/dolarStore";

export const DolarCard = ({ dolar }) => {
  const { dolarData, isLoading, fetchDolarData } = useDolarStore();

  useEffect(() => {
    if (!dolarData) {
      fetchDolarData(); // Llama a la acción para obtener los datos si aún no están cargados
    }
  }, [dolarData, fetchDolarData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!dolarData) {
    return <div>No data available</div>;
  }

  const dolarInfo = dolarData.find((item) => item.nombre === dolar);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg px-4 py-2 w-full md:w-1/4 shadow-md">
      <h1>{dolar}</h1>
      <div className="flex gap-4">
        <div className="flex flex-col ">
          <span>Compra</span>
          <span>{dolarInfo ? dolarInfo.compra : "N/A"}</span>
        </div>
        <div className="flex flex-col">
          <span>Venta</span>
          <span>{dolarInfo ? dolarInfo.venta : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};
