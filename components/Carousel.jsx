"use client";

import React, { useState, useEffect, useCallback } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "/assets/planneur.png", title: "Véhicule 1" },
    { id: 2, image: "/assets/harley.jpg", title: "Véhicule 2" },
    { id: 3, image: "/assets/harley.jpg", title: "Véhicule 3" },
  ];

  const totalSlides = slides.length;

  // Fonctions de navigation simples
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Gestion du Timer : se réinitialise au clic pour éviter le lag
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer); 
  }, [nextSlide, currentSlide]); 

  return (
    <section className="carousel-fullscreen"> 
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="slide-caption"> 
              <h3>{slide.title}</h3>
            </div>
          </div>
        ))}

        <button className="prev" onClick={prevSlide} aria-label="Précédent">❮</button>
        <button className="next" onClick={nextSlide} aria-label="Suivant">❯</button>
      </div>
    </section>
  );
};

export default Carousel;