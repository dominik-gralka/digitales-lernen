import Link from "next/link"
import { Navbar } from "../navbar"
import { useRouter } from "next/router"
import { ProgressText } from "../progresstext"
import { CheckAndContinue } from "../check-button"
import { useState } from "react"
import Latex from "react-latex-next"
import Head from "next/head"
import { ContinueEval } from "../eval-continue-button"
import { IndexHandler } from "../eval-index-handler"

export const MChoiceEval = ({ question, options, answer, image }) => {
    // Video, Text, Description and Continue Button

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[4];

    const [selected, setSelected] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [correct, setCorrect] = useState(false);

    function handleChange(index) {
        setSelected(index);
        setEnabled(true);

        if (index == answer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }

    }

    return (
        <div className="px-7 lg:px-32 min-h-screen mb-32 lg:mb-0">
            <Navbar />

            <Head>
                <title>Digitales Lernen</title>
                <meta name="description" content="Digitales Lernen an der Stadtteilschule Meiendorf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <IndexHandler/>

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
                    <div className="text-left text-3xl font-semibold">
                        <Latex>{question}</Latex>
                    </div>

                    { /* Multiple Choice with max. one value */}

                    <form className="flex flex-col lg:gap-5 gap-2 pt-5 lg:flex-col lg:pt-5 w-full h-auto">

                        {options.map((option, index) => {
                            return (
                                <div className="flex flex-row items-center justify-start w-full lg:w-auto bg-gray-50 p-2.5 border-2 border-gray-100 rounded-md h-auto" key={index} onClick={
                                    /* Select radio button when clicked on div */
                                    () => {
                                        handleChange(index);
                                    }
                                }>
                                    <input type="radio" name="option" id={index} value={option} checked={
                                        selected === index ? true : false
                                    } onChange={
                                        /* Select radio button when clicked on input */
                                        () => {
                                            handleChange(index);
                                        }
                                    } />
                                    <label htmlFor={index} className="text-justify text-md ml-2 pb-0.5 font-semibold">
                                        <Latex>{option}</Latex>
                                    </label>
                                </div>
                            )
                        }
                        )}

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