"use client"

import { es } from "date-fns/locale"
import { MonthlyBody } from "./monthly-body"
import { EventApp } from "@/types"
import { MonthlyNav } from "./monthly-nav"
import { startOfMonth } from "date-fns"
import { useEffect, useState } from "react"
import { getEvents } from "@/utils/events"

export default function Calendar({ events }: { events: EventApp[] }) {
  const currentMonth = startOfMonth(new Date())

  if (!events) return null

  return (
    <>
      <MonthlyNav currentMonth={currentMonth} locale={es} />
      <MonthlyBody events={events} currentMonth={currentMonth} locale={es} />
    </>
  )
}
