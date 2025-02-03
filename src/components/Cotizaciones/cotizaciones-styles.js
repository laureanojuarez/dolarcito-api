import styled from "styled-components";

export const CotizacionesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  color: white;
  width: 80%;

  h1,
  p {
    font-size: 1.5rem;
  }
`;

export const DolarBlue = styled.div`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid white;
  box-shadow: 0px 2px 17px -5px rgba(0, 0, 0, 0.75);
  background-color: #1e1e1e;
  padding: 1rem;
`;

export const DolaresSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
`;

// CAMBIAR TODO A GRID ( INCLUIDO EL DOLAR BLUE ) # HACER DE 0

export const DolarItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid white;
  box-shadow: 0px 1px 50px -3px rgba(0, 0, 0, 0.75);
  color: white;
  background-color: #2e2e2e;

  h1 {
    text-align: center;
  }
`;

export const Valores = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 25px;
  padding: 0.5rem;
`;
