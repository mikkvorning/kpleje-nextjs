// app/layout.tsx
import type { Metadata } from 'next';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty & Wellness Clinic',
  description: 'Your one-stop for beauty and wellness services',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        <main className='container mx-auto px-8 py-8 flex-grow max-w-4xl'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
