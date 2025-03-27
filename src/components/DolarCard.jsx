import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const DolarCard = ({ dolar }) => {
  const [dolarData, setDolarData] = useState(null);

  const getDolar = async () => {
    try {
      const response = await axios.get("https://dolarapi.com/v1/dolares");

      setDolarData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDolar();
  }, []);

  if (!dolarData) {
    return <div>Loading...</div>;
  }

  const dolarInfo = dolarData.find((item) => item.nombre === dolar);

  return (
    <div className="flex flex-col items-center bg-gray-600 rounded-lg px-4 py-2">
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
