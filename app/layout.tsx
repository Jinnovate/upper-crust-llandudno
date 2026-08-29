import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond, Oswald } from 'next/font/google';
import './globals.css';
import './rustic.css';
import './reviews.css';
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500','600','700'], style: ['normal','italic'] });
const condensed = Oswald({ variable: '--font-condensed', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://upper-crust-llandudno.realworldjoel.chatgpt.site'),
  title: 'Upper Crust | Independent Café in Llandudno',
  description: 'Proper food, plenty of soul. Hand-stacked sandwiches, brilliant bakes and good coffee in the heart of Llandudno.',
  openGraph: { title: 'Upper Crust | Llandudno', description: 'Proper food. Plenty of soul.', images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Upper Crust | Llandudno', description: 'Proper food. Plenty of soul.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${condensed.variable}`}>{children}</body></html>; }
