import { Overview } from "./overview"
import { XCircleIcon } from "@heroicons/react/solid"

export const SectionSelect = ({ kurs, code}) => {

    const sections = Overview[kurs].sections;

    // Create as many buttons next to each other as there are sections
    const buttons = [];
    for (let i = 1; i <= sections; i++) {
        buttons.push(
            <button key={i} className="bg-blue-500 hover:bg-blue-600 transition-al p-2 h-14 w-14 rounded-lg text-white font-semibold" onClick={() => {
                window.location.href = "/kurse/" + kurs + "/" + i;
            } }>
                {i}
            </button>
        );
    }

    return (
        <>
            <div className="fixed flex flex-col w-full h-screen justify-end lg:justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm z-10">
                <div className='lg:w-1/4 w-11/12 h-auto mb-5 rounded-md bg-white flex flex-col'>
                    <div className="flex flex-row w-full justify-between">
                        <h2 className="p-5 text-2xl font-semibold">Lektionsauswahl</h2>
                        <XCircleIcon className="text-gray-300 w-8 m-5 hover:text-gray-400 transition-all" />
                    </div>
                    <p className="px-5 text-lg">Wähle eine der folgenden Lektionen, an der du arbeiten möchtest aus.</p>
                    
                    {/* Create as many numbered buttons next to each other as sections */}
                    {/* Maximum of 5 buttons next to each other */}
                    <div className="grid lg:grid-cols-6 grid-cols-4 gap-4 justify-between p-5">
                        {buttons}
                    </div>

                </div>
            </div>
        </>
    )
}