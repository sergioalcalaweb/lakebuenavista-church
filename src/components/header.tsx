'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Logo from "./logo";
import { useState } from "react";



const Header = () => {
  const [open, menuOpen] = useState(false);
  const url = usePathname();

  return (
    <header aria-label="Site Header" className="bg-black sticky top-0 z-40">
      <AnimatePresence>
        <div className="mx-auto max-w-screen-xl px-6 md:px-3 lg:px-0">
          <div className="flex h-16 items-center justify-between">
            <Link
              className="flex-1 flex items-center gap-2"
              href="/"
            >
              <Logo className="w-[40px]" />
              <div className="font-thin text-2xl text-white">Lake Buena Vista</div>
            </Link>
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:flex items-center gap-6">
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/"
                >
                  Inicio
                </Link>
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/nosotros' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/nosotros"
                >
                  Nosotros
                </Link>
              
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/servicios' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/servicios"
                >
                  Servicios
                </Link>
              
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/predicaciones' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/predicaciones"
                >
                  Predicaciones
                </Link>
              
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/eventos' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/eventos"
                >
                  Eventos
                </Link>
              
                <Link
                  className={`text-white h-16 transition leading-[4rem] font-light border-b-2 ${url === '/contacto' ? 'border-white' : 'border-transparent'} hover:border-white`}
                  href="/contacto"
                >
                  Contacto
                </Link>
              </nav>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-white"
                type="button"
                onClick={() => menuOpen(!open)}
              >
                <span className="sr-only">Abrir menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          {open && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{
                height: 0,
                transition: { delay: 0.8, duration: 0.5 }
              }}
              aria-label="Main Nav"
              className="flex flex-col">
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/"
              >
                Inicio
              </Link>
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/nosotros' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/nosotros"
              >
                Nosotros
              </Link>
            
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/servicios' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/servicios"
              >
                Servicios
              </Link>
            
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/predicaciones' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/predicaciones"
              >
                Predicaciones
              </Link>
            
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/eventos' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/eventos"
              >
                Eventos
              </Link>
            
              <Link
                className={`flex items-center gap-2 border-l-[3px] ${url === '/contacto' ? 'border-white' : 'border-transparent'} px-4 py-3 text-white`}
                href="/contacto"
              >
                Contacto
              </Link>
            </motion.nav>
          )}
        </div>
      </AnimatePresence>
    </header>
  );
}
 
export default Header;