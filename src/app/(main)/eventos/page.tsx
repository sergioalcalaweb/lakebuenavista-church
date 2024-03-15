import Calendar from "@/components/calendar/calendar"
import SectionName from "@/components/section-name"
import { Metadata } from "next"
import Image from "next/image"
import ogImage from "@/app/(main)/opengraph-image.png"

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Desde servicios de adoración inspiradores hasta programas comunitarios enriquecedores, nuestros eventos ofrecen oportunidades para el crecimiento espiritual y la conexión comunitaria.",
  openGraph: {
    title: "Eventos",
    description:
      "Desde servicios de adoración inspiradores hasta programas comunitarios enriquecedores, nuestros eventos ofrecen oportunidades para el crecimiento espiritual y la conexión comunitaria.",
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
    title: "Eventos",
    description:
      "Desde servicios de adoración inspiradores hasta programas comunitarios enriquecedores, nuestros eventos ofrecen oportunidades para el crecimiento espiritual y la conexión comunitaria.",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
}

const Events = () => {
  return (
    <SectionName
      name="Eventos"
      image={
        <Image
          alt="eventos"
          fill
          src="/image/eventos.jpg"
          loading="eager"
          priority={true}
          className="absolute inset-0"
          sizes="100vw"
          quality={80}
          style={{
            objectFit: "cover",
          }}
        />
      }
    >
      <div className="pt-5">
        <Calendar />
      </div>
    </SectionName>
  )
}

export default Events
