import React from "react";
import '../assets/styles/Footer.scss';
import logo from '../assets/images/logo.jpeg'; // Ajusta la ruta a tu logo

// Definir las props que Footer va a recibir
interface FooterProps {
  onLinkClick: (section: string) => void;
  
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <div>
      <footer className="item-container">
        <div className="about-section2">
          
            <div className="image-wrapper">
              <img src={logo} alt="Avatar" />
              <h4>LATINCOINS</h4>
            </div>
            <div className="footer-center">
                <h2>Enlaces rápidos</h2>
                <ul className="footer-links">
                <li><a href="#1" onClick={(event) => { event.preventDefault(); onLinkClick("sagrilaft"); }}>SAGRILAFT</a></li>

                  <li><a href="hola" onClick={() => onLinkClick("política-antilavado")}>Política AntiLavado</a></li>
                  <li><a href="#" onClick={() => onLinkClick("política-privacidad")}>Política De Privacidad</a></li>
                  <li><a href="#" onClick={() => onLinkClick("terminos-p2p")}>Términos y Condiciones P2P</a></li>
                </ul>
            </div>
            <div className="footer-center">
              <h2>Contacto</h2>
              <div className="footer-links">
                <ul className="footer-links2">
                <p>Puerto Asís, Colombia</p>
                  <p>Teléfono: +57-320-932-9959</p>
                  
                  <p>Correo: comercio@latincoins.com.co</p>
                
                </ul>

              </div>
          
            </div>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
