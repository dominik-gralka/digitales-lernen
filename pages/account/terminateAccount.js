import { ExternalLinkIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { useState } from 'react'
import { Loading } from '../../components/loading'
import { useRouter } from 'next/router'

import { Navbar } from '../../components/navbar'

export default function Home() {

    const cookies = parseCookies();
    const client = cookies.fromClient;
    const router = useRouter();
    const status = router.query.status;
    const user = router.query.user;

    const [countdown, setCountdown] = useState(30);

    // Loop countdown until 0
    for (let i = 0; i < countdown; i++) {
        setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);
    }

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
                <h1 className="text-4xl font-bold py-2">Mein Nutzerkonto kündigen</h1>

                <Link href="/mein-konto">
                    <div className="mt-10 cursor-pointer lg:text-sm font-semibold">← Zurück zur Kontoübersicht</div>
                </Link>

                <div className={`${status == 'success' ? 'hidden' : ''} pt-10`}>
                    <p className="text-lg font-medium pb-2 lg:w-1/2">Mit dem Stellen dieser verbindlichen Anfrage, löscht du unwiderruflich alle Daten, die mit deinem Nutzerkonto in Verbindung stehen.</p>
                    <p className="text-lg font-medium pb-2 lg:w-1/2">Hiermit verlierst du unwiderruflich Zugriff zu dieser Plattform und dein bisheriger Fortschritt wird nicht in die Auswertung dieses Projektes aufgenommen.</p>
                    <p className="text-lg font-medium pb-2 lg:w-1/2">&quot;Digitales Lernen&quot; speichert nach europäischem Recht und Bundesdatenschutzgesetz (BDSG) keine personenbezogenen Daten, die auf eine natürliche Person beziehbar sind und so Rückschlüsse auf deren Persönlichkeit erlauben.</p>
                    <Link href="https://www.datenschutz.org/personenbezogene-daten/">
                        <a className="font-medium pb-2 lg:w-1/2 underline text-blue-400">Mehr Erfahren <ExternalLinkIcon className="w-4 inline" /></a>
                    </Link>
                </div>

                <div className={`${status !== 'success' ? 'hidden' : ''} pt-10`}>
                    <p className="text-lg font-medium pb-2 lg:w-1/2">Dein Nutzerkonto { user ? user : '' } wurde gekündigt.</p>
                </div>
                
                <div className={status == 'success' ? 'hidden' : ''}>
                    <div className={client ? '' : 'hidden'}>
                        <a className={`${countdown > 0 ? 'opacity-70 animate-pulse' : 'hidden'} lg:w-80 w-full mt-10 bg-red-500 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-md mb-5 cursor-pointer`}>{countdown} Sekunden...</a>
                        <a className={`${countdown > 0 ? 'hidden' : 'hover:bg-red-600'} lg:w-80 w-full mt-10 bg-red-500 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-md mb-5 cursor-pointer`} onClick={
                            () => {
                                window.location.href = '/api/terminateAccount?user=' + client;
                            }
                        }>Nutzerkonto unwiderruflich kündigen</a>
                    </div>
                </div>

                <div className={status == 'success' ? 'hidden' : ''}>
                    <div className={!client ? 'mt-10' : 'hidden'}>Du musst angemeldet sein, um dein Konto zu kündigen.</div>
                    <Link href="/account/exportData">
                        <a className={`${client ? 'mt-10' : 'hidden'} font-medium pb-20 lg:w-1/2 underline text-blue-400`}>Datenpaket anfordern?</a>
                    </Link>
                </div>

            </main>

        </div>
    )
}