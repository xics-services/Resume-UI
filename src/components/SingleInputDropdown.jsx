import React, { useState } from "react";

const SingleInputDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block w-full h-5 mt-5 text-left">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full py-2 text-sm font-semibold  text-gray-7 bg-white border-2 border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            > <span className={props.textAlign}> {props.heading} </span> 
                <svg
                    className="w-5 text-gray-400 ml-20  h-5 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="z-10 mt-2 w-full origin-top-right  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className=" " role="none">
                        <div className="my-2">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="jobTitle"
                                className="w-full px-2 py-2 mt-1 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={props.text}
                            />
                        </div>            

                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleInputDropdown;