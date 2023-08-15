import SectionName from "@/components/site/section-name";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Queremos estar allí para ustedes",
}

const Contact = () => {
  return (
    <SectionName
        name="Contacto"
        image={(
          <Image
            alt="contacto"
            fill
            src="/image/section.jpg"
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

        <section className="relative flex flex-wrap lg:h-1/2 lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg">
              <h1 className="title">Comunicate con Nosotros</h1>

              <p className="mt-4 text-gray-500 text">
                ¡Hola a todos! Queremos estar allí para ustedes en todo momento. Para ayudarnos a hacerlo, hemos creado un formulario en línea para que puedan enviar sus peticiones de oración, dudas o sugerencias que tengan. Les aseguramos que sus peticiones serán atendidas por nuestro equipo. ¡Estamos aquí para apoyarles y acompañarles en su camino espiritual!
              </p>
            </div>

            <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="input"
                  placeholder="Correo electronico"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                  className="input"
                  placeholder="Mensaje o pedido de oración"
                  rows={8}
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4 text-center">
                <button
                  disabled
                  className="group relative inline-block w-[250px] text-center overflow-hidden border border-gray-600 px-8 py-3 focus:outline-none focus:ring disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-gray-600 transition-all group-hover:w-full group-active:bg-gray-500"
                  ></span>

                  <span
                    className="relative text-sm font-light text-gray-600 transition-colors group-hover:text-white"
                  >
                    Enviar
                  </span>
                </button>
              </div>
            </form>
          </div>
          <iframe className="relative aspect-square h-64 w-full sm:h-96 lg:h-full lg:w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2256387388948!2d-81.39811928255615!3d28.502858300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1468097944cc19e3%3A0x910444deb4899611!2sLake%20Buena%20Vista%20Seventh-day%20Adventist%20Church!5e0!3m2!1ses!2sus!4v1675469445682!5m2!1ses!2sus" title="direccion"></iframe>
        </section>

      </SectionName>
  );
}
 
export default Contact;