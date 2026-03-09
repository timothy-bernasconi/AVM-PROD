"use client";

import React from 'react';
import Carousel from './Carousel';

export default function VehiculesSection() {
  return (
    <section className="vehicules-page">
      <img src="/assets/rassemblements-2.jpg" alt="" />
      <h2>Nos véhicules</h2>

      <div className="presentation">
        <p>Sur cette page d’accueil, l’association vous invite à découvrir une partie de sa collection de véhicules militaires, témoins d’époques et de missions variées. Chaque engin, qu’il s’agisse de planners légers, de jeeps tout-terrain ou de motos rapides, reflète l’engagement de ses membres pour la préservation du patrimoine et la mémoire des forces armées.</p>
      </div>

      <Carousel/>
    </section>
  );
}
