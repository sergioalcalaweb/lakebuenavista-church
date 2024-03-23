"use client"

import { Event, Service } from "@/types/events"
import Image from "next/image"
import BlogHeader from "./blog-header"

interface EventLayoutProps {
  event: Event | Service
  isService: boolean
}

const EventPage = ({ event, isService }: EventLayoutProps) => {
  const markup = {
    __html: event.blog,
  }
  return (
    <div className="bg-white">
      <div className="relative w-screen-xl h-56 lg:h-96 bg-gradient-to-b from-black to-slate-700">
        <Image
          alt={event.title_calendar}
          fill
          src={event.image.large.url}
          loading="eager"
          priority={true}
          className="absolute inset-0 brightness-50"
          sizes="100vw"
          quality={80}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="relative mx-auto lg:max-w-screen-lg md:pt-8">
          <h1 className="text-white text-xl font-extralight p-4 lg:text-3xl">
            {event.title}
          </h1>
        </div>
      </div>
      <main className="text-black mx-auto lg:max-w-screen-lg h-fit pb-4 px-4">
        <BlogHeader event={event} isService={isService} />
        <article
          className="flex flex-col gap-5 pt-8"
          dangerouslySetInnerHTML={markup}
        />
      </main>
    </div>
  )
}

export default EventPage
