import '@/styles/global.css';
import { NewspaperIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Last News Blog',
  description: 'A Next.js news blog with Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex flex-col'>
        <header className="bg-primary text-white p-6">
          <Link href={'/'}>
            <h1 className='flex items-center uppercase gap-3 text-3xl font-bold text-white cursor-pointer'>
              <NewspaperIcon size={30} />
              Last News Blog
            </h1>
          </Link>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-primary text-white p-6 text-center">
          © 2024 My News Blog
        </footer>
      </body>
    </html>
  );
}
