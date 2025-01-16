import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center px-3 justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-gray-800 font-bold pt-4 text-xl"><span className='text-sky-600'>Pix</span> Resume</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline pt-3 space-x-10">
                            <a href="#" className="text-gray-800 font-bold px-3 py-3  rounded-md text-sm font-small hover:text-sky-400 ">
                                Resume
                            </a>
                            <a href="#" className="text-gray-800 font-bold px-3 py-2 rounded-md text-sm font-small hover:text-sky-400">
                                Resourses
                            </a>
                            <a href="#" className="text-gray-800 font-bold px-3 py-2 rounded-md text-sm font-small hover:text-sky-400">
                                Premium Services
                            </a>
                            <a href="#" className="text-gray-800 font-bold px-3 py-2 rounded-md text-sm font-small hover:text-sky-400">
                                Career Advice
                            </a>
                            <a href="#" className="text-gray-800 font-bold px-3 py-2 rounded-md text-sm font-small hover:text-sky-400">
                                FAQ
                            </a>
                            <button className="px-3 py-1 font-bold text-sky-600 rounded-full  hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Log In
                            </button>
                            <button className="px-3 py-1 font-bold text-sky-600 border-2 border-cyan-500  rounded-full shadow-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Resume
                        </a>
                        <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Resourses
                        </a>
                        <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Premium Services
                        </a>
                        <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Career Advice
                        </a>
                        <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            FAQ
                        </a>
                        <p>
                         <button className="px-3 py-2 font-bold text-sky-600 rounded-full  hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                            Log In
                        </button>
                        <button className="px-3 py-2 font-bold text-sky-600 border-2 border-cyan-500  rounded-full shadow-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                            Register
                        </button>
                        </p>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

