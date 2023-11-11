import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

const inter = Open_Sans({ subsets: ['latin'], weight: "300" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="es" className='dark'>
        <body suppressHydrationWarning className={`${inter.className}`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
