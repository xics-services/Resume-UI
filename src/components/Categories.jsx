import React from 'react'

function Categories() {



    return (
        <div className='md:mt-36 mt-36'>

            <div className=' text-center'>
                <span className='text-sky-600 text-sm  py-5 font-semibold'>CATEGORIES</span>
                <h1 className='text-3xl md:text-5xl mt-5 font-bold text-gray-700'>
                    Get Inspired by Resume <span className='block md:pt-2'>Samples from Various Industry </span>
                </h1>
            </div>

            {/* 1st buttons group */}
            <div className='flex justify-center items-center mt-20 gap-4'>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Arts, Culture & Media
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Banking & Finance
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Business
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Education
                </button>
            </div>
            
           

            {/* 2nd buttons group */}
            <div className='flex justify-center items-center mt-5 gap-4'>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Student
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Sales, Support & Marketing
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Infrasreucture & Engineering
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Public Sector
                </button>
            </div>


            {/* 3rd buttons group */}
            <div className='flex justify-center items-center mt-5 gap-4'>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Science & Research
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Service Industry
                </button>

                <button className="px-3 py-3 text-gray-800 font-bold text-xs bg-white border-2 border-gray-300 rounded-3xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Technology
                </button>
            </div>

            <div className="mt-8 flex justify-center items-center">
                <button className="px-3 py-3 text-white font-bold text-xs bg-blue-400 border-2 rounded-3xl shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Explore All Samples
                </button>

            </div>

            {/* company logo */}

            <div className='grid grid-cols-3 pl-10  md:w-9/12 mt-10  md:ml-44  lg:grid-cols-6  gap-1'>

                <div className=''>
                    <img src='\src\images\log1.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl '
                        alt='log1' />

                </div>

                <div>
                    <img src='\src\images\log2.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl'
                        alt='log2' />
                </div>

                <div>
                    <img src='\src\images\log3.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl'
                        alt='log3' />
                </div>

                <div>
                    <img src='\src\images\log4.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl'
                        alt='log4' />
                </div>

                <div>
                    <img src='\src\images\log5.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl'
                        alt='log5' />
                </div>

                <div>
                    <img src='\src\images\log6.jpeg'
                        className='border-2 w-16 md:w-40 border-gray-300 rounded-2xl'
                        alt='log6' />
                </div>
            </div>


            {/* full screen image */}

            <div className='flex justify-center items-center pt-20 md:pt-40 px-4 md:px-0 '>

                <div className="text-left sm:text-left px-4 md:px-20">

                    <img className='flex justify-center items-left pt-3 md:h-screen md:w-screen md:pt-5'
                        src="\src\images\pic5.png"
                        alt='img'
                    />

                </div>
            </div>

        </div>
    )
}

export default Categories;
