import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import {
  CalculadoraContainer,
  CotizacionActual,
  InputDiv,
} from "./calculadora-styles";
import {useState, useContext} from "react";
import {DolarContext} from "../../context/DolarContext";

export const Calculadora = () => {
  const dolares = useContext(DolarContext);
  const [inputValue, setInputValue] = useState("");
  const [calculo, setCalculo] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleCalculo(value);
  };

  const handleCalculo = (value) => {
    if (value) {
      const dolarPrice = dolares.find(
        (dolar) => dolar.casa === "oficial"
      ).venta;
      setCalculo(value * dolarPrice);
    } else {
      setCalculo(0);
    }
  };

  return (
    <CalculadoraContainer>
      <CotizacionActual>
        <span>1 USD</span>
        <MdOutlineKeyboardDoubleArrowRight />
        <span>{dolares.find((dolar) => dolar.casa === "oficial")?.venta}</span>
      </CotizacionActual>

      <CotizacionActual style={{gap: "1rem"}}>
        <InputDiv>
          <p>Dolar</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </InputDiv>

        <InputDiv>
          <p>Pesos</p>
          <p>{calculo}</p>
        </InputDiv>
      </CotizacionActual>
    </CalculadoraContainer>
  );
};
