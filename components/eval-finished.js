import Link from "next/link"
import { Navbar } from "./navbar"
import { useRouter } from "next/router"
import { motion } from "framer-motion";
import Head from "next/head"
import useSWR from 'swr'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { Loading } from "./loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const FinishedEval = () => {
    // Video, Text, Description and Continue Button

    const router = useRouter()
    const pathname = router.pathname;
    const client = parseCookies().fromClient;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[3];

    const circumference = 30 * 2 * Math.PI;

    const { data, error } = useSWR('/api/get_eval_result?user=' + client + '&kurs=' + kurs, fetcher);

    const percentage = data?.percentage;
    const section_results = data?.sections;

    if (!data) {
        return <Loading/>
    }

    if (error) {
        window.location.href = "/";
    }

    return (
        <div className="px-7 lg:px-32 min-h-screen">
            <Navbar />

            <Head>
                <title>Digitales Lernen</title>
                <meta name="description" content="Digitales Lernen an der Stadtteilschule Meiendorf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {/* Back Button */}
            <Link href="/">
                <div className="lg:my-10 mb-5 cursor-pointer lg:text-sm font-semibold">← Zurück zur Kursübersicht</div>
            </Link>
            <div className="flex flex-col gap-10 lg:gap-20 lg:pt-10">
                <div className="flex lg:flex-row flex-col w-full bg-black h-52 rounded-md items-center justify-center">
                    <motion.svg initial={{rotate: -180}} animate={{rotate: -90}} transition={{ duration: 2, ease:"easeInOut" }} className="w-20 h-20 lg:mr-5">
                        <circle className="text-gray-300" strokeWidth="8" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                        <motion.circle initial={{ strokeDashoffset: circumference - 0 / 100 * circumference }} animate={{ strokeDashoffset: circumference - percentage / 100 * circumference }} transition={{ duration: 2, ease:"easeInOut" }} className="text-green-500" strokeWidth="8" stroke="currentColor" fill="transparent" strokeLinecap="round" r="30" cx="40" cy="40" strokeDasharray={circumference} strokeDashoffset={circumference - 50 / 100 * circumference}></motion.circle>
                    </motion.svg>
                    <p className="lg:text-5xl text-2xl font-bold py-5 transition-all cursor-default text-green-500">{percentage}% Korrekt</p>
                </div>
                <div className="flex flex-col items-start w-full">
                    <span className="pb-2">Evaluation abgeschlossen</span>
                    <div className="text-left text-3xl font-semibold">
                        Übersicht & Bewertung
                    </div>
                    <div className="text-left text-md pt-3">
                        Herzlichen Glückwunsch! Du hast deine Evaluation abgeschlossen. Hier ist dein Ergebnis.
                    </div> 
                </div>
            </div>

            {/*Map sections*/}

            <div className="flex gap-5 flex-col-reverse lg:flex-row-reverse pt-10">
            {section_results.map((item) => (
                <div className="flex flex-col gap-5 lg:gap-10 w-full h-20">
                    <h2 className="text-lg font-semibold">Frage {item.section}</h2>
                    <div className={`${ item.correct ? 'bg-green-400' : 'bg-red-400'} w-full rounded-lg h-3`}>&nbsp;</div>
                </div>
            ))}
            </div>

            <h2 className="text-3xl font-medium pt-10">
                { Math.round(percentage / 100 * 15) } Punkte
            </h2>

            <div className='flex flex-row pb-20 pt-10'>
                <div className={` w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
                    () => {
                        window.location.href = '/';
                    }
                }>Zurück zur Kursübersicht</div>
            </div>

        </div>
    )
}