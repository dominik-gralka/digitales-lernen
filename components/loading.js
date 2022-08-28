import { Navbar } from '../components/navbar'

export const Loading = () => {


    return (
        <div className="px-7 lg:px-32 min-h-screen ">
            <Navbar />

            {/* Restrict scrolling ability*/}

            <main className="">

                <div className='bg-gray-100 animate-pulse w-32 rounded'>&nbsp;</div>
                <div className="text-4xl font-bold my-2 py-2 bg-gray-100 animate-pulse w-64 rounded">&nbsp;</div>

                <div className="bg-gray-100 animate-pulse w-64 rounded mt-10">&nbsp;</div>

                <div className="w-full lg:w-1/4 rounded px-3 my-16 h-52 bg-gray-100 animate-pulse">
                    &nbsp;
                </div>

                {
                    /* Show 3 divs */
                    Array(2).fill(0).map((_, i) => (
                        <div className="flex gap-2 lg:gap-5 lg:flex-row flex-col" key={i}>
                            <div className="w-full lg:w-1/4 rounded px-3 py-3 h-52 bg-gray-100 animate-pulse mt-10">
                                &nbsp;
                            </div>
                            <div className="w-full lg:w-1/4 rounded px-3 py-3 h-52 bg-gray-100 animate-pulse mt-10">
                                &nbsp;
                            </div>
                            <div className="w-full lg:w-1/4 rounded px-3 py-3 h-52 bg-gray-100 animate-pulse mt-10">
                                &nbsp;
                            </div>
                            <div className="w-full lg:w-1/4 rounded px-3 py-3 h-52 bg-gray-100 animate-pulse mt-10">
                                &nbsp;
                            </div>
                        </div>
                    ))
                }

            </main>

        </div>
    )
}