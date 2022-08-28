import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../components/navbar'
import { CookieHandler } from '../components/cookie-handler'

import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Loading } from '../components/loading'
import { useState } from 'react'
import { Card } from '../components/card'

import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Konto() {

    const router = useRouter();
    const cookies = parseCookies();
    const client = cookies.fromClient;

    const { data, error } = useSWR('/api/get_all_progress?user=' + client, fetcher);
    const circumference = 30 * 2 * Math.PI;

    const [visible, setVisible] = useState(false);

    if (!data) {
        return <Loading />
    }

    if (!client) {
        router.push('/login');
    } else return (
        <div className="px-7 lg:px-32 min-h-screen">
            <Navbar />

            <CookieHandler />

            <Head>
                <title>Digitales Lernen: Mein Konto</title>
                <meta name="description" content="Meine Kontoübersicht" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">

                <span>Digitales Lernen</span>
                <h1 className="text-4xl font-bold py-2">Mein Konto</h1>

                <div className="flex lg:flex-row flex-col lg:gap-20 gap-16 justify-between">

                    <div className="mt-10 rounded-lg">
                        <a className="bg-blue-200 p-2 rounded-md font-medium text-sm mb-5 ">Vertraulich</a>
                        <p className="text-2xl font-semibold pb-2 pt-5">Mein Anmeldecode</p>
                        <p className={`${visible ? '' : 'blur-md'} text-6xl font-bold py-5 transition-all cursor-default text-blue-500`}
                            onClick={() => setVisible(!visible)}
                        >{client}</p>
                        <span className='text-gray-400'>Klicke auf das Feld um deinen Code anzuzeigen.</span>
                    </div>

                    <div className="lg:mt-10 w-full border-2 rounded-xl p-2 pl-5">

                        <div className="py-5">
                            <p className="text-2xl font-semibold pb-2">Mein Fortschritt</p>
                            <div className="flex">
                                <div className='flex justify-center items-center pr-3'>
                                    <svg className="w-20 h-20 -rotate-90">
                                        <circle className="text-gray-300" strokeWidth="8" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                                        <circle className="text-green-500" strokeWidth="8" stroke="currentColor" fill="transparent" strokeLinecap="round" r="30" cx="40" cy="40" strokeDasharray={circumference} strokeDashoffset={circumference - data.percentage / 100 * circumference}></circle>
                                    </svg>
                                </div>
                                <p className="text-6xl font-bold py-5 transition-all cursor-default text-green-500">{data.percentage}%</p>
                            </div>
                            <span className='text-gray-400'>
                                {data !== 100 ? 'Gut gemacht. Weiter so!' : 'Du hast alle Kurse abgeschlossen.'}
                            </span>

                        </div>
                    </div>

                </div>

                <hr className="my-16 border-t-2" />

                <div className="rounded-lg">
                    <p className="text-3xl font-semibold mb-16">Zuletzt besucht & am weitesten</p>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <Card kurs={data.newest.kurs} />
                        <Card kurs={data.highest.kurs} />
                    </div>
                </div>

                <hr className="my-16 border-t-2" />

                <div className="rounded-lg">
                    <p className="text-3xl font-semibold mb-10">Konto-Verwaltung</p>
                    <div className="flex flex-col lg:flex-row lg:gap-5">

                        <Link href="/account/exportData">
                            <a className="bg-emerald-500 hover:bg-emerald-600 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-sm mb-5">Meine Daten exportieren</a>
                        </Link>

                        <Link href="/account/terminateAccount">
                            <a className="bg-orange-400 hover:bg-orange-500 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-sm mb-5">Nutzerkonto nach Art. 17 DSGVO kündigen</a>
                        </Link>

                        <Link href="/account/logout">
                            <a className="bg-red-500 hover:bg-red-600 transition-all p-3 px-5 flex justify-center text-white rounded-md font-lg text-sm mb-5">Abmelden</a>
                        </Link>

                    </div>
                </div>

                <hr className="my-16 border-t-2" />

            </main>

        </div>
    )
}