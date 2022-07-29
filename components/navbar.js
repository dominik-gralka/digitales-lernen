/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import { CookieHandler } from './cookie-handler';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap py-10'>
        <Link href='/'>
          <img src='/logo.png' alt="logo" className="w-16 cursor-pointer md:hover:bg-h-m_gray transition-all rounded-lg p-2"/>
        </Link>
        <button
          className=' inline-flex p-3 rounded-xl transition-all lg:hidden text-neutral-800 ml-auto outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-10'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-xl pt-10 md:pt-0`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

            <Link href='/kurse'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Kurse
              </a>
            </Link>

            <Link href='/handbooks'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Informationen
              </a>
            </Link>

            <Link href='/handbooks'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Kontakt
              </a>
            </Link>

            <Link href='/logout'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Ausloggen
              </a>
            </Link>

          </div>
        </div>
      </nav>
    </>
  );

};