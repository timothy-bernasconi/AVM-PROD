"use client"; 
import styles from './page.module.scss';
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link"; 

const Vehicules = () => {
  const [vehicules, setVehicules] = useState([]);
  const [erreur, setErreur] = useState(null);
  const [categorieActive, setCategorieActive] = useState("Tous");

  useEffect(() => {
    fetch("/data_vehicules.json") 
      .then((response) => {
        if (!response.ok) throw new Error("Erreur de chargement des véhicules");
        return response.json();
      })
      .then((data) => setVehicules(data))
      .catch((err) => setErreur(err.message));
  }, []);

  const categories = useMemo(
    () => ["Tous", ...new Set(vehicules.map((v) => v.categorie))],
    [vehicules]
  );

  const vehiculesFiltres = useMemo(() => {
    if (categorieActive === "Tous") return vehicules;
    return vehicules.filter((v) => v.categorie === categorieActive);
  }, [vehicules, categorieActive]);


  if (erreur) return (
    <div style={{color: 'white', padding: '100px'}}>
      <h1>Oups !</h1>
      <p>Détail de l'erreur : {erreur}</p>
      <p>Vérifie si <a href="/data_vehicules.json" style={{color: 'gold'}}>ce lien</a> affiche tes données.</p>
    </div>
  );

  return (
    <div className={styles.test}>
      <section className={styles.collection}>
        <div className={styles['collection-container']}>
          <h1>La collection</h1>
        </div>

        <div className={styles.types}>
          {categories.map((cat) => (
            <h2
              key={cat}
              className={cat === categorieActive ? styles.active : ""}
              onClick={() => setCategorieActive(cat)}
            >
              {cat}
            </h2>
          ))}
        </div>

        <div id="container-galerie" className={styles.container}>
          {vehiculesFiltres.map((v) => (
            <Link key={v.id} href={`/vehicule/${v.id}`} className={styles['v-item']}>
              <img src={v.image} alt={v.nom} />
              <div className={styles['v-overlay']}>
                <span>{v.nom}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vehicules;