import styled from "styled-components";

export const DolarCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #daeef3;
  width: 250px;
  height: 180px;
  border-radius: 10px;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
  }
`;

export const DolarCotizacion = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: start;
  font-size: 20px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 40px;
    border-top: 0px;
  }
`;
