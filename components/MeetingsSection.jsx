"use client";

import React from 'react';
import Link from 'next/link';

export default function MeetingsSection() {
  return (
    <section className="meetings-page">
      <h2>Rassemblements</h2>

      <div className="presentation">   
        <p>Nous ne nous contentons pas de <span>préserver des véhicules militaires </span>: nous organisons et participons également à de <span>nombreux rassemblements et événements militaires</span>, où passionnés et curieux peuvent se retrouver pour partager leur intérêt pour <span>le patrimoine militaire.</span> Ces occasions nous permettent de mettre en valeur nos véhicules, qu’il s’agisse de jeeps robustes, de planners légers ou de motos rapides, et de montrer <span>le savoir-faire </span>nécessaire à leur restauration et à leur entretien.</p>

        <p>Nous attachons une <span>grande importance</span> à transmettre <span>l’histoire et les valeurs</span> des forces armées, en faisant découvrir au public <span>l’évolution des équipements militaires </span>et les conditions d’engagement des soldats. À travers ces rassemblements, nous offrons une <span>expérience immersive,</span> où chaque véhicule devient un véritable témoin du passé, et chaque échange avec nos membres une occasion <span>d’apprendre et de partager.</span></p>
      </div>

      <Link href="/association"><button className='button-vehicule'>Découvrez nos prochains évènements</button></Link>
    </section>
  );
}
