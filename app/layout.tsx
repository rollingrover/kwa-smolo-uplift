import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Diza Kwa-Smolo Uplifting Initiative | Community Development Hluhluwe',
  description: 'Empowering rural Zulu communities in Hluhluwe, KwaZulu-Natal through early childhood education, skills training, sustainable development and community upliftment programs.',
  keywords: ['KwaSmolo', 'Hluhluwe community upliftment', 'Zulu rural development', 'early childhood development KZN', 'skills training Hluhluwe', 'community projects KwaZulu-Natal', 'donate Hluhluwe'],
  authors: [{ name: 'Diza Kwa-Smolo Uplifting Initiative' }],

  // Favicon & Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'Diza Kwa-Smolo Uplifting Initiative',
    description: 'Transforming lives in Hluhluwe through education, skills and sustainable community development.',
    images: [{ url: '/hero/community-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diza Kwa-Smolo Uplifting Initiative',
    description: 'Empowering communities in Hluhluwe, KwaZulu-Natal',
  },
  metadataBase: new URL('https://www.dizakwasmolo.co.za'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body className="min-h-screen flex flex-col bg-sand">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}