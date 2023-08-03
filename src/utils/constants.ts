import { enUS } from "date-fns/locale";

interface Day {
  day: number;
  label: string | undefined;
}

export const publicUrls: string[] = [
  '/',
  '/nosotros',
  '/servicios',
  '/predicaciones',
  '/eventos',
  '/contacto'
];

export const daysInWeek = ({ locale = enUS } : { locale: Locale}) : Day[] => [
  { day: 0, label: locale.localize?.day(0) },
  { day: 1, label: locale.localize?.day(1) },
  { day: 2, label: locale.localize?.day(2) },
  { day: 3, label: locale.localize?.day(3) },
  { day: 4, label: locale.localize?.day(4) },
  { day: 5, label: locale.localize?.day(5) },
  { day: 6, label: locale.localize?.day(6) },
];