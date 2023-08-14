import { EventApp } from "@/types";
import { eachDayOfInterval, getDay, isSaturday, isThursday, isWednesday, lastDayOfMonth, startOfMonth } from "date-fns";
import { daysInWeek } from "@/utils/constants";

export const getEvents = async () => {

  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: lastDayOfMonth(new Date())
  });

  let saturday = 1;
  const events: EventApp[] = [];
  daysOfMonth.forEach((day) => {
    if(isSaturday(day)) {
      const dayEvents = [
        { title: 'Escuela Sabatica', date: day.setHours(9, 15), link: '/servicios'  },
        { title: 'Culto Divino', date: day.setHours(11, 0), link: '/servicios'  },
      ];

      if (saturday === 1 || saturday === 3) {
        dayEvents.push({ title: 'Sociedad De Jovenes', date: day.setHours(14, 30), link: '/servicios'  });
      }

      saturday++;

      events.push(...dayEvents);
    }
    if(isWednesday(day)) {
      const dayEvents = [
        { title: 'Servicio de Oracion', date: day.setHours(19, 30), link: '/servicios'  },
      ];
      events.push(...dayEvents);
    }
    if(isThursday(day)) {
      const dayEvents = [
        { title: 'Banco de alimentos', date: day.setHours(15, 0), link: '/servicios'  },
      ];
      events.push(...dayEvents);
    }
  });

  return events;
}

export const handleOmittedDays = ({
  days,
  locale,
  omitDays,
} : {
  days: Date[];
  locale: Locale;
  omitDays?: number[];
}) => {
  let headings = daysInWeek({ locale });
  let daysToRender = days;

  //omit the headings and days of the week that were passed in
  if (omitDays) {
    headings = daysInWeek({ locale }).filter(
      (day) => !omitDays.includes(day.day)
    );
    daysToRender = days.filter(day => !omitDays.includes(getDay(day)));
  }

  // omit the padding if an omitted day was before the start of the month
  let firstDayOfMonth: number = getDay(daysToRender[0]);
  if (omitDays) {
    let subtractOmittedDays = omitDays.filter(day => day < firstDayOfMonth)
      .length;
    firstDayOfMonth = firstDayOfMonth - subtractOmittedDays;
  }
  let padding: Array<number> = new Array(firstDayOfMonth).fill(0);

  return { headings, daysToRender, padding };
};