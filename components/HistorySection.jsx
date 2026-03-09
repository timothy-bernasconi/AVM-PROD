"use client";

import React from 'react';
import Link from 'next/link';

export default function HistorySection() {
  return (
    <section className="history-page">
      <h2>Nos Valeurs</h2>
      <div className="presentation">
        <p>Depuis sa création, l’association s’engage à préserver et partager l’histoire militaire à travers des actions concrètes et des rassemblements. Chaque initiative, qu’il s’agisse de restaurer du matériel, d’organiser des événements ou de transmettre le savoir. Ces valeurs témoignent de la passion de ses membres pour la mémoire et pour le patrimoine des forces armées.</p>
      </div>
      <Link href="/association"><button className='button-vehicule'>Découvrez notre histoire</button></Link>
    </section>
  );
}
