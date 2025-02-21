import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  border-top: 1px solid #f1f1f1;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1e1e1e;
  color: #f1f1f1;
  .social-icons {
    display: flex;
    gap: 15px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
    text-align: center;
    bottom: auto;
    .contact-info {
      align-items: center;
      margin-top: 10px;
    }
  }
`;
