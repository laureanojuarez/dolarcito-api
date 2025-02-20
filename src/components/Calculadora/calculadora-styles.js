import styled from "styled-components";
import {LuArrowLeftRight} from "react-icons/lu";

export const CalculadoraContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CotizacionActual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 80px;
  font-size: 1.2em;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    width: 100%;
  }

  & input {
    height: 100%;
    border: none;
    font-size: 1.2em;
    text-align: center;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
  }
`;

export const ExchangeIcon = styled(LuArrowLeftRight)`
  cursor: pointer;
`;
