import { RiArrowLeftRightLine } from "@remixicon/react";
import { useState, useEffect } from "react";
import useDolarStore from "../store/dolarStore";

export const InputDolar = () => {
  const [dolar, setDolar] = useState("");
  const [peso, setPeso] = useState("");
  const { dolarData, fetchDolarData, isLoading } = useDolarStore();

  useEffect(() => {
    if (!dolarData) {
      fetchDolarData();
    }
  }, [dolarData, fetchDolarData]);

  const dolarInfo = dolarData?.find(
    (item) => item.nombre === "Blue" || item.nombre === "Dolar Blue"
  );

  if (isLoading) {
    return <div>Cargando cotizaciones...</div>;
  }

  const formatearNumero = (numero) => {
    if (numero === "" || isNaN(numero)) return "";
    return parseFloat(numero).toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const parseNumeroInput = (texto) => {
    if (!texto) return "";
    // Reemplazar comas por puntos para poder parsearlo
    return texto.replace(/\./g, "").replace(",", ".");
  };

  const handleDolarChange = (e) => {
    const value = e.target.value;
    // Permitir entrada de números, punto y coma
    if (value === "" || /^[\d.,]*$/.test(value)) {
      setDolar(value);

      if (value !== "" && dolarInfo?.venta) {
        // Convertir el valor ingresado a número para cálculos
        const dolarValue = parseFloat(parseNumeroInput(value));
        if (!isNaN(dolarValue)) {
          const pesoValue = dolarValue * dolarInfo.venta;
          // Formatear el resultado para mostrarlo
          setPeso(formatearNumero(pesoValue));
        }
      } else {
        setPeso("");
      }
    }
  };

  const handlePesoChange = (e) => {
    const value = e.target.value;
    // Permitir entrada de números, punto y coma
    if (value === "" || /^[\d.,]*$/.test(value)) {
      setPeso(value);

      if (value !== "" && dolarInfo?.venta) {
        // Convertir el valor ingresado a número para cálculos
        const pesoValue = parseFloat(parseNumeroInput(value));
        if (!isNaN(pesoValue)) {
          const dolarValue = pesoValue / dolarInfo.venta;
          // Formatear el resultado para mostrarlo
          setDolar(formatearNumero(dolarValue));
        }
      } else {
        setDolar("");
      }
    }
  };

  return (
    <section className="flex gap-1 items-center p-1">
      <div className="flex flex-col items-center bg-gray-800 p-4 rounded">
        <span>Dolar</span>
        <input
          type="text"
          className="h-full w-full p-2 rounded"
          value={dolar}
          onChange={handleDolarChange}
          placeholder="0.00"
        />
      </div>
      <RiArrowLeftRightLine className="text-white" size={40} />
      <div className="flex flex-col items-center bg-gray-800 p-4 rounded">
        <span>Pesos</span>
        <input
          type="text"
          className="h-full w-full p-2 rounded  "
          value={peso}
          onChange={handlePesoChange}
          placeholder="0.00"
        />
      </div>
    </section>
  );
};
