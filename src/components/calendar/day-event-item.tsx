'use client';

import { parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

interface DayEventItemProps {
  title: string;
  date: string;
  link: string;
} 

export const DayEventItem = ({
  title,
  date,
  link,
}: DayEventItemProps) => {
  
  // const dateParse = parseISO(date);
  return (
    <li className="py-2">
      <Link 
        href={link}
        className="flex font-thin flex-1 flex-col text-lg md:text-sm transition-all hover:bg-slate-200"
      >
        <h3 className='font-normal'>{title}</h3>
        <div className='flex justify-between items-center mt-4'>
          <p className="text-gray-900" suppressHydrationWarning>{date}</p>
        </div>
      </Link>
    </li>
  );
};