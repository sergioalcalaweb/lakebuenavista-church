import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'], weight: "300" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
