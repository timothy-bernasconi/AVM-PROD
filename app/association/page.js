// app/association/page.js
"use client"; // nécessaire si tu utilises useState ou useEffect
import '../../scss/pages/association-page.scss';
import { useState, useEffect } from "react";


export default function AssociationPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="detailed-association-page">
      <section className="detailed-association-section">
        <div className="detailed-association-banner"></div>

        {/* --- INTRO --- */}
        <div className="detailed-association-intro">
          <div className="detailed-association-text">
            <h2>Qui sommes nous ?</h2>
            <p className="detailed-association-p-1">
              L'AVM-74 est une association loi 1901 créée en octobre 2005, regroupant une vingtaine d'amis passionnés par les véhicules militaires de la Seconde Guerre mondiale.
            </p>
            <p className="detailed-association-p-2">
              Notre mission est de préserver, restaurer et présenter au public ces témoins exceptionnels de l'histoire.
            </p>
            <br />
            <p className="detailed-association-highlighted">
              "Pour les anciens, c'est l'occasion de se remémorer leur passé ; pour les jeunes générations, c'est une découverte fascinante." -Sam
            </p>
          </div>
        </div>

  
        <div className="detailed-association-history-container">
          <div className="detailed-association-history">
            <h2 className="detailed-association-h2">Notre Histoire</h2>
            <p className="detailed-association-value-p">20 ans de passion et de dévouement</p>

         
            <div className="detailed-association-value-card">
              <div className="history-card-image">
                <img src="/assets/assos.jpg" alt="" />
              </div>
              <div className="history-card-text">
                <div className="history-card-year">2005</div>
                <h3 className="history-card-h3">Naissance de l'AVM-74</h3>
                <p className="history-card-p">
                  Un groupe d'amis passionnés fonde l'association en Haute-Savoie avec pour mission de préserver le patrimoine militaire de la WW2.
                </p>
              </div>
            </div>

      
            <div className="detailed-association-value-card inverse">
              <div className="history-card-image">
                <img src="/assets/sm-1.jpg" alt="" />
              </div>
              <div className="history-card-text">
                <div className="history-card-year">2006-2010</div>
                <h3 className="history-card-h3">Les Premières Restaurations</h3>
                <p className="history-card-p">
                  Constitution de notre première collection avec l'acquisition et la restauration de jeeps Willys et motos Harley-Davidson.
                </p>
              </div>
            </div>

           
            <div className="detailed-association-value-card">
              <div className="history-card-image">
                <img src="/assets/rassemblements-1.jpg" alt="" />
              </div>
              <div className="history-card-text">
                <div className="history-card-year">2011-2015</div>
                <h3 className="history-card-h3">Rassemblements en Europe</h3>
                <p className="history-card-p">
                  Début de nos participations aux grands rassemblements en Suisse, Belgique et Italie.
                </p>
              </div>
            </div>

        
            <div className="detailed-association-value-card inverse">
              <div className="history-card-image">
                <img src="/assets/rassemblements-2.jpg" alt="" />
              </div>
              <div className="history-card-text">
                <div className="history-card-year">2026</div>
                <h3 className="history-card-h3">Nos 20 ans</h3>
                <p className="history-card-p">
                  Poursuite de notre mission avec une collection remarquable et une présence active sur la scène internationale.
                </p>
              </div>
            </div>
          </div>
        </div>

    
        <div className="detailed-association-values">
          <h2>Nos valeurs</h2>
          <div className="values-grid">
            {["Authenticité", "Passion", "Transmission", "Excellence"].map((v, i) => (
              <div key={i} className="value-card">
                <i className="fa-solid fa-bullseye"></i>
                <h3>{v}</h3>
                <p>
                 
                  {v === "Authenticité" && "Chaque restauration respecte scrupuleusement les caractéristiques techniques d'origine."}
                  {v === "Passion" && "Du moteur à l'histoire, chaque membre apporte son expertise et partage sa passion."}
                  {v === "Transmission" && "Faire découvrir ce patrimoine aux jeunes générations et créer du lien entre passionnés."}
                  {v === "Excellence" && "Un travail méticuleux qui fait de nos véhicules des pièces de musées roulantes."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='detailed-association-members'>
          

        </div>

   
      
      </section>
    </div>
  );
}
