"use client";

import React from 'react';
import Link from 'next/link';


export default function HomeSection() {
  return (
    <>
      <section className="home-page">
        <img src="/assets/jeeps-bg.png" alt="jeep" />
        <div className="container">
          <h1>AVM - 74</h1>
          <h2>Amicale des Véhicules Militaires de Haute-Savoie</h2>
          <p>Une vingtaine de passionnés réunis autour de l'histoire de la mécanique et du patrimoine militaire de la Seconde Guerre Mondiale</p>
          <br />
          <div className="buttons">
            <Link href="/association"><button className="full">Découvrir l'association</button></Link>
            <Link href="/contact"><button className="empty">Nous rejoindre</button></Link>
          </div>
        </div>
      </section>

      <section className="us-page">
        <div className="presentation">
          <h2>Qui sommes nous ?</h2>
          <p>Nous sommes une amicale créée officiellement en <span>octobre 2005</span> afin de regrouper une vingtaine d'amis passionnés de véhicules militaires. La mécanique, l'équipement, le matériel, les cérémonies, l'histoire, tout le monde y trouve son compte</p>
          <p>Nous participons à divers rassemblements en <span>France, Suisse et Belgique </span>auxquels nous sommes invités par des groupes que nous connaissons, sinon c'est l'occasion pour nous de faire connaissance</p>
          <p>Nous essayons toujours de soigner nos collections dans un souci du <span>détail et surtout d'authenticité</span> pour le public à qui nous le présentons.</p>
          <p>C'est avant tout l'occasion de partager avec les gens de l'histoire de cette incroyable armada qui était déployée durant <span>la Seconde Guerre Mondiale.</span> Cela rappelle des souvenirs pour les anciens tandis que les jeunes enfants découvrent ce matériel peu commun de nos jours.</p>
        </div>

        <div className="container">
          <div className="icone">
            <i className="fa-solid fa-circle-user"></i>
            <h3>20</h3>
            <p>Membres passionés</p>
          </div>
          <div className="icone">
            <i className="fa-solid fa-calendar"></i>
            <h3>2005</h3>
            <p>Année de création</p>
          </div>
          <div className="icone">
            <i className="fa-solid fa-car"></i>
            <h3>15</h3>
            <p>Véhicules</p>
          </div>
          <div className="icone">
            <i className="fa-solid fa-circle-check"></i>
            <h3>100%</h3>
            <p>Authenticité</p>
          </div>
        </div>
      </section>
    </>
  );
}
