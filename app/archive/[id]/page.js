import dataArchives from '@/public/data_archives.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../../../scss/pages/archive-detail.scss';

export default async function FicheArchive({ params }) {
  const { id } = await params;
  const souvenir = dataArchives.find((a) => a.id.toString() === id);

  if (!souvenir) return notFound();

 
  const photos = Array.isArray(souvenir.images) ? souvenir.images : [souvenir.images];

  return (
    <main className="archive-detail-page">
      <div className="container">
        <Link href="/souvenirs" className="back-link">
          [ RETOUR AUX SOUVENIRS ]
        </Link>
        
        <header className="detail-header">
          <h1>{souvenir.titre}</h1>
          <div className="divider"></div>
          <p className="description">{souvenir.resume}</p>
        </header>

        <div className='article-text'>
          <p style={{ display: 'block', lineHeight: '1.7', textAlign: 'justify', color : '' }}>{souvenir.texte}</p>
        </div>

        <div className="photo-mosaic">
          {photos.map((url, index) => (
            <div key={index} className="photo-wrapper">
              <img 
                src={url} 
                alt={`${souvenir.titre} - vue ${index + 1}`} 
                loading="lazy"
              />
              
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}