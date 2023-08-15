import { enUS } from "date-fns/locale";

interface Day {
  day: number;
  label: string | undefined;
}

interface MenuItem {
  path: string;
  name: string;
}

export const publicUrls: string[] = [
  '/',
  '/nosotros',
  '/servicios',
  '/predicaciones',
  '/eventos',
  '/contacto'
];

export const menuItems: MenuItem[] = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/nosotros',
    name: 'nosotros'
  },
  {
    path: '/servicios',
    name: 'servicios'
  },
  {
    path: '/predicaciones',
    name: 'predicaciones'
  },
  {
    path: '/eventos',
    name: 'eventos'
  },
  {
    path: '/contacto',
    name: 'contacto'
  },
];

export const dashboarItems: MenuItem[] = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/servicios',
    name: 'servicios'
  },
  {
    path: '/eventos',
    name: 'eventos'
  },
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