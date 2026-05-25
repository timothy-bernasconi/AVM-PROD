import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Politique de Confidentialité | Album Souvenirs',
  description: 'Politique de confidentialité et de gestion des données personnelles de l’association.',
  robots: 'noindex, follow', 
};

export default function PolitiqueConfidentialite() {
  return (
    <main className={styles['legal-page']}>
      <div className={styles.container}>
        <Link href="/" className={styles['back-link']}>
          [ RETOUR À L'ACCUEIL ]
        </Link>

        <header className={styles['legal-header']}>
          <h1>Politique de Confidentialité</h1>
          <p>Dernière mise à jour : Mai 2026</p>
          <div className={styles.divider}></div>
        </header>

        <section className={styles['legal-content']}>
          <p>
            La présente politique de confidentialité définit et vous informe de la manière dont notre association 
            utilise et protège les informations que vous nous transmettez, le cas échéant, lorsque vous utilisez 
            ce site internet.
          </p>

          <h2>1. Responsable du Traitement</h2>
          <p>
            Le site internet est édité par l'association AVM74, association non déclarée (dite « association de fait »).
            <br />
            Le responsable du traitement des données personnelles est Sam, 
            joignable à l'adresse e-mail suivante : <strong>avm44@hotmail.fr</strong>.
          </p>

          <h2>2. Données Collectées</h2>
          <p>
            Nous limitons la collecte des données personnelles au strict minimum nécessaire (minimisation des données) :
          </p>
          <ul>
            <li><strong>Données de navigation (Cookies) :</strong> Ce site utilise uniquement des cookies techniques essentiels à son bon fonctionnement et à la sécurité du site. Aucune donnée de traçage publicitaire ou de profilage n'est collectée.</li>
            <li><strong>Formulaires ou Réseaux Sociaux :</strong> Si vous interagissez avec nous via nos liens vers les réseaux sociaux (Facebook, Instagram), vos données sont régies par les politiques de confidentialité de ces plateformes respectives.</li>
          </ul>

          <h2>3. Finalités du Traitement</h2>
          <p>
            Les données techniques éventuellement collectées servent uniquement à :
          </p>
          <ul>
            <li>Assurer l'affichage correct et la fluidité de la navigation sur le site (notamment l'affichage des galeries d'archives et de la lightbox).</li>
            <li>Garantir la sécurité du site internet.</li>
          </ul>

          <h2>4. Durée de Conservation des Données</h2>
          <p>
            Vos données personnelles ou de session technique ne sont conservées que pour la durée strictement nécessaire aux finalités décrites ci-dessus, et dans la limite des sessions de navigation active.
          </p>

          <h2>5. Destinataires des Données</h2>
          <p>
            Seuls les administrateurs du site au sein de l'association ont accès à vos données. <strong>Aucune donnée n'est vendue, louée, ou transmise à des tiers à des fins commerciales.</strong>
          </p>

          <h2>6. Hébergement du Site</h2>
          <p>
            Notre site est hébergé par Vercel , dont les serveurs sont situés au 340 S Lemon Ave, Walnut, CA 91789, États-Unis. Cet hébergeur applique des standards stricts de sécurité conformes au RGPD.
          </p>

          <h2>7. Vos Droits (RGPD)</h2>
          <p>
            Conformément à la réglementation européenne sur la protection des données (RGPD), vous disposez des droits suivants concernant vos données :
          </p>
          <ul>
            <li>Droit d'accès et de communication des données.</li>
            <li>Droit de rectification ou d'effacement.</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter directement à tout moment à l'adresse e-mail : <strong>avm74@hotmail.fr</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}