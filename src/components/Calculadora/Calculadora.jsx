import {
  CalculadoraContainer,
  CotizacionActual,
  ExchangeIcon,
  InputDiv,
} from "./calculadora-styles";
import {useState, useContext} from "react";
import {DolarContext} from "../../context/DolarContext";

export const Calculadora = () => {
  const dolares = useContext(DolarContext);
  const [inputValue, setInputValue] = useState("");
  const [calculo, setCalculo] = useState(0);
  const [isDolarToPeso, setIsDolarToPeso] = useState(true);

  const dolarOficial =
    (Array.isArray(dolares) &&
      dolares.find((dolar) => dolar.casa === "oficial")?.venta) ||
    0;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleCalculo(value, isDolarToPeso);
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

  return (
    <CalculadoraContainer>
      <CotizacionActual style={{gap: "1rem"}}>
        <InputDiv>
          <p>{isDolarToPeso ? "Dolar" : "Pesos"}</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </InputDiv>
        <ExchangeIcon
          size={"30px"}
          cursor={"pointer"}
          onClick={handleExchange}
          order={2}
        />

        <InputDiv>
          <p>{isDolarToPeso ? "Pesos" : "Dolar"}</p>
          <div style={{height: "100%", alignContent: "center"}}>
            <p>{formatNumber(calculo)}</p>
          </div>
        </InputDiv>
      </CotizacionActual>
    </CalculadoraContainer>
  );
};
