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
        <article className=' py-12 px-14 text-left'>
          <h2 className='title text-center md:text-left'>Acerca de los Adventistas del Séptimo Día</h2>

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
        </article>

      </SectionName>
  );
}
 
export default About;