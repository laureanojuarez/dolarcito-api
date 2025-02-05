import styled from "styled-components";
import {LuArrowLeftRight} from "react-icons/lu";

export const CalculadoraContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const CotizacionActual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 80px;
  font-size: 1.2em;
  border-radius: 10px;
  background-color: white;
  color: black;

  & input {
    width: 100%;
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
