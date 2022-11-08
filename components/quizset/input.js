import Link from "next/link"
import { Navbar } from "../navbar"
import { useRouter } from "next/router"
import { ProgressText } from "../progresstext"
import { CheckAndContinue } from "../check-button"
import { useState } from "react"
import Latex from "react-latex-next"
import Head from "next/head"

export const InputQuiz = ({ question, answer, image }) => {
    // Video, Text, Description and Continue Button

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[3];

    const [selected, setSelected] = useState(false);

    return (
        <div className="px-7 lg:px-32 min-h-screen mb-32 lg:mb-0">
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
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 h-full lg:pt-10">
                <div className="flex flex-col items-start w-full">
                    <img className="rounded-md" src={image} />
                </div>
                <div className="flex flex-col items-start w-full">
                    <ProgressText
                        kurs={kurs}
                        section={section}
                    />
                    <div className="text-left text-3xl font-semibold">
                        <Latex>{question}</Latex>
                    </div>

                    { /* Multiple Choice with max. one value */}

                    <form className="flex flex-col lg:gap-5 gap-2 pt-5 lg:flex-col lg:pt-5 w-full h-full">
                        
                        {/* Number input */}
                        <div className="flex flex-row items-center justify-start w-full lg:w-auto bg-gray-50 border-2 border-gray-100 rounded-md h-auto">
                            <input type="number" name="option" id="option" className="w-full bg-gray-50 p-2.5" value={selected} onChange={
                                (e) => {
                                    setSelected(e.target.value)
                                }
                            }/>
                        </div>

                        {/* Submit Button */}
                        <CheckAndContinue
                            kurs={kurs}
                            section={section}
                            answer={answer}
                            selected={selected}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}