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
    path: '/dashboard',
    name: 'home'
  },
  {
    path: '/dashboard/services',
    name: 'servicios'
  },
  {
    path: '/dashboard/events',
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

export const daysOfWeek = [
  {value: 'MONDAY', label:'Monday'},
  {value: 'TUESDAY', label:'Tuesday'},
  {value: 'WEDNESDAY', label:'Wednesday'},
  {value: 'THURSDAY', label:'Thursday'},
  {value: 'FRIDAY', label:'Friday'},
  {value: 'SATURDAY', label:'Saturday'},
  {value: 'SUNDAY', label:'Sunday'},
]

export const frequency = [
  {value: 'once', label:'Once a month'},
  {value: 'every_week', label:'Every week of the month'},
  {value: 'first_last', label:'First and Last of the month'},
  {value: 'first_second', label:'First and second of the month'},
  {value: 'first_third', label:'First and Third of the month'},
]