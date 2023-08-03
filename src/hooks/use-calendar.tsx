import { EventApp } from "@/types";

interface CalendarEvents {
  day: Date;
  events: EventApp[];
  locale: Locale;
  currentMonth: number| Date;
  days: Date[];
}

const useCalendar = () => {

}