import { EventApp } from "@/types";
import { format } from "date-fns";
import { DayEventItem } from "./day-event-item";

interface MonthlyDayProps {
  day: number | Date;
  locale: Locale;
  events: EventApp[];
}

export function MonthlyDay({ day, locale, events } : MonthlyDayProps) {
  let dayNumber = format(day, 'd', { locale });
  return (
    <div
      aria-label={`Eventos del dia ${dayNumber}`}
      className={`min-h-80 md:h-80 p-2 border-b-2 border-black ${events.length > 0 ? 'md:bg-gray-100' : 'hidden'} md:block `}
    >
      <div className="flex justify-between">
        <div className="text-2xl font-thin">{dayNumber}</div>
        <div className="md:hidden block capitalize font-thin text-2xl">
          {format(day, 'EEEE', { locale })}
        </div>
      </div>
      <ul className="divide-gray-200 pb-5 divide-y md:overflow-hidden md:max-h-72 md:overflow-y-auto">
        {events.map((item, index) => {
          return (
            <DayEventItem
              key={index}
              title={item.title}
              // Format the date here to be in the format you prefer
              date={format(item.date, 'KK:mm a')}
              link={item.link}
            />
          )
        })}
      </ul>
    </div>
  );
}