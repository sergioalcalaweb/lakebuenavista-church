import { EventApp } from "@/types";
import { UTCDate } from "@date-fns/utc";
import { eachDayOfInterval, getDay, lastDayOfMonth, startOfMonth, Locale, format, isSunday } from "date-fns";
import { daysInWeek } from "@/utils/constants";
import { API_URL, NODE_ENV } from "@/config";
import { Event, ResponseStrapi, Service } from "@/types/events";
import { parsearHour } from "./time-util";
import { siteConfig } from "@/config/site";

const OPT: any = NODE_ENV === 'development' ? {cache: "no-cache", timeout: 10000} : {next: { revalidate: 3600 }, timeout: 5000};

export const getEvents = async () => {

  const start = startOfMonth(new Date());
  const end = lastDayOfMonth(new Date());
  let events: EventApp[] = [];

  const URL_SERVICES = `${API_URL}services?fields[0]=title&fields[1]=title_calendar&fields[2]=slug&fields[3]=time_init&fields[4]=day&populate[often][fields][0]=uid`;
  const URL_EVENTS = `${API_URL}events?fields[0]=title&fields[1]=title_calendar&fields[2]=slug&fields[3]=time_init&fields[4]=time_end&field[date_init]&fields[5]=date_init&fields[6]=date_end&[$gte]=${start}&field[date_end][$lte]=${end}`;

  const { data: services } = await fetch(URL_SERVICES, OPT).then(res => res.json());
  const { data: eventsInfo } = await fetch(URL_EVENTS, OPT).then(res => res.json());

  eventsInfo.forEach((event: any) => {
    const durationOfEventInDays = eachDayOfInterval({
      start: new Date(event.attributes.date_init),
      end: new Date(event.attributes.date_end)
    });

    const eventsToAdd = durationOfEventInDays.map((day, index) => {
      const title = event.attributes.title_calendar || event.attributes.title;
      const hours = event.attributes.time_init.split(':')[0];
      const minutes = event.attributes.time_init.split(':')[1];
      const date = event.attributes.conference && index === durationOfEventInDays.length -1 ? 
        day.setHours(11, 0) : 
        day.setHours(hours, minutes);
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

  let week = 1;
  daysOfMonth.forEach((day) => {
    const dayOfWeekText = format(day, 'EEEE');
    const dayEventsByService = services.filter((service: any) => {
      return dayOfWeekText === service.attributes.day;
    }).reduce((acc: EventApp[], service: any) => {
      const title = service.attributes.title_calendar || service.attributes.title;
      if(
        service.attributes.often.data.attributes.uid === 'every-week' ||
        (service.attributes.often.data.attributes.uid === 'first-and-third' && [1,3].includes(week))
      ) {
        acc.push({
          title,
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

export const getEvent = async (slug: string): Promise<Event> => {
  const URL = `${API_URL}events?filters[slug][$eq]=${slug}&populate=*`;
  const response: ResponseStrapi = await fetch(URL, OPT).then(res => res.json());
  
  const time_init = parsearHour(response.data[0].attributes.time_init);
  const time_end = parsearHour(response.data[0].attributes.time_end);

  const date_init = new Date(response.data[0].attributes.date_init);
  const date_end = new Date(response.data[0].attributes.date_end);

  return {
    title: response.data[0].attributes.title,
    title_calendar: response.data[0].attributes.title_calendar,
    link: `${siteConfig.url}eventos/${response.data[0].attributes.slug}`,
    time_init,
    time_end,
    description: response.data[0].attributes.description,
    blog: response.data[0].attributes.blog,
    image: response.data[0].attributes.image.data.attributes.formats,
    date_init,
    date_end,
  };
}

export const getService = async (slug: string) : Promise<Service> => {
  const URL = `${API_URL}services?filters[slug][$eq]=${slug}&populate=*`;
  const response: ResponseStrapi  = await fetch(URL, OPT).then(res => res.json());
  const time_init = parsearHour(response.data[0].attributes.time_init);
  const time_end = parsearHour(response.data[0].attributes.time_end);
  
  return {
    title: response.data[0].attributes.title,
    title_calendar: response.data[0].attributes.title_calendar,
    link: `${siteConfig.url}servicios/${response.data[0].attributes.slug}`,
    time_init,
    time_end,
    description: response.data[0].attributes.description,
    blog: response.data[0].attributes.blog,
    image: response.data[0].attributes.image.data.attributes.formats,
    day: response.data[0].attributes.day,
    often: response.data[0].attributes.often.data.attributes.uid,
  }
}


