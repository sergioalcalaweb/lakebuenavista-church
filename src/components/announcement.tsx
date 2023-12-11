// const Announcement = () => {
//   return (
//     <video
//       className="w-full h-screen/2 md:h-screen object-cover md:object-fill"
//       autoPlay
//       muted
//       loop
//       playsInline
//     >
//       <source
//         src="https://res.cloudinary.com/dseqdhfur/video/upload/v1700011783/VIDEO-2023-11-10-10-49-43_vigilb.webm"
//         type="video/webm"
//       />
//       <source
//         src="https://res.cloudinary.com/dseqdhfur/video/upload/v1700011783/VIDEO-2023-11-10-10-49-43_vigilb.mp4"
//         type="video/mp4"
//       />
//       Your browser does not support the video tag.
//     </video>
//   )
// }

import Image from "next/image"
import LinkButton from "./link-button"

const Announcement = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <section className="w-[95%] h-[400px] md:h-screen object-cover md:object-fill relative mx-auto my-10">
        <Image
          alt="biblia"
          src="/image/announcements/revive.jpg"
          quality={100}
          fill
          loading="eager"
          priority={true}
          className="inset-0 md:rounded-lg aspect-square shadow-xl"
          sizes="100vw"
        />
      </section>
      <LinkButton link="/revive" text="Saber Más" />
    </div>
  )
}

export default Announcement
