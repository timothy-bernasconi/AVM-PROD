"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import "../../scss/components/vehicule-detail.scss"; 

const VehiculeDetail = ({ params }) => {
  const { id } = params;
  const [vehicule, setVehicule] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch("/vehicules.json")
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

  if (erreur) return <p>Erreur : {erreur}</p>;
  if (!vehicule) return <p>Chargement du véhicule...</p>;

  return (
    <div className="vehicule-detail">
      <Link href="/vehicules" className="back-link">
        ← Retour à la collection
      </Link>
      
      <div className="detail-container">
        <div className="image-section">
          <img src={vehicule.image} alt={vehicule.nom} />
          <div className="type">{vehicule.categorie}</div>
          <div className="vehicule-name">{vehicule.nom}</div>
        </div>

        <div className="info-section">
          <span className="category">{vehicule.categorie}</span>
          <h1>{vehicule.nom}</h1>
          
          <div className="description">
            <h3>Description</h3>
            <p>{vehicule.description || "Aucune description disponible pour ce modèle."}</p>
          </div>

          <ul className="specs">
            <li><strong>Année :</strong> {vehicule.annee || "N/A"}</li>
            <li><strong>Moteur :</strong> {vehicule.moteur || "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;
