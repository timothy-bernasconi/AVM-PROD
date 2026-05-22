import React from 'react';
import dataArchives from '@/public/data_archives.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.scss';
import Galerie from './Galerie'; 

export default async function FicheArchive({ params }) {
  const { id } = await params;
  const souvenir = dataArchives.find((a) => a.id.toString() === id);

  if (!souvenir) return notFound();

  const photos = Array.isArray(souvenir.images) ? souvenir.images : [souvenir.images];

  return (
    <main className={styles['archive-detail-page']}>
      <div className={styles.container}>
        <Link href="/souvenirs" className={styles['back-link']}>
          [ RETOUR AUX SOUVENIRS ]
        </Link>
        
        <header className={styles['detail-header']}>
          <h1>{souvenir.titre}</h1>
          <div className={styles.divider}></div>
          <p className={styles.description}>{souvenir.resume}</p>
        </header>

        <div className={styles['article-text']}>
          <p style={{ display: 'block', lineHeight: '1.7', textAlign: 'justify' }}>
            {souvenir.texte}
          </p>
        </div>

        {/* On passe les données au composant client pour la gestion du clic */}
        <Galerie photos={photos} titre={souvenir.titre} />
        
      </div>
    </main>
  );
}