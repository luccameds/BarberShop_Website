import '@/styles/global.css';
import '@/styles/index';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barbearia Dom Rafael',
  description: 'Venha conhecer nossa barbearia!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
