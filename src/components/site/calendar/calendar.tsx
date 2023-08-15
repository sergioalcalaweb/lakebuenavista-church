'use client';

import { es } from 'date-fns/locale';
import { MonthlyBody } from './monthly-body';
import { EventApp } from '@/types';
import { MonthlyNav } from './monthly-nav';
import { startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';
import { getEvents } from '@/utils/events';

export default function Calendar() {
  const currentMonth = startOfMonth(new Date());
  const [events, setEvents] = useState<EventApp[]>([]);
  useEffect(() => {
    const getEventsFromServer = async () => {
      const eventsResp = await getEvents();
      setEvents(eventsResp);
    }
    getEventsFromServer();
  }, [])

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
