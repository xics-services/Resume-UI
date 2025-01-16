import React from 'react'

function Register() {

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
                                className="block text-sm font-medium text-gray-600"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Your Role
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your role"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Register
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
