import Head from 'next/head'
import { Card } from '../components/card'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import useSWR from 'swr'

import { Navbar } from '../components/navbar'
import { CookieHandler } from '../components/cookie-handler'
import { Loading } from '../components/loading'

import { Recommended } from '../components/recommended'
import SlowConnection from '../components/slow-connection-warning'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home({ cookies }) {

  const { data, error } = useSWR('/api/ping', fetcher);

  if (!data) {
    return <Loading/>
  }

  if (data.latency > 10000) {
    if (!cookies.slowConnection) {
      return <SlowConnection/>
    }
  } 

  return (
    <div className="px-7 lg:px-32 min-h-screen">
      <Navbar/>

      <CookieHandler/>

      <Head>
        <title>Digitales Lernen</title>
        <meta name="description" content="Digitales Lernen an der Stadtteilschule Meiendorf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <span>Digitales Lernen</span>
        <h1 className="text-4xl font-bold py-2">Willkommen zurück,</h1>
        <h2 className="text-lg pt-2 font-medium pb-10">hier sind deine Kurse.</h2>

        {cookies.fromClient ? (<>

          <Recommended
            client={cookies.fromClient}
          />

          <div className="py-10">
            <h2 className="text-4xl font-medium pb-5">Alle Kurse</h2>
            <h2 className="text-xl font-medium pb-5">Kapitel 1: Grundlagen der Integralrechnung</h2>
            <div className="flex flex-col lg:flex-row gap-10">
              <Card kurs="einleitung" />
              <Card kurs="stammfunktion" />
              <Card kurs="integrieren" />
            </div>
            <h2 className="text-xl font-medium py-5">Kapitel 2: Anwendungen der Integralrechnung</h2>
            <div className="flex flex-col lg:flex-row gap-10">
              <Card kurs="uneigentlich" />
              <Card kurs="zwischen_den_integralen" />
              {/*<Card kurs="rotationsintegrale" />*/}
            </div>
            <h2 className="text-xl font-medium py-5">Wiederholen</h2>
            <div className="flex flex-col lg:flex-row gap-10">
              <Card kurs="ableiten" />
            </div>
          </div>

        </>) : (
          <a>Bitte melde dich an um fortzufahren.</a>
        )
        }

      </main>

    </div>
  )
}

Home.getInitialProps = async function(ctx) {
  // Parse
  const cookies = parseCookies(ctx);

  return { cookies };
};