import React from 'react'

function FrontPicture() {
    return (
        <div>

            <div className='flex justify-center items-center px-4 md:px-20'>

                <img className='flex justify-center items-left md:h-screen md:w-screen'
                    src="\src\images\pic2.jpg"
                    alt='img' />

                <div className='absolute left-20 px-5 w-96 hidden sm:block'>

                    <div className='flex absolute top-48'>
                        <img className='w-9 rounded-3xl' src='https://img.freepik.com/premium-vector/3d-man-avatar-happy-smiling-face-icon-young-businessman-student-freelancer_313242-1219.jpg' alt='img' />
                        <img className='w-9 rounded-3xl' src='https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg' alt='img' />
                        <img className='w-9 rounded-3xl' src='https://img.freepik.com/premium-vector/3d-smiling-women-avatar-happy-face-icon-character-vector_313242-1220.jpg' alt='img' />
                    </div>

                    <h1 className=' text-gray-500 md:text-sm md:absolute top-60'>Deny, intan and <span className='text-sky-600 font-semibold'>hundreds of thousands</span> of other peoples have succeeeded get hired and accelerating their careers with Pix Resume</h1>
                </div>

                {/* card */}
                <div className="bg-white hidden sm:block text-center absolute right-28 top-full shadow-2xl rounded-lg  w-80 md:w-64">
                    <div>
                        <h3 className="text-2xl pt-5 font-bold text-gray-800">Dream Job</h3>
                        <p className="text-gray-500 mt-2 text-xs">Company Name</p>

                        <p className="text-gray-700 text-xs mt-10">
                            <span className='px-2 mx-1 py-2 border-2 rounded-3xl border-gray-300'>Full-time</span>
                            <span className='px-2 mx-1 py-2 border-2 rounded-3xl border-gray-300'>Remote</span>
                            <span className='px-2 mx-1 py-2 border-2 rounded-3xl border-gray-300'>Product</span>
                        </p>

                        <div className="bg-green-500 rounded-full w-10 h-10 relative left-56 bottom-36">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 relative top-1 w-10 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
         
                        <p className="text-gray-600 text-lg font-bold mt-5 py-2">$5,500</p>
                    </div>

                </div>
            </div>

           

            <div className="grid grid-cols-1 pt-20 md:grid-cols-2 gap-4 md:pt-0  relative bottom-20">

                {/* First Column */}
                <div className='flex justify-center items-center px-4 md:px-0 '>

                    <div className="text-left sm:text-left px-4 md:px-20">

                        <img className='flex justify-center items-left md:h-screen w-full relative bottom-1 md:w-screen md:ml-20 '
                            src="\src\images\pic1.png"
                            alt='img'
                        />
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex justify-center items-center px-4 md:px-0">

                    <div className="text-left md:text-left sm:text-left px-4 md:px-20 md:pt-40 md:mr-20" >
                        <h1 className=' text-sky-500 font-bold'>HOW IT WORKS</h1>
                        <h1 className="title mt-10 text-left text-3xl leading-tight tracking-wide font-bold md:pb-5 text-black text-md md:text-7xl">
                            3 Setps. <span className=' block'>5 Minutes.</span>
                        </h1>
                        <div className=' md:w-80'>
                            <p className='text-gray-400 md:text-lg pt-2'>
                                Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                            </p>
                        </div>


                        <div className="mt-5 flex flex-col sm:flex-row gap-4">
                            <button className="px-5 py-5 text-white font-bold text-sm bg-blue-500 border-2 rounded-full shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Create Resume Now
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FrontPicture;
