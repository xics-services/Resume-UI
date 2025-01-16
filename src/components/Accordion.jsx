import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for building custom designs without leaving your HTML.",
    },
    {
      title: "How do I use Tailwind CSS?",
      content:
        "You can use Tailwind CSS by adding its CDN link to your project or installing it via npm/yarn for full customization.",
    },
    {
      title: "Why choose Tailwind CSS?",
      content:
        "Tailwind CSS allows for rapid UI development with its utility classes, making it easier to create responsive and custom designs.",
    },
  ];

  return (

    <div className="md:mt-36 mt-20">

      <div className=' text-center'>
        <span className='text-sky-600 text-sm  py-5 font-bold'>FAQ</span>
        <h1 className='text-4xl md:text-7xl font-bold text-gray-900'>
          Frequently Asked Questions
        </h1>
      </div>

      <div className="max-w-3xl mx-auto p-4 pt-10 md:pt-20">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left flex justify-between items-center py-4 px-2 text-lg font-medium text-gray-700 hover:bg-gray-100"
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${activeIndex === index ? "rotate-180" : ""
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-2 py-2 text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Accordion;
