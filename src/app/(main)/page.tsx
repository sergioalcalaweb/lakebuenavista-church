import Image from "next/image";
import Motion from "@/components/motion";
import LinkButton from "@/components/link-button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="relative lg:h-screen bg-black"
      >
        <Image
          alt="biblia"
          src="/image/biblia.jpeg"
          quality={90}
          fill
          loading="eager"
          priority={true}
          className="absolute inset-0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <Motion
          type="div"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className='relative mx-auto max-w-screen-xl px-4 py-32 flex-col gap-10 lg:gap-20 sm:px-6 flex lg:items-center lg:px-8 text-center'>
          <h1 className="text-white title">
            Ven y experimenta la presencia de Dios
          </h1>
          <h2 className="text-white text">
            Bienvenidos a Lake Buena Vista Spanish SDA de Orlando, FL. Somos una comunidad cristiana y nos encantaría que te unieras a nuestra familia. Por favor, únanse a nosotros para el estudio de la Biblia, la adoración y la oración.
          </h2>
        </Motion>
      </section>

      <div className='bg-white'>
        <Motion
          type="section"
          initial={{ x:25, opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className='relative mx-auto max-w-screen-xl px-10 py-20 lg:px-20 lg:py-24 flex flex-col gap-10 text-center'
        >
          <h3 className="text-black title">
            Bienvenido a Lake Buena Vista Spanish SDA
          </h3>
          <p className="text-gray-500 text">
            Lake Buena Vista, fundada hace más de 10 años por nuestro pastor <strong>Abel Morrobel</strong>. Desde entonces, el pastor Morrobel ha estado liderando nuestra iglesia y guiándonos en nuestro camino espiritual. Nos enfocamos en vivir y compartir los valores tales como el amor, la fe, la esperanza y la humildad. Nos esforzamos por seguir a Jesús y crecer juntos en nuestra fe. Esperamos que encuentres paz, consuelo y comunidad aquí entre nosotros. ¡Te esperamos!
          </p>
        </Motion>
      </div>

      <div className='bg-slate-100'>
        <section className='mx-auto max-w-screen-xl px-10 py-20 flex flex-col lg:flex-row gap-10'>
          <div className='flex flex-col flex-1 justify-center text-center gap-10 lg:text-left'>
            <h3 className="text-black title">
              Se parte de Lake Buena Vista
            </h3>
            <p className="text-gray-500 text">
              Estamos extendiendo una invitación cordial a todos aquellos que buscan una comunidad de fe y apoyo en su camino espiritual. Nuestra comunidad  está compuesta por personas amables y acogedoras que comparten valores y creencias similares. Juntos, nos esforzamos por seguir los enseñanzas de Jesús y vivir una vida cristiana significativa. Si está buscando un lugar para crecer en su fe, hacer nuevos amigos y ser parte de una familia amorosa, ¡nos encantaría tenerlo como parte de nuestra comunidad!
            </p>
            <div className='text-center lg:text-left'>
              <LinkButton link="/contacto" text="Contactanos" />
            </div>
          </div>
          <Motion
            type="div"
            initial={{ x:50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className='flex-1 flex flex-row justify-center lg:justify-end'
          >
            <Image 
              src="/image/us.png"
              alt="me"
              width={400}
              height={150}
              priority={false}
            />
          </Motion>
        </section>
      </div>
      
      <div className='bg-white'>
        <section className='mx-auto max-w-screen-xl px-10 py-20 flex flex-col-reverse ls:flex-col lg:flex-row gap-10'>
          <Motion
            type="div"
            initial={{ x:-50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className='flex-1 flex flex-row justify-center lg:justify-start'
          >
            <Image 
              src="/image/cruz.jpeg"
              alt="me"
              width={400}
              height={150}
              priority={false}
            />
          </Motion>
          <div className='flex flex-col flex-1 justify-center text-center lg:text-left gap-10'>
            <h3 className="text-black title">
              Nuestras Actividades
            </h3>
            <p className="text-gray-500 text">
              En nuestra iglesia, creemos que la alabanza es una forma poderosa de expresar nuestra gratitud y amor a Dios. Cada semana, nos reunimos para celebrar y alabar a Dios a través de cánticos, oraciones y reflexiones. Además, organizamos eventos especiales de alabanza, como conciertos de música y servicios de adoración. Todos están invitados a unirse a nosotros en estas actividades y a experimentar la alegría y la paz que viene de alabar a nuestro Señor. ¡Ven y únete a nuestra comunidad de alabanza!
            </p>
            <div className='text-center lg:text-left'>
              <LinkButton link="/servicios" text="Ver Servicios" />
            </div>
          </div>
        </section>
      </div>

      <div className='bg-slate-100'>
        <section className='mx-auto max-w-screen-xl grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 p-10'>
          <div className='flex flex-col gap-5'>
            <h3 className="text-black title text-center lg:text-left">
              Predicaciones
            </h3>
            <p className="text-gray-500 text">
              Si está buscando un lugar para adorar y crecer espiritualmente, ¡nuestra iglesia es el lugar perfecto! Nos encantaría conocerle y darle la bienvenida a nuestra familia de fe. Esperamos verle este sábado a las 11 am en nuestra iglesia Lake Buena Vista.
            </p>
            <div className='text-center lg:text-left'>
              <LinkButton link="/predicaciones" text="Ver mas" />
            </div>
          </div>

          <Motion
            type="div"
            initial={{ x:50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className='py-3 lg:p-3 w-full'
          >
            <iframe className='w-full shadow-xl rounded-xl' height="315" src="https://www.youtube.com/embed/eVqktyGe_oE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Motion>
        </section>
      </div>
      
      <div className='bg-white'>
        <section className='mx-auto max-w-screen-xl px-10 py-20 flex flex-col-reverse ls:flex-col lg:flex-row gap-10'>
          <Motion
            type="div"
            initial={{ x:-50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className='flex-1 flex flex-row justify-center lg:justify-start'
          >
            <Image 
              src="/image/thanks.jpg"
              alt="thanks"
              width={400}
              height={150}
              priority={false}
            />
          </Motion>
          <div className='flex flex-col flex-1 justify-center text-center lg:text-left gap-10'>
            <h3 className="text-black title">
              Tu Ofrenda Cuenta
            </h3>
            <p className="text-gray-500 text">
              Los invitamos con gratitud a participar en la ofrenda de diezmos y ofrendas en nuestro sitio de <Link href="https://adventistgiving.org/" target="_blank">adventistgiving.org</Link>. Esta es una oportunidad para demostrar nuestra mayordomía y generosidad, apoyando así la labor pastoral, la ayuda a los necesitados y proyectos de misión. Cada contribución es una inversión en el reino de Dios y un acto de gratitud por Su fidelidad constante en nuestras vidas. Recordemos las palabras de Pablo:  &quot;Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre &quot;. Juntos, como familia de fe, hacemos una diferencia y honramos a Dios.
            </p>
            <div className='text-center lg:text-left'>
              <LinkButton link="https://adventistgiving.org/donate/ANTTBV" text="Dona Aqui" target="_blank" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
