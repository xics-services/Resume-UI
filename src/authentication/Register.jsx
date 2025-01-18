import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = (e) => {

        e.preventDefault();

        const registerInfo = {
            userName: name,
            userId: email,
            userRole: role,
            userPassword: password
        }
        console.log("Registred successfully ", registerInfo);
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Create an Account
                    </h2>
                    <form className="space-y-4">

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600">
                                Full Name
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600">
                                Your Role
                            </label>
                            <input
                                onChange={(e) => setRole(e.target.value)}
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your role"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        
                        <div>
                        {/* email login button */}
                            <button
                                onClick={handleSave}
                                type="submit"
                                className="w-full px-4 py-2 font-bold text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Register
                            </button>

                           {/* google login button */}
                            <button
                                onClick={handleSave}
                                type="submit"
                                className="w-full h-10 font-bold px-2 py-2 mt-3 text-gray-700 border-2 border-sky-500 bg-white rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                               <img className='w-6 md:relative left-32 md:rounded-3xl' src='\src\images\google-icon.png' alt='img' /> 
                            <span className=' relative bottom-6 pl-2'>Google</span> 
                            </button>

                        </div>

                    </form>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="text-blue-500 hover:underline"
                        >
                            Log in
                        </a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Register
