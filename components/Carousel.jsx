"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from './Carousel.module.scss';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "/assets/vehicule/dodge-wc-52.jpg", title: "Dodge Wc 52" },
    { id: 2, image: "/assets/vehicule/harley.jpg", title: "Harley WLA" },
    { id: 3, image: "/assets/vehicule/half-track-m16.jpg", title: "Half Track M16" },
    { id: 4, image: "/assets/vehicule/willys-mb.jpg", title: "Willy MB" },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer); 
  }, [nextSlide]); // On retire currentSlide d'ici pour éviter de réinitialiser le timer à chaque seconde

  return (
    <section className={styles['carousel-fullscreen']}> 
      <div className={styles['slider-wrapper']}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className={styles['slide-caption']}> 
              <h3>{slide.title}</h3>
            </div>
          </div>
        ))}

        <button className={styles.prev} onClick={prevSlide} aria-label="Précédent">❮</button>
        <button className={styles.next} onClick={nextSlide} aria-label="Suivant">❯</button>
      </div>
    </section>
  );
};

export default Carousel;