import {
  CalculadoraContainer,
  CotizacionActual,
  ExchangeIcon,
  InputDiv,
} from "./calculadora-styles";
import {useCalculadora} from "./useCalculadora";

export const Calculadora = () => {
  const {
    inputValue,
    calculo,
    isDolarToPeso,
    handleInputChange,
    handleExchange,
    formatNumber,
  } = useCalculadora();

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
