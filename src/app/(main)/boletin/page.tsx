import ogImage from "@/app/(main)/opengraph-image.png"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Boletín",
  description:
    "Boletín de la Iglesia Adventista del Septimo Día Lake Buena Vista",
  openGraph: {
    title: "Boletín",
    description:
      "Boletín de la Iglesia Adventista del Septimo Día Lake Buena Vista",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boletín",
    description:
      "Boletín de la Iglesia Adventista del Septimo Día Lake Buena Vista",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
}

const BoletinPage = () => {
  return (
    <iframe
      className="h-screen"
      src="https://lbv.updates.church/"
      title="Boletín de la Iglesia Adventista del Septimo Día Lake Buena Vista"
      width="100%"
      height="100%"
    />
  )
}

export default BoletinPage
