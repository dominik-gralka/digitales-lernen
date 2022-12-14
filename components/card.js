import Link from 'next/link';
import { Overview } from './overview';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { SectionSelect } from './section-select';
import useSWR from 'swr'
import { useState } from 'react';

import { ExclamationIcon } from '@heroicons/react/solid'
import { RefreshIcon } from '@heroicons/react/solid'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Card = ({ kurs }) => {

    const info = Overview[kurs];
    const cookies = parseCookies();
    const bypass = cookies.bypassRestriction;
    const enabled = info.enabled

    const [section, setSection] = useState(false);

    const { data, error } = useSWR('/api/get_kurs_progress?user=' + cookies.fromClient + '&kurs=' + kurs, fetcher);

    if (!data) return (
        <div className="w-full 2xl:w-1/4 lg:w-96  border-2 rounded-md px-3 py-3 h-auto">
            <div>
                <div className="overflow-hidden h-32 rounded-md flex justify-center items-center">
                    <img src={info.preview} alt="logo" className="w-full md:hover:bg-h-m_gray transition-all h-32 object-cover" />
                </div>
            </div>
            <div className="pb-5 pt-3">
                <div className="text-xs font-medium pb-2">Integralrechnung ·
                    {" Lektion ... von " + info.sections}
                </div>
                <h2 className="text-xl font-bold">{info.title}<ExclamationIcon className="inline ml-2 w-5 text-yellow-500" /></h2>
                <p className="text-sm">{info.description}</p>
            </div>
            <div className={`w-full opacity-50 animate-pulse bg-gray-500 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}>Kurs anzeigen</div>
            <progress className="w-full h-1 bg-gray-300" value={0} max={info.sections}></progress>
        </div>
    )

    if (data.group == "b" && !data.eval_result && enabled) {
        return (
            <div className="w-full 2xl:w-1/4 lg:w-96  border-2 rounded-md px-3 py-3 h-auto">

                <div className={`${section ? '' : 'hidden'}`} onClick={() => setSection(false)}>
                    <SectionSelect kurs={kurs} />
                </div>

                <div>
                    <div className="overflow-hidden h-32 rounded-md flex justify-center items-center">
                        <img src={info.preview} alt="logo" className="w-full md:hover:bg-h-m_gray transition-all h-32 object-cover" />
                    </div>
                </div>
                <div className="pb-5 pt-3">
                    <div className="text-xs font-medium pb-2">Integralrechnung • Evaluation</div>
                    <h2 className="text-xl font-bold">{info.title}</h2>
                    <p className="text-sm">{info.description}</p>
                </div>
                <div className={`flex flex-row`}>
                    <div className={` w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
                        () => {
                            window.location.href = '/kurse/' + kurs + '/evaluation';
                        }
                    }>Evaluation starten</div>
                </div>
                <progress className="w-full h-1 bg-gray-300" value={data.section - 1} max={info.sections}></progress>
            </div>
        )
    }

    if (data.eval_result) {
        return (
            <div className="w-full 2xl:w-1/4 lg:w-96  border-2 rounded-md px-3 py-3 h-auto">
            
            <div className={`${section ? '' : 'hidden'}`} onClick={() => setSection(false)}>
                <SectionSelect kurs={ kurs }/>
            </div>

            <div>
                <div className="overflow-hidden h-32 rounded-md flex justify-center items-center">
                    <img src={info.preview} alt="logo" className="w-full md:hover:bg-h-m_gray transition-all h-32 object-cover" />
                </div>
            </div>
            <div className="pb-5 pt-3">
                <div className="text-xs font-medium pb-2">Integralrechnung ·
                        <span className="text-green-500">
                            Abgeschlossen
                        </span>
                </div>
                <h2 className="text-xl font-bold">{info.title}</h2>
                <p className="text-sm">{info.description}</p>
            </div>
            <div className={`flex flex-row`}>
                <div className={` w-full bg-emerald-500 hover:bg-emerald-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
                    () => {
                        window.location.href = '/kurse/' + kurs + '/evaluation';
                    }
                }>Ergebnis einsehen</div>
                { data.group == "a" ? (
                    <div className='flex justify-center border-2 w-16 hover:bg-gray-50 bg-white transition-all text-center text-gray-400 font-bold py-3 rounded-lg cursor-pointer ml-3' onClick={() => setSection(true)}>
                    <RefreshIcon className="w-5" />
                </div>
                ) : ("")}
            </div>
            <progress className="w-full h-1 bg-gray-300" value="1" max="1"></progress>
        </div>
        )
    }

    if (!enabled && !bypass) {
        return (
            <div className="w-full 2xl:w-1/4 lg:w-96 border-2 rounded-md px-3 py-3 h-auto">

            <div>
                <div className="overflow-hidden h-32 rounded-md flex justify-center items-center">
                    <img src={info.preview} alt="logo" className="w-full md:hover:bg-h-m_gray transition-all h-32 object-cover" />
                </div>
            </div>
            <div className="pb-5 pt-3">
                <div className="text-xs font-medium pb-2">
                    <span className="text-gray-500">
                            { info.available_from ? `Verfügbar ab ${info.available_from}` : "Aktuell nicht verfügbar" }
                    </span>
                </div>
                <h2 className="text-xl font-bold">{info.title}</h2>
                <p className="text-sm">{info.description}</p>
            </div>
            <div className={`w-full opacity-50 animate-pulse bg-gray-500 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`}>
                { data.group == "b" ? "Evaluation starten" : "Kurs anzeigen" }
            </div>
            <progress className="w-full h-1 bg-gray-300" value={data.section - 1} max={info.sections}></progress>
        </div>
        )
    }

    return (
        <div className="w-full 2xl:w-1/4 lg:w-96  border-2 rounded-md px-3 py-3 h-auto">
            
            <div className={`${section ? '' : 'hidden'}`} onClick={() => setSection(false)}>
                <SectionSelect kurs={ kurs }/>
            </div>

            <div>
                <div className="overflow-hidden h-32 rounded-md flex justify-center items-center">
                    <img src={info.preview} alt="logo" className="w-full md:hover:bg-h-m_gray transition-all h-32 object-cover" />
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
                <h2 className="text-xl font-bold">{info.title}</h2>
                <p className="text-sm">{info.description}</p>
            </div>
            <div className={`${data.section > info.sections ? 'hidden' : ''} w-full bg-blue-500 hover:bg-blue-600 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
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
            <div className={`${data.section > info.sections ? '' : 'hidden'} flex flex-row`}>
                <div className={` w-full bg-indigo-400 hover:bg-indigo-500 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer`} onClick={
                    () => {
                        window.location.href = '/kurse/' + kurs + '/evaluation';
                    }
                }>Teste dein Wissen</div>
                <div className='flex justify-center border-2 w-16 hover:bg-gray-50 bg-white transition-all text-center text-gray-400 font-bold py-3 rounded-lg cursor-pointer ml-3' onClick={() => setSection(true)}>
                    <RefreshIcon className="w-5" />
                </div>
            </div>
            <progress className="w-full h-1 bg-gray-300" value={data.section - 1} max={info.sections}></progress>
        </div>
    )

}
