import {useMemo, useContext, useState, useCallback} from "react";
import {DolarContext} from "../context/DolarContext";

export const useCalculadora = () => {
  const {dolares} = useContext(DolarContext);
  const [inputValue, setInputValue] = useState("");
  const [calculo, setCalculo] = useState(0);
  const [isDolarToPeso, setIsDolarToPeso] = useState(true);

  const dolarOficial = useMemo(() => {
    return dolares.find((dolar) => dolar.casa === "oficial")?.venta || 0;
  }, [dolares]);

  const handleCalculo = useCallback(
    (value, isDolarToPeso) => {
      if (value) {
        const numericValue = parseFloat(value);
        if (isDolarToPeso) {
          setCalculo((numericValue * dolarOficial).toFixed(2));
        } else {
          setCalculo((numericValue / dolarOficial).toFixed(2));
        }
      } else {
        setCalculo(0);
      }
    },
    [dolarOficial]
  );

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value)) {
        setInputValue(value);
        handleCalculo(value, isDolarToPeso);
      }
    },
    [handleCalculo, isDolarToPeso]
  );

  const handleExchange = useCallback(() => {
    const newIsDolarToPeso = !isDolarToPeso;
    setIsDolarToPeso(newIsDolarToPeso);
    handleCalculo(inputValue, newIsDolarToPeso);
  }, [inputValue, isDolarToPeso, handleCalculo]);

  const formatNumber = useCallback((number) => {
    return Number(number).toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

  return {
    inputValue,
    calculo,
    isDolarToPeso,
    handleInputChange,
    handleExchange,
    formatNumber,
  };
};
