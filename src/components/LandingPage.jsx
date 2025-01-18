import React from 'react'

const LandingPage = () => {
    return (

        <div className=''>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-9 md:pt-0">

                {/* First Column */}
                <div className='flex justify-center  items-center px-4 md:px-0'>

                    <div className="text-left sm:text-left px-4 md:ml-10">

                        <span className="px-4 py-3 md:ml-20 relative top-5 text-gray-700 font-bold text-xs bg-white border-2 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                            THE <span className='animate-pluse text-sky-600'>#1</span> RESUME BUILDER
                        </span>

                        <h1 className="title mt-10 md:mt-10 text-left font-Heebo leading-tight tracking-wide text-black font-bold text-4xl md:text-6xl md:pl-20">
                            Create a Job-Ready Resume in Minutes
                        </h1>
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex justify-center items-center px-4 ">

                    <div className="text-left sm:text-left md:px-20 md:pt-20">
                        <h1 className="mt-10 text-left leading-tight tracking-wide text-gray-500 text-md md:text-xl">
                            Create your resume easily with our free builder and professional templates.
                        </h1>

                        <div className="mt-5 flex flex-col sm:flex-row gap-4">
                            <button className="px-5 py-5 text-white font-bold text-sm bg-blue-500 border-2 rounded-full shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Build my resume
                            </button>

                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer text-center text-sm sm:text-left px-5 py-5 text-sky-600 font-bold border-2 border-sky-400 rounded-full shadow-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Upload resume
                            </label>
                            <input id="file-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LandingPage;
