import React from 'react'

function FrontPicture() {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img className='flex justify-center items-left md:h-screen relative bottom-0 '
                    src="\src\images\pic2.jpeg"
                    alt='img'
                />
            </div>

            {/* image and text section  */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-0  relative bottom-20">

                {/* First Column */}
                <div className='flex justify-center items-center px-4 md:px-0 '>

                    <div className="text-left sm:text-left px-4 md:px-20">

                        <img className='flex justify-center items-left md:h-screen w-full relative bottom-1 md:w-screen md:ml-20 '
                            src="\src\images\pic1.jpeg"
                            alt='img'
                        />

                    </div>
                </div>

                {/* Second Column */}
                <div className="flex justify-center items-center px-4 md:px-0">

                    <div className="text-left md:text-left sm:text-left px-4 md:px-20 md:pt-40 md:mr-20" >
                        <h1 className=' text-sky-500'>HOW IT WORKS</h1>
                        <h1 className="mt-10 text-left text-3xl leading-tight tracking-wide font-bold md:pb-5 text-gray-700 text-md md:text-5xl">
                            3 Setps. <span className=' block'>5 Minutes.</span>
                        </h1>
                        <div className=' md:w-72'>
                            <p className='text-gray-400 pt-2'>
                                Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                            </p>
                        </div>


                        <div className="mt-5 flex flex-col sm:flex-row gap-4">
                            <button className="px-3 py-3 text-white font-bold text-xs bg-blue-400 border-2 rounded-3xl shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Create my resume
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FrontPicture;
