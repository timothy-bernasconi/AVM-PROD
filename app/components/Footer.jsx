import React from "react";
import Link from "next/link"; 
import styles from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        
        <div className={styles['footer-main-content']}>
          
          <div className={styles['brand-info']}>
            <span className={styles['brand-name']}>AVM 74</span> <br /> <br /> <br />
            <span className={styles['brand-tagline']}>Amicale des Véhicules Militaires de Haute-Savoie</span>
          </div>
     
          <div className={styles['footer-links-wrapper']}>
            <div className={styles['footer-column']}>
              <h3 className={styles['footer-title']}>AVM74</h3>
              <ul>
                <li><Link href="/association">L'Association</Link></li>
                <li><Link href="/vehicules">Nos Véhicules</Link></li>
                <li><Link href="/rassemblements">Rassemblements</Link></li>
                <li><Link href="/souvenirs">Nos Souvenirs</Link></li>
              </ul>
            </div>
            <div className={styles['footer-column']}>
              <h3 className={styles['footer-title']}>Légal</h3>
              <ul>
                <li><Link href="/contact">Contact</Link></li>
                <li><a href="/politique">Politique de confidentialité</a></li>
                <li><a href="/mentions">Mentions Légales</a></li>
              </ul>
            </div>
          </div> 

          <div className={styles['footer-brand']}>
            <Link href="/">
              <img 
                src="/assets/avm-logo-blanc.webp" 
                alt="Logo AVM 74" 
                className={styles['footer-logo-large']} 
              />
            </Link>
          </div>
        </div>

        <hr className={styles['footer-separator']} />

        <div className={styles['footer-legal-bar']}>
          <p className={styles['footer-copy']}>© {currentYear} AVM-74™. Tous droits réservés.</p>
          <div className={styles['footer-socials']}>
            
             <a href="https://www.facebook.com/profile.php?id=100069083198930" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="mailto:avm74@hotmail.fr"> <i className="fa-solid fa-envelope"></i></a>
                      </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;