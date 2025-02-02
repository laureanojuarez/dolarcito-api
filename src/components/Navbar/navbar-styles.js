import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #ccc;
  color: #f1f1f1;
  & img {
    width: 40px;
  }

  & h1 {
    font-size: 1.5em;
    margin-left: 0.5rem;
    margin-top: 5px;
  }
`;

export const NameLogo = styled.div`
  display: flex;
  align-items: center;
`;
