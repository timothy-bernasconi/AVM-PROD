"use client";

import React, { useState } from 'react';
import styles from './page.module.scss'; 

export default function Gallery({ photos, titre }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className={styles['photo-mosaic']}>
        {photos.map((url, index) => (
          <div key={index} className={styles['photo-wrapper']}>
            <img 
              src={url} 
              alt={`${titre} - vue ${index + 1}`} 
              loading="lazy"
              onClick={() => setSelectedImg(url)}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <button className={styles.lightboxClose} onClick={() => setSelectedImg(null)}>✕</button>
          <img src={selectedImg} alt="agrandie" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}