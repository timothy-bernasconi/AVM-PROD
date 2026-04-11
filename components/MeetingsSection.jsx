"use client";

import React from 'react';
import Link from 'next/link';
import CountDown from './CountDown';


export default function MeetingsSection() {
  return (
    <section className="meetings-page">
      <h2>Les 20 ans de l'AVM </h2>

      <div className="presentation">   

      

        <p>Préparez-vous à une édition historique ! En septembre, on ne se contente pas de se retrouver : on fête deux décennies de passion, de rencontres et de souvenirs à vos côtés. Bloquez vos agendas, le festival s’annonce légendaire. </p>

        
       
      </div>

     <CountDown /> 

    </section>
  );
}
