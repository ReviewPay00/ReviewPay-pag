import type { Metadata } from 'next';
import { Orbitron, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap'
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://reviewpay.com'),
  title: 'ReviewPay - IA que escala reviews em marketplaces',
  description:
    'A plataforma de IA que automatiza a participacao de usuarios em campanhas de analise de produtos em Shopee, Mercado Livre e Amazon.',
  keywords: [
    'reviewpay',
    'reviews automatizados',
    'marketplaces',
    'shopee',
    'mercado livre',
    'amazon',
    'saas',
    'inteligencia artificial'
  ],
  openGraph: {
    title: 'ReviewPay - IA que escala reviews em marketplaces',
    description:
      'Transforme campanhas de review em crescimento previsivel com automacoes inteligentes e compliance nativo.',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewPay - IA que escala reviews em marketplaces',
    description: 'Automatize a participacao de usuarios em campanhas de analise com IA.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${orbitron.variable}`}>
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-70" />
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-neon/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-72 h-64 w-64 rounded-full bg-laser/20 blur-[120px]" />
          {children}
        </div>
      </body>
    </html>
  );
}
