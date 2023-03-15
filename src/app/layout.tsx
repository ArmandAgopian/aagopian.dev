import {Providers} from '@/app/providers';

export const metadata = {
  title: 'Armand Agopian',
  description: 'Personal Website',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
