import Link from 'next/link';
import { Overview } from './overview';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { SectionSelect } from './section-select';
import useSWR from 'swr'

import { ExclamationIcon } from '@heroicons/react/solid'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Card = ({ kurs }) => {

    const info = Overview[kurs];
    const cookies = parseCookies();

    const { data, error } = useSWR('/api/get_kurs_progress?user=' + cookies.fromClient + '&kurs=' + kurs, fetcher);

    if (!data) return (
        <div className="w-full lg:w-1/4 border-2 rounded-md px-3 py-3 h-auto">
            <div>
                <div className="overflow-clip h-32 rounded-md flex justify-center items-center">
                    <img src={ info.preview } alt="logo" className="w-full md:hover:bg-h-m_gray transition-all"/>
                </div>
            </div>
            <div className="pb-5 pt-3">
                <div className="text-xs font-medium pb-2">Integralrechnung ·
                    {" Lektion ... von " + info.sections}
                </div>
                <h2 className="text-xl font-bold">{ info.title }<ExclamationIcon className="inline ml-2 w-5 text-yellow-500"/></h2>
                <p className="text-sm">{ info.description }</p>
            </div>
            <SectionSelect/>
            <progress className="w-full h-1 bg-gray-300" value={ 0 } max={ info.sections }></progress>
        </div>
    )

    return (
        <div className="w-full lg:w-1/4 border-2 rounded-md px-3 py-3 h-auto">
            <div>
                <div className="overflow-clip h-32 rounded-md flex justify-center items-center">
                    <img src={ info.preview } alt="logo" className="w-full md:hover:bg-h-m_gray transition-all"/>
                </div>
            </div>
            <div className="pb-5 pt-3">
                <div className="text-xs font-medium pb-2">Integralrechnung ·
                    {parseInt(data.section) > parseInt(info.sections) ?
                        <span className="text-green-500">
                            Abgeschlossen
                        </span>
                        :
                        <span>
                            {" Lektion " + data.section + " von " + info.sections}
                        </span>
                    }
                </div>
                <h2 className="text-xl font-bold">{ info.title }</h2>
                <p className="text-sm">{ info.description }</p>
            </div>
            <div className={`${ data.section > info.sections ? 'opacity-50' : '' } w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
                () => {
                    if (data.section <= info.sections) {
                        if (data.section <= 0) {
                            window.location.href = '/kurse/' + kurs + '/1';
                        } else {
                            window.location.href = '/kurse/' + kurs + '/' + data.section;
                        }
                    }
                }
            }>Kurs anzeigen</div>
            <progress className="w-full h-1 bg-gray-300" value={ data.section - 1 } max={ info.sections }></progress>
        </div>
    )

}
