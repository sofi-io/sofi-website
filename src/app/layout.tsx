import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'sofi',
  description: 'From documents to data. Transforme boletins financeiros em dados estruturados e rastreáveis.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
