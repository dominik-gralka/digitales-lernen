import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Navbar } from '../components/navbar'
import { CookieHandler } from '../components/cookie-handler'
import { motion } from "framer-motion";

import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Loading } from '../components/loading'
import { useState } from 'react'
import { Card } from '../components/card'

import Link from 'next/link'

import { Overview } from '../components/overview';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Konto() {

    const { data, error } = useSWR('/api/get_global_stats', fetcher);
    const cookies = parseCookies();
    const client = cookies.fromClient;

    let percentage = 0;
    const circumference = 30 * 2 * Math.PI;

    if (!data) {
        return <Loading />
    }

    if (data) {
        // Loop through all the data and calculate the percentage
        let temp = 0;
        for (let i = 0; i < data.length; i++) {
            temp += data[i].score;
        }
        percentage = Math.round(temp / data.length*100);
    }

    if (!client) {
        router.push('/login');
    } else return (
        <div className="px-7 lg:px-32 min-h-screen">
            <Navbar />

            <CookieHandler />
 
            <Head>
                <title>Digitales Lernen: Open</title>
                <meta name="description" content="Meine Kontoübersicht" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">

                <span>Digitales Lernen</span>
                <h1 className="text-4xl font-bold py-2">Globale Statistiken</h1>

                <div className="flex lg:flex-row flex-col lg:gap-20 gap-16 justify-between">

                    <div className={` ${ percentage <= 0 ? "hidden" : "" } lg:mt-10 w-full border-2 rounded-xl p-2 pl-5`}>
                        <div className="py-5">
                            <p className="text-2xl font-semibold pb-2">Kursbearbeitung</p>
                            <div className="flex">
                                <div className='flex justify-center items-center pr-3'>
                                    <motion.svg initial={{rotate: -180}} animate={{rotate: -90}} transition={{ duration: 1, ease:"easeInOut" }} className="w-20 h-20">
                                        <circle className="text-gray-300" strokeWidth="8" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                                        <motion.circle initial={{ strokeDashoffset: circumference - 0 / 100 * circumference }} animate={{ strokeDashoffset: circumference - percentage / 100 * circumference }} transition={{ duration: 1, ease:"easeInOut" }} className="text-green-500" strokeWidth="8" stroke="currentColor" fill="transparent" strokeLinecap="round" r="30" cx="40" cy="40" strokeDasharray={circumference} strokeDashoffset={circumference - 50 / 100 * circumference}></motion.circle>
                                    </motion.svg>
                                </div>
                                <p className="text-6xl font-bold py-5 transition-all cursor-default text-green-500">{percentage}%</p>
                            </div>

                            {
                                // Map data
                                data.map((item, index) => {

                                    let color = "gray-500";

                                    if (item.score >= 0.5) {
                                        color = "green-500";
                                    } else if (item.score >= 0.25) {
                                        color = "yellow-500";
                                    } else if (item.score >= 0) {
                                        color = "red-500";
                                    }

                                    return (
                                        <div className={`flex justify-between items-center py-2 my-2 px-5 mr-3 rounded-md ${"bg-" + color} ${"text-" + color} bg-opacity-20 hover:bg-opacity-30 hover:text-black`}>
                                            <p className="text-md font-semibold">{
                                                // Get title from overview
                                                Overview[item.kurs].title
                                            }</p>
                                            <p className="text-md font-semibold">{Math.round(item.score*100)}%</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>

            </main>

        </div>
    )
}