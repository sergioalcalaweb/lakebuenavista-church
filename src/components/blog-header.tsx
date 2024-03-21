"use client"

import { Event, Service } from "@/types/events"
import { rangeOfHours } from "@/utils/time-util"
import { Button, Tooltip } from "@nextui-org/react"
import { FaShareNodes } from "react-icons/fa6"
import { format, getDate, getDay, getMonth } from "date-fns"
import { es } from "date-fns/locale"
import { useEffect, useState } from "react"

interface BlogHeaderProps {
  event: Event | Service
  isService: boolean
}

const dayOfWeek = {
  Monday: "Lunes",
  Tuesday: "Martes",
  Wednesday: "Miércoles",
  Thursday: "Jueves",
  Friday: "Viernes",
  Saturday: "Sábado",
  Sunday: "Domingo",
}

const ServiceComponent = (service: Service) => {
  const day = dayOfWeek[service.day as keyof typeof dayOfWeek]

  return (
    <div className="flex gap-2 items-center">
      <div className="p-2 bg-gray-200 rounded">
        <div className="text-warning font-extrabold">{day}</div>
        <small className="text-black">
          {rangeOfHours(service.time_init, service.time_end)}
        </small>
      </div>
    </div>
  )
}

const EventComponent = (event: Event) => {
  const dateInit = event.date_init
  const dateEnd = event.date_end

  return (
    <div className="flex gap-2 items-center">
      <div className="p-2 bg-gray-200 rounded-xl text-center">
        <div className="text-warning">{getDate(dateInit)}</div>
        <div className="text-xs capitalize">
          {format(dateInit, "MMM", { locale: es })}
        </div>
      </div>
      <div>-</div>
      <div className="p-2 bg-gray-200 rounded-xl text-center">
        <div className="text-warning">{getDate(dateEnd)}</div>
        <div className="text-xs capitalize">
          {format(dateEnd, "MMM", { locale: es })}
        </div>
      </div>
      <div>
        <div className="text-black">Horario</div>
        <small className="text-gray-500 font-extrabold">
          {rangeOfHours(event.time_init, event.time_end)}
        </small>
      </div>
    </div>
  )
}

const BlogHeader = ({ event, isService }: BlogHeaderProps) => {
  const [navigatorAvailable, setNavigatorAvailable] = useState<boolean>(false)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "navigator" in window &&
      "share" in window.navigator
    ) {
      setNavigatorAvailable(true)
    }
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: event.title,
      text: event.description,
      url: event.link,
    }
    try {
      await navigator.share(shareData)
    } catch (err) {
      console.error("Error sharing", err)
    }
  }

  return (
    <header className="pt-4 flex flex-row justify-between items-center">
      <div>
        {isService
          ? ServiceComponent(event as Service)
          : EventComponent(event as Event)}
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
        {navigatorAvailable && (
          <Tooltip showArrow={true} content="Compartir">
            <Button
              isIconOnly
              color="warning"
              variant="bordered"
              size="lg"
              aria-label="Agregar a calendario"
              onClick={handleShare}
            >
              <FaShareNodes />
            </Button>
          </Tooltip>
        )}
      </div>
    </header>
  )
}

export default BlogHeader
