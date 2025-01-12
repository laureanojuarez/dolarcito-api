import styled from "styled-components";

export const CalculadoraContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CotizacionActual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80px;
  font-size: 1.2em;
  border-radius: 5px;
  background-color: white;
  color: black;

  & input {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
