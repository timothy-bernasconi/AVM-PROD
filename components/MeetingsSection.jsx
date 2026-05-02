'use client';

import React from 'react';
import CountDown from './CountDown';
import styles from './Meeting.module.scss';

export default function MeetingsSection({ 
  backgroundImage = "/assets/jeeps-bg.png" 
}) {
  return (
    <section 
      className={styles['meetings-page']} 
      style={{ '--bg-image': `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>Les 20 ans de l'AVM</h2>

        <div className={styles.presentation}>
          <p>
            Préparez-vous à une édition historique ! En septembre, on ne se contente pas de se retrouver : 
            on fête deux décennies de passion, de rencontres et de souvenirs à vos côtés. 
            Bloquez vos agendas, le festival s’annonce légendaire.
          </p>
        </div>

        <CountDown />
      </div>
    </section>
  );
}