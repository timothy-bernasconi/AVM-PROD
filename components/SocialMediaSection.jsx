"use client";

import React from 'react';

export default function SocialMediaSection() {
  return (
    <section className='social-media-page'>
      <h2>Suivez-nous sur nos réseaux !</h2>
      <span>Découvrez toute l'actualité de notre association sur Facebook et Instagram !</span>
      
      <div className="link">
        <a href="https://www.facebook.com/profile.php?id=100069083198930">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>

      <div className="wrapper-social-media">
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
