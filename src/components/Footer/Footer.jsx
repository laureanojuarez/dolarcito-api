import {FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import {FooterStyled} from "./FooterStyled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="contact-info">
        <p>Contacto: laureanojuarez69@gmail.com</p>
        <p>Tel: +54 341 3200859</p>
      </div>
      <div className="social-icons">
        <a
          href="https://instagram.com/laureanojuarez_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={"30px"} color="#f1f1f1" />
        </a>
      </div>
    </FooterStyled>
  );
};
