import Link from "next/link"
import { Navbar } from "../navbar"
import { useRouter } from "next/router"
import { ProgressText } from "../progresstext"
import { CheckAndContinue } from "../check-button"
import { useState } from "react"
import Latex from "react-latex-next"
import Head from "next/head"
import { ContinueEval } from "../eval-continue-button"

export const InputEval = ({ question, answer, image }) => {
    // Video, Text, Description and Continue Button

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[4];

    const [selected, setSelected] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [correct, setCorrect] = useState(false);

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
                    <span className="text-sm pb-2">
                        <span className="bg-blue-200 p-1 rounded-md text-blue-600 font-medium">Evaluation</span>
                        <span className="ml-2">Keine Zeitbegrenzung</span>
                    </span>
                    <div className="text-left text-3xl font-semibold">{question}</div>

                    { /* Multiple Choice with max. one value */}

                    <form className="flex flex-col lg:gap-5 gap-2 pt-5 lg:flex-col lg:pt-5 w-full h-96">

                        {/* Number input */}
                        <div className="flex flex-row items-center justify-start w-full lg:w-auto bg-gray-50 border-2 border-gray-100 rounded-md h-auto">
                            <input type="number" name="option" id="option" className="w-full bg-gray-50 p-2.5" value={selected} onChange={
                                (e) => {

                                    e.preventDefault();

                                    setSelected(e.target.value)

                                    if (e.target.value.length > 0) {
                                        setEnabled(true)
                                    } else {
                                        setEnabled(false)
                                    }

                                    if (e.target.value == answer) {
                                        setCorrect(true)
                                    } else {
                                        setCorrect(false)
                                    }

                                }
                            } />
                        </div>

                        {/* Submit Button */}
                        <ContinueEval
                            kurs={kurs}
                            section={section}
                            correct={correct}
                            enabled={enabled}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}