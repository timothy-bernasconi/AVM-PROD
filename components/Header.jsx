"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link href="/">
            <img src="/assets/avm-logo-blanc.webp" alt="Logo AVM 74" />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div className={`list ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/association">L'association</Link>
            </li>
            <li>
              <Link href="/vehicule">Nos Véhicules</Link>
            </li>
            <li>
              <Link href="/souvenirs">Nos Souvenirs</Link>
            </li>
            <li>
              <Link href="/contact">Nous Rejoindre</Link>
            </li>
            
          </ul>
        </div>

        <div className={`social-media ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
