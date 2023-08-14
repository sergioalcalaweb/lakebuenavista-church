'use client';

import {
  format,
  getYear,
} from 'date-fns';

interface MonthlyCalendarProps {
  locale: Locale;
  currentMonth: number| Date;
}

export const MonthlyNav = ({
  locale,
  currentMonth,
} : MonthlyCalendarProps) => {
  return (
    <div className="flex justify-start mb-4 py-2 sticky top-16 bg-slate-100 z-10">
      <div
        className="ml-4 mr-4 w-32 capitalize title"
        aria-label="Current Month"
      >
        {format(
          currentMonth,
          getYear(currentMonth) === getYear(new Date()) ? 'LLLL' : 'LLLL yyyy',
          { locale }
        )}
      </div>
    </div>
  );
};