import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: '#ffffff',
  authors: [
    {
      name: "Sergio Alcala",
      url: "https://github.com/sergioalcalaweb",
    },
  ],
  creator: "Sergio Alcala",
  openGraph: {
    type: "website",
    locale: "es_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@checoipn",
  },
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
