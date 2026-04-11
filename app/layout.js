
import '../scss/main.scss';      
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AVM 74',
  description: "L'AVM-74 est une association loi 1901...",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '100x100',
        
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link  rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
  crossOrigin="anonymous" 
  referrerPolicy="no-referrer" 
/>
      </head>
      <body>
        <Header />          
        <main>{children}</main> 
        <Footer />            
      </body>
    </html>
  );
}
