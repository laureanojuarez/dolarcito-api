import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import {
  CalculadoraContainer,
  CotizacionActual,
  InputDiv,
} from "./calculadora-styles";

export const Calculadora = () => {
  return (
    <CalculadoraContainer>
      <CotizacionActual>
        <span>1 USD</span>
        <MdOutlineKeyboardDoubleArrowRight />
        <span>1500 SOPES</span>
      </CotizacionActual>

      <CotizacionActual style={{gap: "5rem"}}>
        <InputDiv>
          <p>Dolar</p>
          <input type="text" />
        </InputDiv>

        <InputDiv>
          <p>Pesos</p>
          <p>1</p>
        </InputDiv>
      </CotizacionActual>
    </CalculadoraContainer>
  );
};
