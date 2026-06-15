import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Новый Мир',
    template: '%s · Новый Мир',
  },
  description:
    'Новый Мир — мирный гражданский проект о достоинстве, свободе передвижения, справедливом труде и глобальном сотрудничестве.',
  openGraph: {
    title: 'Новый Мир',
    description:
      'Мирный гражданский проект о достоинстве, свободе передвижения, справедливом труде и глобальном сотрудничестве.',
    siteName: 'Новый Мир',
    type: 'website',
    locale: 'ru_RU',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): ReactElement {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4980a6aef7cb7906bd0d932ff85bb94bb87ee3e5
