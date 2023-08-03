'use client';

import { es } from 'date-fns/locale';
import { MonthlyBody } from './monthlyBody';
import { EventApp } from '@/types';
import { MonthlyNav } from './monthlyNav';
import { startOfMonth } from 'date-fns';

export default function Calendar({ events }: { events: EventApp[] }) {
  const currentMonth = startOfMonth(new Date());
  
  if(!events) return null;

  return (
    <>
      <MonthlyNav
        currentMonth={currentMonth}
        locale={es}
      />
      <MonthlyBody
        events={events}
        currentMonth={currentMonth}
        locale={es}
      />
    </>
  );
}
