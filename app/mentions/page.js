import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Mentions Légales | Album Souvenirs',
  description: 'Mentions légales obligatoires concernant l’éditeur et l’hébergeur du site internet.',
  robots: 'noindex, follow',
};

export default function MentionsLegales() {
  return (
    <main className={styles['legal-page']}>
      <div className={styles.container}>
        <Link href="/" className={styles['back-link']}>
          [ RETOUR À L'ACCUEIL ]
        </Link>

        <header className={styles['legal-header']}>
          <h1>Mentions Légales</h1>
          <p>En vigueur à partir de Mai 2026</p>
          <div className={styles.divider}></div>
        </header>

        <section className={styles['legal-content']}>
          
          <h2>1. Éditeur du Site</h2>
          <p>
            Le présent site internet est édité et géré par l'association de fait (association non déclarée) 
            AVM74.
            <br /><br />
            <strong>Responsable de la publication :</strong> Sam <br />
            <strong>Contact e-mail :</strong> avm74@hotmail.fr
          </p>

          <h2>2. Hébergeur du Site</h2>
          <p>
            Le site internet est hébergé par la société :
            <br /><br />
            <strong>Nom de l'hébergeur, ex: Vercel Inc</strong><br />
            <strong>Adresse de l'hébergeur :</strong> Adresse officielle de l'hébergeur (340 S Lemon Ave, Walnut, CA 91789, États-Unis)<br />
            <strong>Site internet de l'hébergeur :</strong> https://vercel.com
          </p>

          <h2>3. Propriété Intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, photographies historiques, logos, icônes, structures des données JSON) sont, sauf mention contraire, la propriété exclusive de l'association **[Nom de ton association]** ou font l'objet d'une autorisation d'utilisation par leurs propriétaires respectifs (notamment pour les archives fournies par les membres).
          </p>
          <p>
            Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable du responsable de la publication.
          </p>

          <h2>4. Gestion des Liens Hypertextes</h2>
          <p>
            Le site contient un certain nombre de liens hypertextes vers d'autres sites (notamment nos pages Facebook et Instagram). Cependant, l'association de fait n'a pas la possibilité de vérifier en permanence le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait quant aux risques éventuels de contenus illicites.
          </p>

          <h2>5. Contact</h2>
          <p>
            Pour toute question, signalement de contenu inapproprié ou demande relative aux droits de propriété intellectuelle, vous pouvez nous écrire directement à : <strong>avm74@hotmail.fr</strong>.
          </p>

        </section>
      </div>
    </main>
  );
}