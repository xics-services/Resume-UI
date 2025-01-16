import React from 'react'

function TextImage() {

    return (


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-0  relative bottom-20">

            {/* First Column */}
            <div className='flex justify-center items-center px-4 py-9 sm:pt-7 md:px-0 '>

            <div className="text-left md:text-left sm:text-left px-4 py-4 md:px-20 md:pt-40 md:ml-20" >
                        <h1 className=' text-sky-500 sm:mt-4'>TIPS</h1>
                        <h1 className="mt-10 text-left md:w-96 leading-tight tracking-wide font-bold md:pb-5 text-gray-700 text-3xl md:text-5xl">
                           Get the Advantage with Writing Tips
                        </h1>
                        <div className=' md:w-72'>
                            <p className='text-gray-400 pt-2'>
                            You don't have to be a professional writer to create a job-winning resume. Our resume maker has hundreds of pre-written suggestions and tips that can help you craft an outstanding resume.
                            </p>
                        </div>
                    </div>
            </div>

            {/* Second Column */}
            <div className="flex justify-center items-center px-4 md:px-0">

                <div className="text-left sm:text-left px-4 md:px-20 py-9 md:pt-56">

                    <img className='flex justify-center items-left md:h-screen w-full relative bottom-1 md:w-screen md:mr-20 '
                        src="\src\images\pic3.jpeg"
                        alt='img'
                    />

                </div>

            </div>

        </div>

    )
}

export default TextImage;
