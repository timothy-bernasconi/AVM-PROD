
import HomeSection from '../components/HomeSection';
import VehiculesSection from '../components/VehiculesSection';
import MeetingsSection from '../components/MeetingsSection';
import AssociationSection from '../components/AssociationSection';
import SocialMediaSection from '../components/SocialMediaSection';
import '../scss/main.scss';

export default function Home() {
  return (
    <>
      <main>
        <HomeSection />
         <MeetingsSection />
          <AssociationSection />
        <VehiculesSection />
       
       
        <SocialMediaSection />
      </main>
    </>
  );
}
