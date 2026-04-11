import React from 'react';
import dataArchives from '@/public/data_archives.json';
import Link from 'next/link';
import styles from './page.module.scss';

export default function ArchivesPage() {
 
  const sortedArchives = [...dataArchives].sort((a, b) => b.date - a.date);

  return (
    <main className={styles['archives-page']}>
      <header className={styles['archives-header']}>
        <h1>Album Souvenirs</h1>
        <p>L'histoire de l'amicale en images, année après année.</p>
      </header>

      <div className={styles['archives-grid']}>
        {sortedArchives.map((item) => (
          <Link href={`/archive/${item.id}`} key={item.id} className={styles['archive-link']}>
            <div className={styles['archive-item']}>
              <div className={styles['image-container']}>
                <img 
                  src={Array.isArray(item.cover) ? item.cover[0] : item.cover} 
                  alt={item.titre} 
                  loading="lazy" 
                />
                <div className={styles['year-badge']}>{item.date}</div>
              </div>
              <div className={styles['archive-info']}>
                <h3>{item.titre}</h3>
                <p>{item.resume}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}