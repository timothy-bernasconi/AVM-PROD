"use client";

import React, { useState } from 'react'; // Fix 1 : Import de useState
import styles from './SocialMedia.module.scss';

export default function SocialMediaSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles['social-media-page']}>
      <h2>Suivez-nous sur nos réseaux !</h2>
      <span>Découvrez toute l'actualité de notre association sur Facebook et Instagram !</span>
      
      <div className={styles.link}>
        <a href="https://www.facebook.com/profile.php?id=100069083198930" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
          <i className='fa-brands fa-instagram'></i>
        </a>
      </div>

      <div className={styles['wrapper-social-media']}>
        <img src="/assets/sm-1.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-1.jpg")} style={{ cursor: 'pointer' }} />
        <img src="/assets/sm-2.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-2.jpg")} style={{ cursor: 'pointer' }} />
        <img src="/assets/sm-3.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-3.jpg")} style={{ cursor: 'pointer' }} />
        <img src="/assets/sm-4.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-4.jpg")} style={{ cursor: 'pointer' }} />
        <img src="/assets/sm-5.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-5.jpg")} style={{ cursor: 'pointer' }} />
        <img src="/assets/sm-6.jpg" alt="" onClick={() => setSelectedImg("/assets/sm-6.jpg")} style={{ cursor: 'pointer' }} />
      </div>

      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <button className={styles.lightboxClose} onClick={() => setSelectedImg(null)}>✕</button>
          <img src={selectedImg} alt="agrandie" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}