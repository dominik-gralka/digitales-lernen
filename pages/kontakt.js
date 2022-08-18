import Head from 'next/head'
import { Card } from '../components/card'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../components/navbar'
import { CookieHandler } from '../components/cookie-handler'

import { useRouter } from 'next/router'

export default function Home() {

    const router = useRouter();

    return (
        <div className="px-7 lg:px-32 min-h-screen">
            <Navbar />

            <Head>
                <title>Digitales Lernen</title>
                <meta name="description" content="Digitales Lernen an der Stadtteilschule Meiendorf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">

                <span>Digitales Lernen</span>
                <h1 className="text-4xl font-bold py-2">Kontakt</h1>

                <div className="pt-10">
                    <p className="text-lg font-medium pb-2">Dominik Gralka</p>
                    <p>Du kannst mich unter folgenden E-Mail Adresse erreichen:</p>
                    <p>dominik.gralka@sts-mei.de</p>
                </div>

            </main>

        </div>
    )
}