import {createContext, useEffect, useState} from "react";
import {formatDistanceToNowInSpanish, parseISODate} from "../utils/dateUtils";

export const DolarContext = createContext();

export const DolarProvider = ({children}) => {
  const [dolares, setDolares] = useState([]);
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  useEffect(() => {
    const fetchDolares = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const data = await response.json();
        console.log("API response:", data);
        if (data && data.length > 0) {
          setDolares(data);
          setFechaActualizacion(data[0].fechaActualizacion);
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDolares();
  }, []);

  const parsedFechaActualizacion = parseISODate(fechaActualizacion);
  const adjustedFechaActualizacion = new Date(
    parsedFechaActualizacion.getTime() - 3 * 60 * 60 * 1000
  ); // Ajuste manual para UTC-3
  const tiempoTranscurrido = isNaN(parsedFechaActualizacion)
    ? "Fecha inválida"
    : formatDistanceToNowInSpanish(adjustedFechaActualizacion);

  return (
    <DolarContext.Provider value={{dolares, tiempoTranscurrido}}>
      {children}
    </DolarContext.Provider>
  );
};
