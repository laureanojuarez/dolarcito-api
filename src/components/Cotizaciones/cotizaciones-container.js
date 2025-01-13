import styled from "styled-components";

export const CotizacionesContainer = styled.section`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  gap: 25px;
  color: white;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 10px;
  }
`;
