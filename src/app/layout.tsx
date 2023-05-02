import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '준수가 만든 instagram',
    template: '준수가 만든 instagram | %s',
  },
  description: '준수가 열심히 만들었습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-50 border-b">
            <Navbar />
          </header>
          <main className="w-full flex justify-center bg-neutral-50 min-h-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
