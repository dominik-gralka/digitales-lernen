import Link from 'next/link.js';
import { Overview } from './overview';
import { ProgressBar } from './progressbar';
import axios from 'axios'
import { createAuthority } from '../jwt/manageAuthority';
import { parseCookies } from 'nookies';

export const ContinueEval = ({ kurs, section, enabled, correct }) => {
    // Continue Button

    const info = Overview[kurs];
    const user = parseCookies().fromClient;

    return (
        <>
            <div className="fixed inset-x-0 bottom-0 pb-7 lg:pb-0 px-10 lg:px-0 lg:bottom-0 lg:relative lg:w-full mt-auto bg-white">
                <div className="flex flex-row w-full">
                    <div className={`${enabled ? '' : 'opacity-50'} w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}
                        onClick={(e) => {
                            e.preventDefault();
                            if (enabled) {
                                const fetchData = async () => {

                                    // user, kurs, section in query params
                                    // correct and authority in body

                                    const { data } = await axios('/api/set_eval_progress', {
                                        method: 'POST',
                                        data: {
                                            correct: correct,
                                            authority: createAuthority(user, kurs, section)
                                        },
                                        params: {
                                            user: user,
                                            kurs: kurs,
                                            section: section
                                        }
                                    });

                                }

                                fetchData();
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