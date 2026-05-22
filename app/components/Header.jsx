"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from './Header.module.scss'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles['header-logo']}>
          <Link href="/">
            <img src="/assets/avm-logo-blanc.webp" alt="Logo AVM 74" />
          </Link>
        </div>

        <button
          className={styles['menu-toggle']}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav className={`${styles.list} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
            </li>
            <li>
              <Link href="/association" onClick={() => setIsOpen(false)}>L'association</Link>
            </li>
            <li>
              <Link href="/vehicule" onClick={() => setIsOpen(false)}>Nos Véhicules</Link>
            </li>
            <li>
              <Link href="/souvenirs" onClick={() => setIsOpen(false)}>Nos Souvenirs</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Nous Rejoindre</Link>
            </li>
          </ul>
        </nav>

        <div className={`${styles['social-media']} ${isOpen ? styles.open : ""}`}>
          <ul>
          
            <a href="https://www.facebook.com/profile.php?id=100069083198930"><li><i className="fa-brands fa-facebook"></i>
           
            </li></a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;