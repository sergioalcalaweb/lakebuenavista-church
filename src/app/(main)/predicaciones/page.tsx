import { Suspense } from "react"
import SectionName from "@/components/section-name"
import VideoLoading from "@/components/video-loading"
import Image from "next/image"
import VideosSection from "../../../components/videos-section"

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
      <article className="p-5 lg:p-20 flex flex-col gap-10">
        <Suspense fallback={<VideoLoading numberOfItems={5} />}>
          <VideosSection />
        </Suspense>
      </article>
    </SectionName>
  )
}

export default Predicaciones
