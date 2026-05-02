import React from 'react'
import styles from './Amis.module.scss'

const amis = [
    {
        id: 1, nom : 'Gruppo Storico 2194', logo : "/assets/amis/gruppo-storico.png"
    },

    {id : 2, nom : "Test", logo : "/assets/amis/test.webp"},

    {id : 3, nom : "Test", logo : "/assets/amis/test2.png"}
]

const Amis = () => {
  return (
    <div className={styles.container}>
        <h2>Les alliés de l'AVM</h2>
        <p>Nos amis qui partagent la même passion que nous</p>

        <div className={styles.list}>
            {amis.map(ami => (
                <div key={ami.id} className={styles.wrapper}>
                    <img src={ami.logo} alt={ami.nom}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Amis