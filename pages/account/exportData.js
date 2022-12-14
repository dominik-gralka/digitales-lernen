import { ExternalLinkIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../../components/navbar'
import { saveAs } from 'file-saver'
import { Loading } from '../../components/loading'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {

    const cookies = parseCookies();
    const client = cookies.fromClient;

    const { data, error } = useSWR('/api/exportData?user=' + client, fetcher);

    function generateZip() {
        let buffer = Buffer.from(data.content, 'base64');
        const blob = new Blob([buffer]);

        // define filename with export, client and todays date
        const filename = 'Mein Datenpaket (' + client + '_' + new Date().toISOString().slice(0, 10) + ').zip';

        saveAs(blob, filename);

    }

    if (!data) {
        return <Loading />
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
                <h1 className="text-4xl font-bold py-2">Meine Daten exportieren</h1>

                <Link href="/mein-konto">
                    <div className="mt-10 cursor-pointer lg:text-sm font-semibold">← Zurück zur Kontoübersicht</div>
                </Link>

                <div className="pt-10">
                    <p className="text-lg font-medium pb-2 lg:w-1/2">Mit dem Stellen dieser verbindlichen Anfrage, bekommst du innerhalb kürzester Zeit eine Auskunft über alle für dieses Konto relevante gespeicherten Daten.</p>
                    <p className="text-lg font-medium pb-2 lg:w-1/2">&quot;Digitales Lernen&quot; speichert nach europäischem Recht und Bundesdatenschutzgesetz (BDSG) keine personenbezogenen Daten, die auf eine natürliche Person beziehbar sind und so Rückschlüsse auf deren Persönlichkeit erlauben.</p>
                    <Link href="https://www.datenschutz.org/personenbezogene-daten/">
                        <a className="font-medium pb-2 lg:w-1/2 underline text-blue-400">Mehr Erfahren <ExternalLinkIcon className="w-4 inline" /></a>
                    </Link>
                </div>

                <div>
                    <a className={`${!client ? 'opacity-50' : 'hover:bg-emerald-600'} lg:w-64 w-full mt-10 bg-emerald-500 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-md mb-5 cursor-pointer`} onClick={() => generateZip()}>Datenpaket anfordern</a>
                    <span className={!client ? '' : 'hidden'}>Du musst angemeldet sein, um ein Datenpaket anfordern zu können.</span>
                </div>

            </main>

        </div>
    )
}