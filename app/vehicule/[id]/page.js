import data_vehicules from '@/public/data_vehicules.json';
import { notFound } from 'next/navigation';
import styles from './Detail-Vehicule.module.scss'; // Changement ici

export default async function FicheVehicule({ params }) {
  const { id } = await params;

  const vehicule = data_vehicules.find((v) => v.id.toString() === id.toString());

  if (!vehicule) return notFound();

  const photo = Array.isArray(vehicule.image) ? vehicule.image : [vehicule.image];
  const photos = Array.isArray(vehicule.images) ? vehicule.images : [vehicule.images];

  return (
    <main className={styles['vehicule-detail-page']}>
      <h1>{vehicule.nom}</h1>

      <div className={styles['detailed-vehicule-banner']}>
        <div className={styles['photo-mosaic']}>
          {photo.map((url, index) => (
            <div key={index} className={styles['photo-wrapper']}>
              <img 
                src={url} 
                alt={`${vehicule.nom} - vue ${index + 1}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className={styles['infos-vehicule']}>
          <h2>Fiche Présentation</h2>
          <h2>
            Véhicule : <span style={{"backgroundColor" : "#877053", "height" : "25px", "width" : "auto", "padding" : "10px", "borderRadius" : "15px"}}>{vehicule.nom}</span>
          </h2>
          <h2>Catégorie : {vehicule.categorie}</h2>
          <h2><strong>Année :</strong> {vehicule.caracteristiques.annee}</h2>
          <img src={vehicule.origine} alt="Drapeau origine" />
          <h2>Propriétaire : {vehicule.proprietaire}</h2>
        </div>
      </div>
        
      <div className={styles.infos}>
        <h2>L'histoire de notre {vehicule.nom}</h2>
        <div style={{ display: 'block', lineHeight: '1.7', textAlign: 'justify' }}>
          {vehicule.texte}
        </div>
      </div>
        
      <div className={styles.infos}>
        <h2>Caractéristiques : </h2>
        <div>
          <p><strong>Moteur :</strong> {vehicule.caracteristiques.moteur}</p>
          <p><strong>Cylindrée :</strong> {vehicule.caracteristiques.cylindree}</p>
          <p><strong>Puissance :</strong> {vehicule.caracteristiques.puissance}</p>
          <p><strong>Transmission :</strong> {vehicule.caracteristiques.transmission} </p>
          <p><strong>Poids :</strong> {vehicule.caracteristiques.poids} kg</p>
          <p><strong>Consommation :</strong> {vehicule.caracteristiques.conso} </p>
          <p><strong>Vitesse :</strong> {vehicule.caracteristiques.vitesse} km/h</p>
          <p><strong>Autonomie :</strong> {vehicule.caracteristiques.autonomie} km</p>
        </div>
      </div>

      <div className={styles.infos}>
        <h2>Équipements</h2>
        <div className={styles['equipements-container']}>
          {vehicule.equipements && vehicule.equipements.length > 0 ? (
            vehicule.equipements.map((item, index) => (
              <p key={index} className={styles['equipement-item']}>
                <strong>Option {index + 1} :</strong>
                <span>{item}</span>
              </p>
            ))
          ) : (
            <p>Aucun équipement spécifique répertorié</p>
          )}
        </div>
      </div>

      <div className={styles['photos-mosaic-vehicule']}>
        {photos.map((url, index) => (
          <div key={index} className={styles['photo-wrapper']}>
            <img 
              src={url} 
              alt={`${vehicule.nom} - vue ${index + 1}`} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}