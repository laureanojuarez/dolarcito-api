import styled from "styled-components";

export const CotizacionesContainer = styled.section`
  display: flex;
  align-items: center;
  color: white;
  width: 80%;
  margin: 0 auto;
  h1,
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DolaresSection = styled.section`
  grid-area: otrosDolares;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
`;

export const DolarItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid white;
  box-shadow: 0px 1px 50px -3px rgba(0, 0, 0, 0.75);
  color: white;
  background-color: ${({isBlue}) => (isBlue ? "#1e1e1e" : "#2e2e2e")};
  grid-row: ${({isBlue}) => (isBlue ? "span 2" : "span 1")};

  h1 {
    text-align: center;
  }
`;

export const Valores = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
