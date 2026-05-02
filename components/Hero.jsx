'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = ({ titre, videoSrc, fallbackImage }) => {
  return (
    <section className={styles['home-page']}>
     
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage}
        className={styles.bgVideo}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      <div className={styles.container}>
        <h1>{titre || "AVM - 74"}</h1>
        <h2>Amicale des Véhicules Militaires de Haute-Savoie</h2>
        <p>
          Une vingtaine de passionnés réunis autour de l'histoire de la mécanique 
          et du patrimoine militaire de la Seconde Guerre Mondiale
        </p>
        
        <div className={styles.buttons}>
          <Link href="/association">
            <button className={styles.full}>Découvrir l'association</button>
          </Link>
          <Link href="/vehicule">
            <button className={styles.empty}>Nos Véhicules</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;