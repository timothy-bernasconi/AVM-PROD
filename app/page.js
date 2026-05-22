
import VehiculesSection from '../app/components/VehiculesSection';
import MeetingsSection from '../app/components/MeetingsSection';
import AssociationSection from '../app/components/AssociationSection';
import SocialMediaSection from '../app/components/SocialMediaSection';
import Amis from '../app/components/Amis';
import Hero from '../app/components/Hero';
import '../scss/main.scss';

export default function Home() {
  return (
    <>
      <main>
         <Hero 
      videoSrc="/assets/video/test.mp4" 
      fallbackImage="/assets/fallback-annemasse.jpg"/>
      
         <MeetingsSection />
          <Amis/>
        <VehiculesSection />
        <SocialMediaSection />
          <AssociationSection />
      </main>
    </>
  );
}
