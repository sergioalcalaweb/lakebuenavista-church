"use client"

import { Event, Service } from "@/types/events"
import { Button, Tooltip } from "@nextui-org/react"
import Image from "next/image"
import { FaCalendarPlus, FaShareNodes } from "react-icons/fa6"

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
        <header className="pt-4 flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-gray-200 rounded-xl text-center">
              <div className="text-warning">16</div>
              <div className="text-xs">Mar</div>
            </div>
            {/* <div>-</div>
          <div className="p-2 bg-gray-200 rounded-xl text-center">
            <div className="text-warning">23</div>
            <div className="text-xs">Mar</div>
          </div> */}
            <div>
              <div className="text-black">Sábado</div>
              <small className="text-gray-500 font-extrabold">
                9:15 - 11:00 AM
              </small>
            </div>
          </div>
          <div className="flex gap-2">
            {/* pending due to extra steps to implement */}
            {/* <Tooltip showArrow={true} content="Agregar a calendario">
              <Button
                isIconOnly
                color="warning"
                variant="bordered"
                size="lg"
                aria-label="Agregar a calendario"
              >
                <FaCalendarPlus />
              </Button>
            </Tooltip> */}
            <Tooltip showArrow={true} content="Compartir">
              <Button
                isIconOnly
                color="warning"
                variant="bordered"
                size="lg"
                aria-label="Agregar a calendario"
              >
                <FaShareNodes />
              </Button>
            </Tooltip>
          </div>
        </header>
        <article
          className="flex flex-col gap-5 pt-8"
          dangerouslySetInnerHTML={markup}
        />
      </main>
    </div>
  )
}

export default EventPage
