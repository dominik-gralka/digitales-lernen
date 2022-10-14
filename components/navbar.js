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
          <img src='/logo.png' alt="logo" className="w-16 cursor-pointer md:hover:bg-h-m_gray transition-all rounded-lg p-2" />
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
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-xl pt-10 md:pt-0`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Kurse
              </a>
            </Link>

            <Link href='/erste_schritte'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Erste Schritte
              </a>
            </Link>

            <Link href='/kontakt'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium rounded text-black items-center justify-center hover:text-h-gray transition-all'>
                Kontakt
              </a>
            </Link>

            <Link href='/mein-konto'>
              <a className='lg:inline-flex lg:w-auto w-full sm:mx-10 py-2 font-medium lg:font-base lg:text-lg rounded-lg text-black items-center justify-center hover:text-h-gray transition-all lg:bg-blue-500 lg:px-5 lg:text-white lg:hover:bg-blue-600'>
                Mein Konto
              </a>
            </Link>

          </div>
        </div>
      </nav>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css" integrity="sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD" crossOrigin="anonymous" />
      <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.js" integrity="sha384-I2b1Pcl48X93GxEkGkaMo1hrd6n+IX8H2wgSsMimGbkZoGTve/87h1FjaDNvlpQi" crossOrigin="anonymous"></script>
    </>
  );

};