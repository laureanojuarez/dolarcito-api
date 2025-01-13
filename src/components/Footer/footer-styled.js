import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  hr {
    width: 100%;
    border: 1px solid #daeef3;
  }

  & p {
    text-align: center;
    color: #f1f1f1;
    font-size: 20px;
  }
`;
