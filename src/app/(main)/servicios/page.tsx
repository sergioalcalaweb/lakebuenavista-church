import Image from 'next/image';
import Section from '@/components/section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Servicios",
  description: "Nos encantaría que se unieran a nosotros.",
}

const Services = () => {
  return (
      <Section
        name="Servicios"
        image={(
          <Image
            alt="servicios"
            fill
            src="/image/servicios.jpg"
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
        <section
          className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-10 md:mb-0"
        >
          <div className="px-10 py-10 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="title">
                Servicio de Adoración
              </h2>

              <p className="text-gray-500 text mt-4">
                Nos encantaría que se unan a nosotros en nuestro servicio de adoración semanal, que se celebra <strong>todos los sábados a las 11 am.</strong> Nos reunimos para adorar juntos, aprender más sobre la Palabra de Dios y disfrutar de la comunión con nuestra familia de fe.
              </p>
              <p className="hidden text-gray-500 text mt-4 md:block">
                Nuestro servicio incluye música en vivo, oración, enseñanza bíblica y tiempo para conectarse con otros miembros de la iglesia. Nos esforzamos por crear un ambiente acogedor y amigable para todos, y esperamos que se sientan bienvenidos y cómodos en nuestra comunidad.
              </p>
              <p className=" text-gray-500 text mt-4">
                Si está buscando un lugar para adorar y crecer espiritualmente, ¡nuestra iglesia es el lugar perfecto! Nos encantaría conocerle y darle la bienvenida a nuestra familia de fe. Esperamos verle este <strong>sábado a las 11 am</strong> en nuestra iglesia Lake Buena Vista.
              </p>
            </div>
          </div>

          <Image
            src='/image/culto.jpg'
            alt='adoracion'
            width={500}
            height={500}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
          
        </section>

        <section
          className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-10 md:mb-0"
        >
          <div className="px-10 py-10 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="title">
                Escuela Sabática
              </h2>

              <p className="text-gray-500 mt-4 text">
                Nos gustaría invitarles a unirse a nosotros todos los <strong>sábados a las 9:15 am</strong> para un tiempo de aprendizaje bíblico y comunión. Durante la Escuela Sabática, tendremos la oportunidad de estudiar la Palabra de Dios y crecer juntos en nuestra fe. A través de la discusión y el aprendizaje guiado por un maestro, tendremos la oportunidad de profundizar en nuestra comprensión de las Escrituras y cómo aplicarlas a nuestras vidas diarias.
              </p>              
            </div>
          </div>

          <Image
            src='/image/escuela2.jpg'
            alt='adoracion'
            width={500}
            height={500}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
          
        </section>

        <section
          className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-10 md:mb-0"
        >
          <div className="px-10 py-10 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="title">
                Sociedad de Jovenes
              </h2>

              <p className="text-gray-500 text mt-4">
                Hola a todos los jóvenes! Les invitamos a nuestra Sociedad de Jóvenes de la iglesia Adventista del Séptimo Día, que se celebra <strong>el 1er y 3er sábado de cada mes a las 2:30 pm.</strong> Durante nuestra Sociedad de Jóvenes, tendremos la oportunidad de conectarnos con otros jóvenes de nuestra comunidad de fe, aprender más sobre la Biblia y cómo aplicarla a nuestras vidas diarias, y participar en actividades divertidas y enriquecedoras.
              </p>
              <p className="text-gray-500 text mt-4">
                Nos enfocamos en temas que son relevantes para los jóvenes de hoy, y nos aseguramos de crear un ambiente acogedor y amigable para todos. Queremos que se sientan bienvenidos y cómodos en nuestra comunidad de jóvenes.
              </p>              
            </div>
          </div>

          <Image
            src='/image/escuela.jpg'
            alt='adoracion'
            width={500}
            height={500}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
          
        </section>

        <section
          className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-10 md:mb-0"
        >
          <div className="px-10 py-10 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="title">
                Banco de alimentos
              </h2>
              <p className="text-gray-500 text mt-4">
                ¡Hola a todos! Les invitamos a nuestro Banco de Alimentos de la iglesia Lake Buena Vista, que se celebra todos los <strong>jueves a las 3:00 pm.</strong> El Banco de Alimentos es un programa diseñado para proporcionar alimentos y nos enorgullece poder servir a nuestra comunidad de esta manera y esperamos poder ayudar a quienes lo necesitan.
              </p>             
            </div>
          </div>

          <Image
            src='/image/comida.jpg'
            alt='adoracion'
            width={500}
            height={500}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
          
        </section>

      </Section>
  );
}
 
export default Services;