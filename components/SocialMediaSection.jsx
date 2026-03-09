"use client";

import React from 'react';

export default function SocialMediaSection() {
  return (
    <section className='social-media-page'>
      <h2>Suivez-nous sur nos réseaux !</h2>
      <span>Découvrez toute l'actualité de notre association sur Facebook et Instagram !</span>

      <div className="wrapper-social-media">
        <img src="/assets/sm-1.jpg" alt="" />
        <img src="/assets/sm-2.jpg" alt="" />
        <img src="/assets/sm-3.jpg" alt="" />
        <img src="/assets/sm-4.jpg" alt="" />
        <img src="/assets/sm-5.jpg" alt="" />
        <img src="/assets/sm-6.jpg" alt="" />
      </div>

      <div className="link">
        <a href="https://www.facebook.com/profile.php?id=100069083198930">
          <p><i className="fab fa-facebook"></i> AVM 74: amicale des véhicules militaires de Haute-Savoie</p>
        </a>
      </div>
    </section>
  );
}
