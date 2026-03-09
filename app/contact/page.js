"use client";
import '../../scss/pages/contact-page.scss';
import React, { useRef } from 'react';



const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', form.current, 'VOTRE_PUBLIC_KEY')
      .then(() => alert("Demande envoyée !"))
      .catch((err) => alert("Erreur : " + err.text));
  };

  return (

    <section className='contact-page'>

       <div className='contact-intro'>
      <h1>Contactez-Nous</h1>
        <p>Vous souhaitez en savoir plus ou rejoindre l'AVM-74 ? Remplissez ce formulaire</p>
        </div>
    <div className="contact-container">


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        
        <div className="row">
          <input type="text" name="user_nom" placeholder="Nom" required />
          <input type="text" name="user_prenom" placeholder="Prénom" required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input type="email" name="user_email" placeholder="Email" required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input type="tel" name="user_phone" placeholder="Téléphone" />
        </div>

        <textarea name="message" placeholder="Parlez-nous de votre passion pour les véhicules militaires..."></textarea>
        
        <button type="submit">Envoyer ma demande</button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;