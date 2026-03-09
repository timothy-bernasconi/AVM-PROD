
import HomeSection from '../components/HomeSection';
import HistorySection from '../components/HistorySection';
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
        <HistorySection />
        <VehiculesSection />
        <MeetingsSection />
        <AssociationSection />
        <SocialMediaSection />
      </main>
    </>
  );
}
