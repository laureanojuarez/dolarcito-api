import styled from "styled-components";

export const DolarCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid #daeef3;
  width: 250px;
  height: 175px;
  border-radius: 15px;
  color: #f1f1f1;

  & hr {
    width: 100%;
  }
`;

export const DolarCotizacion = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
`;
