'use client';

import { YoutubeVideo } from '@/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import { useState } from 'react';

const YoutubeCard = ({info} : {info: YoutubeVideo}) => {
  const { snippet, id, } = info;
  const [open, setOpen] = useState(false);
  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <>
      <article 
        className="overflow-hidden cursor-pointer rounded-lg shadow transition hover:shadow-lg bg-white"
        onClick={() => setOpen(true)}
      >
        <div
          className="h-44 bg-gradient-to-rp-1 border-gray-100 bg-gradient-to-r from-slate-700 to-slate-500"
        >
          <Image
            alt={snippet.title}
            src={snippet.thumbnails.high.url}
            width={150}
            height={150}
            className="w-full h-full aspect-square object-fill"
          />          
        </div>
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500 capitalize">
            {format(new Date(snippet.publishedAt), 'd MMMM yyyy', { locale: es })}
          </time>
          <div>
            <h3 className="mt-0.5 text-gray-900">
              {snippet.title}
            </h3>
          </div>
        </div>
      </article>
      {open && (
        <div tabIndex={-1} aria-hidden="true"  className="fixed top-0 left-0 right-0 z-50 h-full w-full bg-black/25">
          <div className="relative translate-y-12 max-w-[95%] h-3/4 lg:max-w-[80%] lg:h-[80%] mx-auto">
            <div className="relative w-full h-full bg-white rounded-lg shadow">
              <button onClick={() => setOpen(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="crypto-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">cerrar modal</span>
              </button>
              <div className="px-6 py-4 border-b rounded-t">
                <h3 className="text-sm font-semibold text-gray-900 lg:text-xl">
                  {snippet.title}
                </h3>
              </div>
              <iframe className='aspect-auto w-full h-full' src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 
export default YoutubeCard;