import { eachDayOfInterval, endOfMonth, isSameDay, Locale, startOfMonth } from 'date-fns';
import { EventApp } from '@/types';
import { handleOmittedDays } from '@zach.codes/react-calendar';
import { MonthlyDay } from './monthlyDay';

interface MonthlyBodyContext {
  day: Date;
  events: EventApp[];
}

//to prevent these from being purged in production, we make a lookup object
const headingClasses: any = {
  l3: 'lg:grid-cols-3',
  l4: 'lg:grid-cols-4',
  l5: 'lg:grid-cols-5',
  l6: 'lg:grid-cols-6',
  l7: 'lg:grid-cols-7',
};

export function MonthlyBody({
  events,
  currentMonth,
  locale,
} : {
  events: EventApp[];
  currentMonth: number | Date;
  locale: Locale,
}) {

  let monthStart = startOfMonth(currentMonth);
  let days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  let { headings, daysToRender, padding } = handleOmittedDays({
    days,
    locale,
  });


  let headingClassName =
    'border-black border-b-2 p-2 lg:block hidden capitalize font-thin text-2xl';
  return (
    <div className="bg-white border-black">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 ${
          headingClasses[`l${headings.length}`]
        }`}
      >
        {headings.map(day => (
          <div
            key={day.day}
            className={headingClassName}
            aria-label="Dia de la semana"
          >
            {day.label}
          </div>
        ))}
        {padding.map((_, index) => (
          <div
            key={index}
            className={headingClassName}
            aria-label="Dias del mes anterior o siguiente"
          >
            <span className="sr-only">No Events</span>
          </div>
        ))}
        {daysToRender.map(day => (
          <MonthlyDay
            key={day.toISOString()} 
            day={day} 
            locale={locale} 
            events={events.filter(data => isSameDay(data.date, day))}
          />
        ))}
      </div>
    </div>
  );
}

