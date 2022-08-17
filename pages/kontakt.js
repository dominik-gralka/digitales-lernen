import Head from 'next/head'
import { Card } from '../components/card'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../components/navbar'
import { CookieHandler } from '../components/cookie-handler'

import { useRouter } from 'next/router'

export default function Home({ cookies }) {

    const router = useRouter();

    return (
        <div className="px-7 lg:px-32 min-h-screen">
            <Navbar />

            <CookieHandler />

            <Head>
                <title>Digitales Lernen</title>
                <meta name="description" content="Digitales Lernen an der Stadtteilschule Meiendorf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">

                <span>Digitales Lernen</span>
                <h1 className="text-4xl font-bold py-2">Willkommen,</h1>
                <h2 className="text-lg pt-2 font-medium pb-10">auf dieser Seite findest du erste Schritte zum digitalen Lernen.</h2>

                


            </main>

        </div>
    )
}

Home.getInitialProps = async function (ctx) {
    // Parse
    const cookies = parseCookies(ctx);

    return { cookies };
};