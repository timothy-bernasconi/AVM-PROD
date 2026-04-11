"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Detail-Vehicule.module.scss"; 

const VehiculeDetail = ({ params }) => {
  const { id } = params;
  const [vehicule, setVehicule] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    // Vérifie bien que le nom du fichier est data_vehicules.json comme pour la galerie
    fetch("/data_vehicules.json")
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger les données");
        return res.json();
      })
      .then((data) => {
        const trouve = data.find((v) => v.id.toString() === id);
        setVehicule(trouve);
      })
      .catch((err) => setErreur(err.message));
  }, [id]);

  if (erreur) return <p className={styles.error}>Erreur : {erreur}</p>;
  if (!vehicule) return <p className={styles.loading}>Chargement du véhicule...</p>;

  return (
    <div className={styles['vehicule-detail']}>
      {/* Retour vers la liste (vérifie si ton URL est /vehicule ou /collection) */}
      <Link href="/vehicule" className={styles['back-link']}>
        ← Retour à la collection
      </Link>
      
      <div className={styles['detail-container']}>
        <div className={styles['image-section']}>
          <img src={vehicule.image} alt={vehicule.nom} />
          <div className={styles.type}>{vehicule.categorie}</div>
          <div className={styles['vehicule-name']}>{vehicule.nom}</div>
        </div>

        <div className={styles['info-section']}>
          <span className={styles.category}>{vehicule.categorie}</span>
          <h1>{vehicule.nom}</h1>
          
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{vehicule.description || "Aucune description disponible pour ce modèle."}</p>
          </div>

          <ul className={styles.specs}>
            <li><strong>Année :</strong> {vehicule.annee || "N/A"}</li>
            <li><strong>Moteur :</strong> {vehicule.moteur || "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;