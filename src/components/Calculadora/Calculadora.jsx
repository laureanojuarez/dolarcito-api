import {
  CalculadoraContainer,
  CotizacionActual,
  ExchangeIcon,
  InputDiv,
} from "./calculadora-styles";
import {useCalculadora} from "../../hooks/useCalculadora";
import {useSelector} from "react-redux";

export const Calculadora = () => {
  const dolares = useSelector((state) => state.dolar.dolares);
  const {
    inputValue,
    calculo,
    isDolarToPeso,
    handleInputChange,
    handleExchange,
    formatNumber,
  } = useCalculadora(dolares);

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
