import styled from "styled-components";

export const DolarCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid #daeef3;
  width: 250px;
  border-radius: 10px;

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
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  border-top: 1px solid;
  padding: 10px 20px;

  @media (max-width: 768px) {
    width: auto;
    gap: 40px;
    border-top: 0px;
  }
`;
