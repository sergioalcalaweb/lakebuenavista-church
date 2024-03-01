import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Open_Sans({ subsets: ["latin"], weight: "300" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
