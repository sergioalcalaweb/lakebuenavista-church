import { EventApp } from "@/types";
import { eachDayOfInterval, getDay, isSaturday, isThursday, isWednesday, lastDayOfMonth, startOfMonth, Locale, isFriday, format, isSunday, startOfDay, addDays } from "date-fns";
import { daysInWeek } from "@/utils/constants";
import { API_URL } from "@/config";

export const getEvents = async () => {

  const start = startOfMonth(new Date());
  const end = lastDayOfMonth(new Date());
  let events: EventApp[] = [];

  const URL_SERVICES = `${API_URL}services?populate=*`;
  const URL_EVENTS = `${API_URL}events?populate=*&field[date_init][$gte]=${start}&field[date_end][$lte]=${end}`;

  const { data: services } = await fetch(URL_SERVICES).then(res => res.json());
  const { data: eventsInfo } = await fetch(URL_EVENTS).then(res => res.json());

  eventsInfo.forEach((event: any) => {

    const durationOfEventInDays = eachDayOfInterval({
      start: event.attributes.date_init,
      end: event.attributes.date_end
    });

    const eventsToAdd = durationOfEventInDays.map((day, index) => {
      const title = event.attributes.title;
      const date = event.attributes.conference && index === durationOfEventInDays.length -1 ? 
        addDays(day.setHours(11, 0), 1) : 
        addDays(day.setHours(event.attributes.time_init.split(':')[0], event.attributes.time_init.split(':')[1]), 1) ;
      const link = `/eventos/${event.attributes.slug}`;
      return {
        title,
        date,
        link
      }
    });
    
    events.push(...eventsToAdd);

  });

  const daysOfMonth = eachDayOfInterval({
    start,
    end
  });

  console.log(startOfMonth);

  let week = 1;
  daysOfMonth.forEach((day) => {
    const dayOfWeekText = format(day, 'EEEE');
    const dayEventsByService = services.filter((service: any) => {
      return dayOfWeekText === service.attributes.day;
    }).reduce((acc: EventApp[], service: any) => {

      if(
        service.attributes.Often.data.attributes.uid === 'every-week' ||
        (service.attributes.Often.data.attributes.uid === 'first-and-third' && [1,3].includes(week))
      ) {
        acc.push({
          title: service.attributes.title,
          date: day.setHours(service.attributes.time_init.split(':')[0], service.attributes.time_init.split(':')[1]),
          link: `/servicios/${service.attributes.slug}`
        });
      }

      return acc;
    }, []);

    if(isSunday(day)) {
      week++;
    }
    events.push(...dayEventsByService);
  });

  return events.sort((a,b) => a.date - b.date);
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

export const getEvent = async (slug: string) => {
  const URL = `${API_URL}events?filters[slug][$eq]=${slug}&populate=*`;
  const eventRequest = await fetch(URL, {cache: "no-cache"});
  const { data: event } = await eventRequest.json();
  return event[0];
}

export const getService = async (slug: string) => {
  const URL = `${API_URL}services?filters[slug][$eq]=${slug}&populate=*`;
  const eventRequest = await fetch(URL, {cache: "no-cache"});
  const { data: event } = await eventRequest.json();
  return event[0];
}