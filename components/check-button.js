import Link from 'next/link.js';
import { Overview } from '../pages/kurse/overview';
import { ProgressBar } from './progressbar';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const CheckAndContinue = ({ kurs, section, answer, selected }) => {
    // Check & Continue Button

    const info = Overview[kurs];
    const [correct, setCorrect] = useState(null);
    const [counter, setCounter] = useState(0);

    const variants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }

    return (
        <>
            <div className="fixed inset-x-0 bottom-0 pb-7 px-10 lg:px-0 lg:bottom-0 lg:relative lg:w-full mt-auto bg-white">
                    <div className="flex flex-row w-full">

                    <Link href={ "/kurse/" + kurs + "/" + (parseInt(section) - 1) }>
                            <div className={` ${ section > 1 ? '' : 'hidden' } border-2 w-16 hover:bg-gray-50 bg-white transition-all text-center text-gray-400 font-bold py-3 rounded-lg cursor-pointer mr-3`}>←</div>
                        </Link>

                        <button className={`${correct == null ? '' : 'hidden'} w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} type="submit" onClick={
                            (e) => {
                                e.preventDefault();
                                if (selected === answer) {
                                    setCorrect(true)
                                    // Wait 2 seconds and redirect to next section
                                    setTimeout(() => {
                                        window.location.href = "/kurse/" + kurs + "/" + (parseInt(section) + 1)
                                    }, 1000)
                                } else {
                                    setCorrect(false)
                                    setCounter(counter + 1)
                                    setTimeout(() => {
                                        setCorrect(null)
                                    }, 2000)
                                }
                                //window.location.href = "/kurse/" + kurs + "/" + (parseInt(section) + 1);
                            }
                        } >Prüfen</button>

                        <div className={`${correct ? '' : 'hidden'} w-full bg-emerald-500 hover:bg-emerald-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}>Korrekt!</div>

                        <div className={`${correct == false ? '' : 'hidden'} w-full bg-red-500 hover:bg-red-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}>Leider nicht korrekt</div>

                        { /* Show help button after second attempt */}
                        <motion.div className={`${counter >= 2 ? '' : 'hidden'} border-2 w-16 bg-gray-900 hover:bg-emerald-500 hover:text-white transition-all text-center text-gray-400 font-bold py-3 rounded-lg cursor-pointer ml-3`}>?</motion.div>


                    </div>
                    <ProgressBar
                        kurs={kurs}
                        section={section}
                    />
                </div>
        </>
    )
}