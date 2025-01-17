import {createContext, useEffect, useState} from "react";
import {formatDistanceToNowInSpanish, parseISODate} from "../utils/dateUtils";
import {useMemo} from "react";

export const DolarContext = createContext();

export const useDolar = () => {
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

  const parsedFechaActualizacion = useMemo(
    () => parseISODate(fechaActualizacion),
    [fechaActualizacion]
  );
  const adjustedFechaActualizacion = useMemo(
    () => new Date(parsedFechaActualizacion.getTime() - 3 * 60 * 60 * 1000),
    [parsedFechaActualizacion]
  );
  const tiempoTranscurrido = useMemo(() =>
    isNaN(parsedFechaActualizacion)
      ? "Fecha Invalida"
      : formatDistanceToNowInSpanish(adjustedFechaActualizacion)
  );

  return {dolares, tiempoTranscurrido};
};

export const DolarProvider = ({children}) => {
  const {dolares, tiempoTranscurrido} = useDolar();
  return (
    <DolarContext.Provider value={{dolares, tiempoTranscurrido}}>
      {children}
    </DolarContext.Provider>
  );
};
