import SectionName from "@/components/section-name";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Acerca de los Adventistas del Séptimo Día",
}


const About = () => {
  return ( 
    <SectionName
        name="Nosotros"
        image={(
          <Image
            alt="nosotros"
            fill
            src="/image/nosotros.jpg"
            loading="eager"
            priority={true}
            className="absolute inset-0"
            sizes="100vw"
            quality={80}
            style={{
              objectFit: 'cover',
            }}
          />
        )}
      >
        <article className='px-7 py-12 md:px-14'>
          <h2 className='title'>Acerca de los Adventistas del Séptimo Día</h2>

          <p className='text my-4'>
            La Iglesia Adventista del Séptimo Día es una iglesia protestante convencional con aproximadamente 21 millones de miembros en todo el mundo, incluyendo más de un millón de miembros en América del Norte. La Iglesia Adventista del Séptimo Día busca mejorar la calidad de vida de la gente en todas partes y hacer saber a la gente que Jesús vendrá pronto.
          </p>

          <p className='text my-4'>
            Los adventistas creen que una Trinidad de tres personas, el Padre, el Hijo y el Espíritu Santo, forman un solo Dios. Hicieron posible la salvación cuando Jesús, el Hijo, vino a la tierra como un bebé en Belén y vivió una vida sin pecado de acuerdo con la voluntad del Padre. Cuando Jesús fue crucificado por los pecados de la gente del mundo y se levantó de entre los muertos al tercer día, se ganó la victoria para todos.
          </p>

          <p className='text my-4'>
            Cuando regresó al cielo después de la resurrección, Jesús dejó el Espíritu Santo para servir como nuestro Consolador y Consejero. Prometió volver a la tierra por segunda vez para completar su plan de salvación y llevar a su pueblo al cielo. Los adventistas están entre los creyentes que esperan ese día.
          </p>

          <p className='text my-4'>
            Los adventistas creen que Dios se preocupa por la calidad de la vida humana, y que todo -la forma en que vivimos, comemos, hablamos, pensamos, nos tratamos unos a otros y nos preocupamos por el mundo que nos rodea- es parte de su plan. Nuestras familias, nuestros hijos, nuestros trabajos, nuestros talentos, nuestro dinero y nuestro tiempo son todos importantes para Él.
          </p>
          
          <div className="mt-10">
            <div className="columns-1 md:columns-3 lg:columns-4 gap-5 md:gap-8 [&>img:not(:first-child)]:mt-5 items-center">
              <Image 
                className="rounded-lg shadow-2xl mx-auto"
                src="/image/about/about1.jpeg"
                alt="about-1"
                width={400}
                height={500}
              />
              <Image 
                className="rounded-lg shadow-2xl mx-auto"
                src="/image/about/about2.jpg"
                alt="about-2"
                width={400}
                height={500}
              />
              <Image 
                className="rounded-lg shadow-2xl mx-auto"
                src="/image/about/about3.jpeg"
                alt="about-3"
                width={400}
                height={500}
              />
              <Image 
                className="rounded-lg shadow-2xl mx-auto"
                src="/image/about/about4.jpeg"
                alt="about-4"
                width={400}
                height={500}
              />
              <Image 
                className="rounded-lg"
                src="/image/about/about5.jpeg"
                alt="about-5"
                width={400}
                height={500}
              /> 
              <Image 
                className="rounded-lg"
                src="/image/about/about6.jpeg"
                alt="about-6"
                width={400}
                height={500}
              /> 
              <Image 
                className="rounded-lg"
                src="/image/about/about7.jpeg"
                alt="about-7"
                width={400}
                height={500}
              /> 
            </div>
          </div>
        </article>

      </SectionName>
  );
}
 
export default About;