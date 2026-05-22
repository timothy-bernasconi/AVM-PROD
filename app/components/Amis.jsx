import React from 'react'
import styles from './Amis.module.scss'

const amis = [
    {
        id: 1, nom : 'Gruppo Storico 2194', logo : "/assets/amis/gruppo-storico.png", url : "https://www.gs2194.com/"
    },

    {id : 2, nom : "Atlantique 44", logo : "/assets/amis/atlantique44.svg", url : "https://www.facebook.com/memoryatlanticgroup"},

    {id : 3, nom : "Batterie de Crasse Ville", logo : "/assets/amis/batterie-crasseville.png", url : "https://www.facebook.com/p/Batterie-de-Crasville-61553571353716/"},

    {id : 4, nom : "Blue & White Devils 74", logo : "/assets/amis/blue-devils.png", url : "https://www.facebook.com/p/Blue-and-White-Devils-74-100068941665779/"},

    {id : 5, nom : "Jeep Sud-Est", logo : "/assets/amis/jeep-sud-est.svg", url : "https://www.jeepsudest.com/"},


]

const Amis = () => {
  return (
    <div className={styles.container}>
        <h2>Les alliés de l'AVM</h2>
        <p>Nos amis qui partagent la même passion que nous</p>

        <div className={styles.list}>
            {amis.map(ami => (
                <div key={ami.id} className={styles.wrapper}>
                    <a href={ami.url}><img src={ami.logo} alt={ami.nom}/></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Amis