import Link from 'next/link.js';
import { Overview } from './overview';
import { ProgressBar } from './progressbar';

export const Continue = ({ kurs, section, enabled }) => {
    // Continue Button
    
    const info = Overview[kurs];

    return (
        <>
            { parseInt(section) == parseInt(info.sections) ?
                <div className="absolute inset-x-0 bottom-7 mx-10 lg:mx-0 lg:bottom-0 lg:relative lg:w-full mt-auto">
                    <div className="w-auto bg-emerald-500 hover:bg-emerald-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer">Teste dein Wissen</div>
                    <ProgressBar
                        kurs={ kurs }
                        section={ section }
                    />
                </div>
                :
                <div className="fixed inset-x-0 bottom-7 mx-10 lg:mx-0 lg:bottom-0 lg:relative lg:w-full mt-auto">
                    <div className="flex flex-row w-full">
                        <Link href={ "/kurse/" + kurs + "/" + (parseInt(section) - 1) }>
                            <div className={` ${ section > 1 ? '' : 'hidden' } border-2 w-16 hover:bg-gray-50 bg-white transition-all text-center text-gray-400 font-bold py-3 rounded-lg cursor-pointer mr-3`}>←</div>
                        </Link>

                        <div className={`${ enabled ? '' : 'opacity-50' } w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}
                            onClick={ (e) => {
                                e.preventDefault();
                                if (enabled) {
                                    window.location.href = "/kurse/" + kurs + "/" + (parseInt(section) + 1);
                                }
                            }
                        }
                        >Weiter</div>
                    </div>
                    <ProgressBar
                        kurs={ kurs }
                        section={ section }
                    />
                </div>
            }
        </>
    )
}