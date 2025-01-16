import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bg-white text-gray-800">
                <footer className="max-w-7xl mx-auto px-6 py-8">

                <h3 className="text-gray-800 relative top-6 font-bold pt-4 text-xl"><span className='text-sky-600'>Pix</span> Resume</h3>

                    <div className="flex justify-end mb-4 space-x-4">

                        <a href="#" className="text-sky-600 hover:text-sky-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.5c-.88.39-1.83.65-2.83.77a4.92 4.92 0 002.17-2.71c-.94.56-1.98.97-3.09 1.19a4.92 4.92 0 00-8.38 4.48A13.95 13.95 0 011.67 3.15a4.92 4.92 0 001.52 6.57A4.88 4.88 0 012 9.03v.06a4.92 4.92 0 003.94 4.82 4.9 4.9 0 01-2.21.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 21.54a13.9 13.9 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64a10.02 10.02 0 002.45-2.57z" />
                            </svg>
                        </a>
                        <a href="#" className="text-sky-600 hover:text-sky-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.795.714-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="#" className="text-sky-600 hover:text-sky-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.343-2.633 1.319-3.608C4.527 2.506 5.794 2.225 7.16 2.163 8.425 2.105 8.805 2.093 12 2.093m0-2.163C8.756 0 8.345.015 7.052.073 5.759.132 4.501.417 3.431 1.487 2.361 2.557 2.075 3.815 2.017 5.108.959 6.401.944 6.812.944 12s.015 5.599.073 6.892c.058 1.293.343 2.551 1.413 3.621 1.07 1.07 2.328 1.355 3.621 1.413 1.293.058 1.704.073 6.892.073s5.599-.015 6.892-.073c1.293-.058 2.551-.343 3.621-1.413 1.07-1.07 1.355-2.328 1.413-3.621.058-1.293.073-1.704.073-6.892s-.015-5.599-.073-6.892c-.058-1.293-.343-2.551-1.413-3.621C20.551.417 19.293.132 18 .073 16.707.015 16.296 0 12 0z" />
                                <circle cx="12" cy="12" r="3.156" />
                            </svg>
                        </a>
                    </div>



                    <div className="border-t border-gray-400"></div>

                    <div className="grid grid-cols-1 mt-10  lg:grid-cols-8  gap-8">

                        <div className='lg:col-span-4'>
                            <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>
                            <p className="text-sm text-gray-500">
                                Join our newsletter to stay up to date on features and releases.
                            </p>

                            <div className='mt-5'>
                                <input id="email"
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                    className=" rounded-full border-2 border-gray-400 bg-white px-5 py-1.5 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />

                                <div className='inline px-3'>
                                    <button className="px-3 py-3 text-white font-bold text-xs bg-blue-400 border-2 rounded-3xl shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <p className="text-xs mt-3 text-gray-500 md:w-2/3">
                                By Subscribing you agree to with our Privacy policy and provide consent to receive updates from our company.
                            </p>

                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Create Resume</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Resume Examples</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Resume templates</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-4">Resources</h2>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Resume Help</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Job Interview</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">career</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-4">Our Company</h2>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">About Us</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Pricing</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Sitemap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-4">Support</h2>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Help Center</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">FAQ</a></li>
                                <li><a href="#" className="text-sm text-gray-500 hover:text-sky-400">Contact Us</a></li>
                            </ul>
                        </div>

                        {/*  
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-500 hover:text-sky-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.5c-.88.39-1.83.65-2.83.77a4.92 4.92 0 002.17-2.71c-.94.56-1.98.97-3.09 1.19a4.92 4.92 0 00-8.38 4.48A13.95 13.95 0 011.67 3.15a4.92 4.92 0 001.52 6.57A4.88 4.88 0 012 9.03v.06a4.92 4.92 0 003.94 4.82 4.9 4.9 0 01-2.21.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 21.54a13.9 13.9 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64a10.02 10.02 0 002.45-2.57z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-sky-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.795.714-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-sky-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.343-2.633 1.319-3.608C4.527 2.506 5.794 2.225 7.16 2.163 8.425 2.105 8.805 2.093 12 2.093m0-2.163C8.756 0 8.345.015 7.052.073 5.759.132 4.501.417 3.431 1.487 2.361 2.557 2.075 3.815 2.017 5.108.959 6.401.944 6.812.944 12s.015 5.599.073 6.892c.058 1.293.343 2.551 1.413 3.621 1.07 1.07 2.328 1.355 3.621 1.413 1.293.058 1.704.073 6.892.073s5.599-.015 6.892-.073c1.293-.058 2.551-.343 3.621-1.413 1.07-1.07 1.355-2.328 1.413-3.621.058-1.293.073-1.704.073-6.892s-.015-5.599-.073-6.892c-.058-1.293-.343-2.551-1.413-3.621C20.551.417 19.293.132 18 .073 16.707.015 16.296 0 12 0z" />
                                        <circle cx="12" cy="12" r="3.156" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        */}

                    </div>

                    <div className="border-t border-gray-400 mt-8"></div>

                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                        <p className="text-sm text-gray-500">&copy; 2025 Company Name. All rights reserved.</p>
                        <p className="text-sm text-gray-500">Powered by <a href="#" className="hover:text-sky-400">Tailwind CSS</a>.</p>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
