import type { Metadata, Viewport } from "next"
import { siteConfig } from "@/config/site"
import Footer from "@/components/footer"
import NavBar from "@/components/nav-bar"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
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
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@sergioalcaladev",
  },
}

export const viewport: Viewport = {
  themeColor: "black",
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <NavBar />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  )
}
