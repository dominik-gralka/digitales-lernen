import Head from 'next/head'

import { Navbar } from '../../components/navbar'

export default function Home() {


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

                <div className="pt-10">
                    <p className="text-lg font-medium pb-2">Dominik Gralka</p>
                </div>

            </main>

        </div>
    )
}