import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const SectionSelect = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className={`opacity-70 w-full bg-gray-400 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer animate-pulse`}>Kurs anzeigen</div>
            <motion.div
                className={`${isOpen == true ? '' : 'hidden'} flex flex-col w-full h-screen justify-end lg:justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm z-10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='lg:w-1/4 w-11/12 h-56 mb-5 rounded-md bg-white flex flex-col'>
                    <div className="flex flex-row w-full justify-between">
                        <h2 className="p-5 text-2xl font-semibold">Entschuldigung</h2>
                    </div>
                    <p className="px-5 text-lg">Wir haben deinen Fortschritt leider nicht laden können. </p>
                    <div className="h-full mb-5 flex flex-col justify-end">
                        <div className="mx-5 w-auto bg-blue-500 p-3 text-center text-white rounded-md font-medium cursor-pointer hover:bg-blue-600 transition-all" onClick={() => setIsOpen(false)}>Verstanden, habe ich.</div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}