import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joshiyaa Arjun — Builder, Engineer & Product Designer',
  description: 'Portfolio of Joshiyaa Arjun — software engineer, automation builder and product designer from Chennai.',
  keywords: ['Joshiyaa Arjun', 'software engineer', 'product designer', 'UI UX', 'automation', 'AI', 'portfolio'],
  openGraph: {
    title: 'Joshiyaa Arjun — Builder, Engineer & Product Designer',
    description: 'I turn ideas into products people actually use.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
