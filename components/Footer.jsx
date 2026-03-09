import React from "react";
import Link from "next/link"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-main-content">
          
          <div className="brand-info">
            <span className="brand-name">AVM 74</span> <br /> <br /> <br />
            <span className="brand-tagline">Amicale des Véhicules Militaires de Haute-Savoie</span>
          </div>
     
         
          <div className="footer-links-wrapper">
            <div className="footer-column">
              <h3 className="footer-title">AVM74</h3>
              <ul>
                <li><a href="#">L'Association</a></li>
                <li><a href="#">Nos Véhicules</a></li>
                <li><a href="#">Rassemblements</a></li>
                <li><a href="#">Nos Souvenirs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Légal</h3>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Confidentialité</a></li>
              </ul>
            </div>
          </div> 

          <div className="footer-brand">
            <Link href="/">
              <img src="/assets/avm-logo-blanc.webp" alt="Logo AVM 74" className="footer-logo-large" />
            </Link>
          </div>
        </div>

        <hr className="footer-separator" />

        <div className="footer-legal-bar">
          <p className="footer-copy">© {currentYear} AVM-74™. Tous droits réservés.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
