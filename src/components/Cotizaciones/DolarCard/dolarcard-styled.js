import styled from "styled-components";

export const DolarCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #daeef3;
  width: 250px;
  height: 175px;
  border-radius: 10px;
  color: #f1f1f1;
  padding: 5px;
  & hr {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
`;

export const DolarCotizacion = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-evenly;
  font-size: 20px;
  text-align: start;

  @media (max-width: 768px) {
    justify-content: start;
    gap: 40px;
  }
`;

export const MobileDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(33, 33, 33);
  padding: 5px;
  font-size: 0.8rem;
`;
