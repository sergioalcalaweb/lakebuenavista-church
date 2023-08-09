'use client';

interface SectionProps {
  name: string;
  image: React.ReactNode;
  children: React.ReactNode
}


const Section = ({ name, image, children }: SectionProps) => (
  <>
    <div className='relative w-screen-xl h-56 lg:h-96 bg-black'>
      {image}
      <div
        className='relative mx-auto max-w-screen-xl pt-5 px-6 lg:px-5'
      >
        <h1 className='text-white text-4xl font-extralight lg:text-5xl'>{name}</h1>
      </div>
    </div>
    <div
      className='relative mx-auto lg:max-w-screen-lg xl:max-w-screen-xl -my-20 lg:-my-40 mb-20 lg:mb-32 bg-slate-100 h-fit shadow rounded-none lg:shadow-lg lg:rounded-lg'
    >
      {children}
    </div>
  </>

)
 
export default Section;