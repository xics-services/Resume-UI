import React from 'react'

function ImageArea() {
    return (
        <div>
            <div className=' text-center'>
                <span className='text-sky-600 text-sm  py-5 font-semibold'>FEATURES</span>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-700'>
                    Quick, Easy & Flexible <span className='block md:pt-2'>Editing with Live Preview </span>
                </h1>
            </div>


            <div className='flex justify-center items-center px-4 md:px-0 '>

                <div className="text-left sm:text-left px-4 md:px-20">

                    <img className='flex justify-center items-left pt-3 md:h-screen md:w-screen md:pt-5'
                        src="\src\images\pic4.jpeg"
                        alt='img'
                    />

                </div>
            </div>

            <div className='text-gray-500 '>
                <h3 className='text-center px-4 pt-4 md:w-8/12 md:pl-96 md:ml-10 md:pt-5'>
                    Choose font types, sizes, and spacing. You can bold, italicize, and underline your text. You don't need to use MS Word resume templates: we take care of the formatting, and give you access to the best resume designs you'll ever see.
                </h3>
            </div>

            <div className="mt-5 flex justify-center items-center">
                <button className="px-3 py-3 text-white font-bold text-xs bg-blue-400 border-2 rounded-3xl shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Edit your resume
                </button>

            </div>

        </div>
    )
}

export default ImageArea
