import './globals.css';
import { Open_Sans } from 'next/font/google';

const open_Sans = Open_Sans({ subsets: ['latin'] });

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
    <html lang="en" className={open_Sans.className}>
      <body>{children}</body>
    </html>
  );
}
