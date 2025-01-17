import {useMemo} from "react";
import {useContext} from "react";
import {useState} from "react";
import {DolarContext} from "../../context/DolarContext";

export const useCalculadora = () => {
  const {dolares} = useContext(DolarContext);
  const [inputValue, setInputValue] = useState("");
  const [calculo, setCalculo] = useState(0);
  const [isDolarToPeso, setIsDolarToPeso] = useState(true);

  const dolarOficial = useMemo(() => {
    return dolares.find((dolar) => dolar.casa === "oficial")?.venta || 0;
  }, [dolares]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
      handleCalculo(value, isDolarToPeso);
    }
  };

  const handleCalculo = (value, isDolarToPeso) => {
    if (value) {
      if (isDolarToPeso) {
        setCalculo(value * dolarOficial.toFixed(2));
      } else {
        setCalculo(value / dolarOficial.toFixed(2));
      }
    } else {
      setCalculo(0);
    }
  };

  const handleExchange = () => {
    const newIsDolarToPeso = !isDolarToPeso;
    setIsDolarToPeso(newIsDolarToPeso);
    handleCalculo(inputValue, newIsDolarToPeso);
  };

  const formatNumber = (number) => {
    return Number(number).toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return {
    inputValue,
    calculo,
    isDolarToPeso,
    handleInputChange,
    handleExchange,
    formatNumber,
  };
};
