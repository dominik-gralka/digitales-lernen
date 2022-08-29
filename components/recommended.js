import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { Card } from './card'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Recommended = ({ client }) => {

    const { data, error } = useSWR('/api/get_progress?user=' + client, fetcher);

    if (!data) return (
        <div>
            <div className="pb-5 flex flex-row gap-3">
            <a className="bg-emerald-200 p-2 rounded-md font-medium text-sm">Vorgeschlagen</a>
            <a className="bg-red-200 p-2 rounded-md font-medium text-sm">Verbindung wird aufgebaut...</a>
            </div>
            <div className="w-full 2xl:w-1/4 lg:w-96 border-2 rounded-md px-3 py-3 h-auto animate-pulse">
                <div>
                    <div className="overflow-clip h-32 rounded-md">
                        <div className="w-full md:hover:bg-h-m_gray transition-all h-full bg-gray-200">&nbsp;</div>
                    </div>
                </div>
                <div className="pb-5 pt-3">
                    <div className="text-xs font-medium pb-2">Integralrechnung · { "Lektion ... von ..."}</div>
                    <h2 className="text-xl font-bold">...</h2>
                    <p className="text-sm">...</p>
                </div>
                    <div className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer h-full">Laden...</div>
                <progress className="w-full h-1 bg-gray-300" value={ 0 } max={ 100 }></progress>
            </div>
        </div>
    )


    return (
        <div>
            <div className="pb-5">
                <a className="bg-emerald-200 p-2 rounded-md font-medium text-sm">Vorgeschlagen</a>
            </div>
            <Card kurs={ data.kurs } section={ data.section } />
        </div>
    )
}



