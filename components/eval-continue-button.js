import Link from 'next/link.js';
import { Overview } from './overview';
import { ProgressBar } from './progressbar';

export const ContinueEval = ({ kurs, section, enabled, correct }) => {
    // Continue Button

    const info = Overview[kurs];

    return (
        <>
            <div className="fixed inset-x-0 bottom-0 pb-7 lg:pb-0 px-10 lg:px-0 lg:bottom-0 lg:relative lg:w-full mt-auto bg-white">
                    <div className="flex flex-row w-full">
                        <div className={`${enabled ? '' : 'opacity-50'} w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (enabled) {
                                    window.location.href = "/kurse/" + kurs + "/evaluation/" + (parseInt(section) + 1);
                                }
                            }
                            }
                        >Weiter</div>
                    </div>
                    <ProgressBar
                        kurs={kurs}
                        section={"section"}
                    />
                </div>
        </>
    )
}