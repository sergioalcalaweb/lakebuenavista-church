
import Section from '@/components/section';
import VideoLoading from '@/components/video-loading';
import YoutubeCard from '@/components/youtube-card';
import { getChannelInfo } from '@/utils/youtube';
import Image from 'next/image';
import { Suspense } from 'react';


const Predicaciones = async () => {
  const { videos, conference, concerts } = await getChannelInfo();
  return (
    <Section
      name="Predicaciones"
      image={(
        <Image
          alt="predicacion"
          fill
          src="/image/predicacion.jpg"
          loading="eager"
          priority={true}
          className="absolute inset-0"
          quality={80}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      )}
    >
      <article className='p-5 lg:p-20 flex flex-col gap-10'>
        <h2 className='title pb-4 sticky top-16 bg-slate-100 z-10'>Sermones</h2>
        <Suspense fallback={<VideoLoading numberOfItems={5} />}>
          <div className='grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            {videos.map( video => <YoutubeCard info={video} key={video.etag} /> )}
          </div>
          <h2 className='title pb-4 sticky top-16 bg-slate-100 z-20'>Conferencias</h2>
          <div className='grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            {conference.map( video => <YoutubeCard info={video} key={video.etag} /> )}
          </div>
          <h2 className='title pb-4 sticky top-16 bg-slate-100 z-30'>Conciertos</h2>
          <div className='grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            {concerts.map( video => <YoutubeCard info={video} key={video.etag} /> )}
          </div>
        </Suspense>
      </article>
    </Section>
  );
}
 
export default Predicaciones;