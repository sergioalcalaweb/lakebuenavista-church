import { Suspense } from "react"
import SectionName from "@/components/section-name"
import VideoLoading from "@/components/video-loading"
import Image from "next/image"
import VideosSection from "../../../components/videos-section"
import { Metadata } from "next"
import ogImage from "@/app/(main)/opengraph-image.png"

export const metadata: Metadata = {
  title: "Predicaciones",
  description:
    "Sumérgete en la inspiración espiritual con nuestra colección de videos de predicaciones.",
  openGraph: {
    title: "Predicaciones",
    description:
      "Sumérgete en la inspiración espiritual con nuestra colección de videos de predicaciones.",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    title: "Predicaciones",
    description:
      "Sumérgete en la inspiración espiritual con nuestra colección de videos de predicaciones.",
    card: "summary_large_image",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
}

const Predicaciones = () => {
  return (
    <SectionName
      name="Predicaciones"
      image={
        <Image
          alt="predicacion"
          fill
          src="/image/predicacion.jpg"
          loading="eager"
          priority={true}
          className="absolute inset-0"
          quality={80}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      }
    >
      <article className="px-5 py-10 lg:px-20 flex flex-col gap-10">
        <Suspense fallback={<VideoLoading numberOfItems={5} />}>
          <VideosSection />
        </Suspense>
      </article>
    </SectionName>
  )
}

export default Predicaciones
