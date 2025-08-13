import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcDinersClub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Thynk Travel</h3>
          <p>
            Somos apaixonados por transformar seus sonhos em realidade. Viagens
            personalizadas, seguras e inesquecíveis.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Telefone: (11) 99999-9999</p>
          <p>Email: contato@thynktravel.com</p>
        </div>

        <div className="footer-social">
          <h4>Redes sociais</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-payment">
          <h4>Formas de pagamento</h4>
          <div className="payment-icons">
            <a href="#">
              <FaCcVisa />
            </a>
            <a href="#">
              <FaCcMastercard />
            </a>
            <a href="#">
              <FaCcDinersClub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Thynk Travel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
