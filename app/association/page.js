"use client"; 
import styles from './page.module.scss';
import { useState, useEffect } from "react";

export default function AssociationPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className={styles['detailed-association-page']}>
      <section className={styles['detailed-association-section']}>
        <div className={styles['detailed-association-banner']}></div>

        <div className={styles['detailed-association-intro']}>
          <div className={styles['detailed-association-text']}>
            <h2>Qui sommes nous ?</h2>
            <p className={styles['detailed-association-p-1']}>
              L'AVM-74 est une association loi 1901 créée en octobre 2005, regroupant une vingtaine d'amis passionnés par les véhicules militaires de la Seconde Guerre mondiale. Nous participons à divers rassemblements en <span>France, Suisse et Belgique </span>auxquels nous sommes invités par des groupes que nous connaissons.
            </p>
            <p className={styles['detailed-association-p-2']}>
            Nous essayons toujours de soigner nos collections dans un souci du <span>détail et surtout d'authenticité</span> pour le public à qui nous le présentons. C'est avant tout une volonté de partager avec les gens de l'histoire de cette incroyable armada qui était déployée durant <span>la Seconde Guerre Mondiale. </span>
            </p>
            <br />
            <p className={styles['detailed-association-highlighted']}>
              "Cela rappelle des souvenirs pour les anciens tandis que les jeunes enfants découvrent ce matériel peu commun de nos jours." -Sam
            </p>
          </div>
        </div>

        <div className={styles['detailed-association-history-container']}>
          <div className={styles['detailed-association-history']}>
            <h2 className={styles['detailed-association-h2']}>Notre Histoire</h2>
            <p className={styles['detailed-association-value-p']}>20 ans de passion et de dévouement</p>

            <div className={styles['detailed-association-value-card']}>
              <div className={styles['history-card-image']}>
                <img src="/assets/assos.jpg" alt="" />
              </div>
              <div className={styles['history-card-text']}>
                <div className={styles['history-card-year']}>2005</div>
                <h3 className={styles['history-card-h3']}>Naissance de l'AVM-74</h3>
                <p className={styles['history-card-p']}>
                  Un groupe d'amis passionnés fonde l'association en Haute-Savoie avec pour mission de préserver le patrimoine militaire de la WW2.
                </p>
              </div>
            </div>

            <div className={`${styles['detailed-association-value-card']} ${styles.inverse}`}>
              <div className={styles['history-card-image']}>
                <img src="/assets/sm-1.jpg" alt="" />
              </div>
              <div className={styles['history-card-text']}>
                <div className={styles['history-card-year']}>2006-2010</div>
                <h3 className={styles['history-card-h3']}>Les Premières Restaurations</h3>
                <p className={styles['history-card-p']}>
                  Constitution de notre première collection avec l'acquisition et la restauration de jeeps Willys et motos Harley-Davidson.
                </p>
              </div>
            </div>

            <div className={styles['detailed-association-value-card']}>
              <div className={styles['history-card-image']}>
                <img src="/assets/rassemblements-1.jpg" alt="" />
              </div>
              <div className={styles['history-card-text']}>
                <div className={styles['history-card-year']}>2011-2015</div>
                <h3 className={styles['history-card-h3']}>Rassemblements en Europe</h3>
                <p className={styles['history-card-p']}>
                  Début de nos participations aux grands rassemblements en Suisse, Belgique et Italie.
                </p>
              </div>
            </div>

            <div className={`${styles['detailed-association-value-card']} ${styles.inverse}`}>
              <div className={styles['history-card-image']}>
                <img src="/assets/rassemblements-2.jpg" alt="" />
              </div>
              <div className={styles['history-card-text']}>
                <div className={styles['history-card-year']}>2026</div>
                <h3 className={styles['history-card-h3']}>Nos 20 ans</h3>
                <p className={styles['history-card-p']}>
                  Poursuite de notre mission avec une collection remarquable et une présence active sur la scène internationale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['detailed-association-values']}>
          <h2>Nos valeurs</h2>
          <p className={styles.text}>
            Depuis sa création, l’association s’engage à préserver et partager l’histoire militaire à travers des actions concrètes et des rassemblements. Chaque initiative, qu’il s’agisse de restaurer du matériel, d’organiser des événements ou de transmettre le savoir. Ces valeurs témoignent de la passion de ses membres pour la mémoire et pour le patrimoine des forces armées
          </p>
          
          <div className={styles['values-grid']}>
            {[
              {
                title: "Authenticité",
                icon: "fa-certificate", 
                text: "Chaque restauration respecte scrupuleusement les caractéristiques techniques d'origine."
              },
              {
                title: "Passion",
                icon: "fa-heart", 
                text: "Du moteur à l'histoire, chaque membre apporte son expertise et partage sa passion."
              },
              {
                title: "Transmission",
                icon: "fa-hands-holding", 
                text: "Faire découvrir ce patrimoine aux jeunes générations et créer du lien entre passionnés."
              },
              {
                title: "Excellence",
                icon: "fa-star", 
                text: "Un travail méticuleux qui fait de nos véhicules des pièces de musées roulantes."
              }
            ].map((v, i) => (
              <div key={i} className={styles['value-card']}>
                <i className={`fa-solid ${v.icon}`}></i>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['detailed-association-members']}>
        
        </div>
      </section>
    </div>
  );
}