import Link from "next/link"
import { Navbar } from "../navbar"
import { useRouter } from "next/router"
import { Continue } from "../continue-button"
import { ProgressText } from "../progresstext"
import { useState } from "react"
import Head from "next/head"

export const VideoQuiz = ({ video, title, description }) => {
    // Video, Text, Description and Continue Button

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[3];

    const [watched, setWatched] = useState(false);

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
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:pt-10">
                <div className="flex flex-col items-start w-full">
                    <video className="w-full h-full rounded-md" controls onEnded={() => setWatched(true)}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col items-start w-full">
                    <ProgressText
                        kurs={kurs}
                        section={section}
                    />
                    <div className="text-left text-3xl font-semibold">{title}</div>
                    <div className="text-justify text-md pt-3">{description}</div>
                    <Continue
                        kurs={kurs}
                        section={section}
                        enabled={watched}
                    />
                </div>
            </div>
        </div>
    )
}