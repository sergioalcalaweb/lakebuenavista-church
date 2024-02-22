import { aboutImages } from "@/utils/about-images"
import Image from "next/image"

const AboutImages = () => {
  return (
    <>
      {aboutImages.map((image, index) => (
        <Image
          key={index}
          className="rounded-lg shadow-2xl mx-auto"
          src={image}
          alt={`about-${index}`}
          width={400}
          height={500}
        />
      ))}
    </>
  )
}

export default AboutImages
