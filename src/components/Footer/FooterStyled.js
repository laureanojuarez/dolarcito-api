import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 10vh;
  border-top: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #1e1e1e;
  gap: 5px;
  color: #f1f1f1;
  .social-icons {
    display: flex;
    gap: 15px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
    text-align: center;

    .contact-info {
      align-items: center;
      margin-top: 10px;
    }
  }
`;
