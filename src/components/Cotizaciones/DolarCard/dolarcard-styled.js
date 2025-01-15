import styled from "styled-components";

export const DolarCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #daeef3;
  width: 250px;
  height: 150px;
  border-radius: 10px;
  color: #f1f1f1;
  & hr {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DolarCotizacion = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  border-top: 1px solid;
  width: 100%;
  padding-top: 20px;

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
