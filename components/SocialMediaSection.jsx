"use client";

import React from 'react';
import styles from './SocialMedia.module.scss'

export default function SocialMediaSection() {
  return (
    <section className={styles['social-media-page']}>
      <h2>Suivez-nous sur nos réseaux !</h2>
      <span>Découvrez toute l'actualité de notre association sur Facebook et Instagram !</span>
      
      <div className={styles.link}>
        <a href="https://www.facebook.com/profile.php?id=100069083198930">
          <i className="fa-brands fa-facebook"></i>
          <i className='fa-brands fa-instagram'></i>
        </a>
      </div>

      <div className={styles['wrapper-social-media']}>
        <img src="/assets/sm-1.jpg" alt="" />
        <img src="/assets/sm-2.jpg" alt="" />
        <img src="/assets/sm-3.jpg" alt="" />
        <img src="/assets/sm-4.jpg" alt="" />
        <img src="/assets/sm-5.jpg" alt="" />
        <img src="/assets/sm-6.jpg" alt="" />
      </div>

      
    </section>
  );
}
