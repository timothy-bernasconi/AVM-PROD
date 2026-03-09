
import '../scss/main.scss';      
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mon site',
  description: 'Description du site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />          
        <main>{children}</main> 
        <Footer />            
      </body>
    </html>
  );
}
