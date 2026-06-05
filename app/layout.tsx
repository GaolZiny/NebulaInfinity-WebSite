import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Orbitron, Exo_2, Noto_Sans_JP } from 'next/font/google';
import '../styles/globals.css';

// Self-hosted via next/font (no render-blocking @import). JP font is not
// preloaded (large CJK) but still self-hosted and rendered on demand.
const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-exo2' });
const orbitron = Orbitron({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap', variable: '--font-orbitron' });
const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', preload: false, variable: '--font-noto-jp' });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${exo2.variable} ${orbitron.variable} ${notoSansJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
