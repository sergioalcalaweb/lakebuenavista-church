import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer aria-label="Pie de pagina" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-1 sm:px-6 lg:px-8">
        <nav aria-label="Navegacion" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/nosotros"
              >
                Nosotros
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/servicios"
              >
                Servicios
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/eventos"
              >
                Eventos
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/predicaciones"
              >
                Predicaciones
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/contacto"
              >
                Contacto
              </Link>
            </li>
            {/* <li>
              <Link 
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="mx-auto max-w-5xl px-4 py-1 sm:px-6 lg:px-8 mt-6">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="flex items-center justify-center gap-1.5 sm:justify-start"
                href="mailto:contacto@lakebuenavistachurch.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="text-gray-700">
                  contacto@lakebuenavistachurch.com
                </span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center justify-center gap-1.5 sm:justify-start"
                href="tel:+14077916266"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="text-gray-700">(407) 791-6266</span>
              </Link>
            </li>

            <li className="flex items-start justify-center gap-1.5 sm:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 not-italic text-gray-700">
                3979 S Orange Blossom Trl, Orlando, FL, United States, Florida
              </address>
            </li>
          </ul>
        </div>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="https://www.facebook.com/LBVChurch"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com/@lbvyouth"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Tiktok</span>
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.youtube.com/@iglesiaadventistalakebuena9625"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Youtube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="text-center p-5 sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500">
            Todos los derechos reservados.
          </p>

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2023 IASD Lake Buena Vista
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
