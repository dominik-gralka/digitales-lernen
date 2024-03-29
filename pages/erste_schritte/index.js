import Head from 'next/head'
import { Card } from '../../components/card'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../../components/navbar'
import { CookieHandler } from '../../components/cookie-handler'

import { useRouter } from 'next/router'

import useSWR from 'swr'
import { Loading } from '../../components/loading'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home({ cookies }) {

    const router = useRouter();
    const client = parseCookies().fromClient;
    const { data, error } = useSWR('/api/get_all_progress?user=' + client, fetcher);

    if (!data) {
        return <Loading/>
    }

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

                <div className="h-auto">

                <h2 className="text-3xl font-semibold pb-5">Du wurdest folgender Gruppe zugeteilt</h2>
                <div className="my-10 lg:w-96 w-full border-2 rounded-xl p-2 pl-5">
                        <div className="py-5">
                            <p className="text-2xl font-semibold pb-2">Konto-Status</p>
                            <div>
                                <p className="text-4xl font-bold py-5 transition-all cursor-default text-green-500">Gruppe { (data.group).toUpperCase() }</p>
                                <span className='text-gray-400'>
                                    { data.group == 'a' ? 'Du kannst an allen Kursen und Evaluationen teilnehmen.' : 'Du kannst an allen Evaluationen teilnehmen.' }
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr className="py-10"/>

                    <section className="mb-20 text-gray-800">
                        <h2 className="text-3xl font-semibold pb-5">Häufig gestelle Fragen</h2>

                        <div className="flex flex-col border-b-2 mt-5 py-5 lg:w-1/2">
                            <h3 className="text-xl font-semibold pb-5">Was ist &quot;Digitales Lernen&quot;?</h3>
                            <p className="text-base">Wie der Name schon verrät, ist &quot;Digitales Lernen&quot; eine Online-Plattform um das Potenzial von neuen Medien in einer konstruktiven Lernumgebung zu erforschen. <br/> Dieses Projekt entsteht als besondere Lernleistung für das Abitur 2023 und soll die Frage beantworten, inwiefern Schüler*innen von digitalen Medien als Ergänzung zum Schulunterricht profitieren können.</p>
                        </div>

                        <div className="flex flex-col border-b-2 mt-5 py-5 lg:w-1/2">
                            <h3 className="text-xl font-semibold pb-5">Welche Kurse soll ich wann erledigen?</h3>
                            <p className="text-base">Dieses Projekt ist dazu gestaltet, eine Ergänzung zu deinem Schulunterricht zu sein. Folge den Kursen also so, dass du je nach Themenbereich im richtigen Kurs bist.</p>
                        </div>

                        <div className="flex flex-col border-b-2 mt-5 py-5 lg:w-1/2">
                            <h3 className="text-xl font-semibold pb-5">Habe ich eine Zeitbegrenzung?</h3>
                            <p className="text-base">Du hast keine zeitlichen Einschränkungen. Nimm&apos; dir also gerne auch mal Zeit um ein Themengebiet zu wiederholen oder es zu vertiefen</p>
                        </div>

                        <div className="flex flex-col border-b-2 mt-5 py-5 lg:w-1/2">
                            <h3 className="text-xl font-semibold pb-5">Wann soll ich die Tests erledigen?</h3>
                            <p className="text-base">Wann auch immer du dich bereit fühlst. Optimalerweise zum Ende der dementsprechenden Lektion in deinem Schulunterricht.</p>
                        </div>

                        <div className="flex flex-col border-b-2 mt-5 py-5 lg:w-1/2">
                            <h3 className="text-xl font-semibold pb-5">Was sind Testgruppen?</h3>
                            <p className="text-base">Deine Testgruppe entscheidet, inwiefern du an &quot;Digitales Lernen&quot; teilnehmen kannst. In welcher Gruppe du bist, kannst du auf deiner <a className='underline font-semibold' href='./mein-konto'>Kontoübersicht</a> einsehen.</p>
                        </div>

                    </section>

                </div>

                <div className="my-5 h-auto">

                    <section className="mb-20 text-gray-800">
                        <h2 className="text-3xl font-semibold pb-5">Du weißt nicht wo du anfangen sollst?</h2>

                        <div className="flex flex-col py-5 lg:w-1/2">
                            <h3 className="text-xl font-medium">Probier&apos;s hiermit!</h3>
                        </div>

                        <Card kurs="einleitung" />

                    </section>

                </div>

                <h2 className="text-3xl font-semibold pb-10">Bereit loszulegen?</h2>
                <div className={`w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer mb-10`} onClick={
                    (e) => {
                        e.preventDefault()
                        router.push('/')
                    }
                }>Zur Kursübersicht</div>


            </main>

        </div>
    )
}

Home.getInitialProps = async function (ctx) {
    // Parse
    const cookies = parseCookies(ctx);

    return { cookies };
};