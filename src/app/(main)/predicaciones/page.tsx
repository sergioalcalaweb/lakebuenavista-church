
import SectionName from "@/components/site/section-name";
import VideoLoading from '@/components/site/video-loading';
import YoutubeCard from '@/components/site/youtube-card';
import { getChannelInfo } from '@/utils/youtube';
import Image from 'next/image';
import { Suspense } from 'react';


const PredictionPage = async () => {
  const { videos, conference, concerts } = await getChannelInfo();
  return (
    <SectionName
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
    </SectionName>
  );
}
 
export default PredictionPage;