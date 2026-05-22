"use client";

import React from 'react';
import styles from './Association.module.scss'

export default function AssociationSection() {
  return (
    <section className={styles['association-page']}>
      <h2>Rejoignez l'AVM-74</h2>
      <span>Vous êtes passionné d'histoire militaire, de mécanique ou
simplement curieux ? Rejoignez notre amicale conviviale et
partagez votre passion avec nous !</span>

      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fa-solid fa-heart"></i>
          <h3>Passion</h3>
          <p>Mécanique, équipement,
matériel, cérémonies, histoire...
Chacun trouve son compte</p>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-users"></i>
          <h3>Convivialité</h3>
          <p>Rejoignez une amicale d'une
vingtaine de passionnés depuis
2005</p>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-flag"></i>
          <h3>Fidélité</h3>
          <p>Participez à nos sorties en
France, Suisse, Belgique.</p>
        </div>
      </div>

    <a href="/contact"> <button className='empty'>Je veux rejoindre l'AVM</button> </a>
    </section>
  );
}
