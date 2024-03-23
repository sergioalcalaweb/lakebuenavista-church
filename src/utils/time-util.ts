import { format } from "date-fns";

export const parsearHour = (hourString: string): string => {
  const hourSections = hourString.split(':');
  const date = new Date();
  date.setHours(parseInt(hourSections[0], 10));
  date.setMinutes(parseInt(hourSections[1], 10));
  date.setSeconds(parseInt(hourSections[2], 10));
  return format(date, '	h:mm - a');
}

export const rangeOfHours = (start: string, end: string): string => {
  const startParts = start.split('-');
  const endParts = end.split('-');
  if(startParts[1] === endParts[1]) {
    return `${startParts[0]} - ${endParts[0]} ${endParts[1]}`;
  }
  return `${start} - ${end}`;
}
