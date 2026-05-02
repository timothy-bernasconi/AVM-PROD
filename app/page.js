
import HomeSection from '@/components/HomeSection';
import VehiculesSection from '../components/VehiculesSection';
import MeetingsSection from '../components/MeetingsSection';
import AssociationSection from '../components/AssociationSection';
import SocialMediaSection from '../components/SocialMediaSection';
import Amis from '@/components/Amis';
import Hero from '@/components/Hero';
import '../scss/main.scss';

export default function Home() {
  return (
    <>
      <main>
         <Hero 
      videoSrc="/assets/video/test.mp4" 
      fallbackImage="/assets/fallback-annemasse.jpg"/>
       {/* <HomeSection/> */}
      
         <MeetingsSection />
          <AssociationSection />
        <VehiculesSection />
       
       <Amis/>
        <SocialMediaSection />
      </main>
    </>
  );
}
