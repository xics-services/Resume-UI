import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faBolt, faBriefcase, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://cdn.enhancv.com/single_corporate_resume_template_aa596adabc.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/92/b3/11/92b311a38143f3216bc57e350edc9673.jpg",
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/UognkuyQL6-photo.png",
      alt: "Slide 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <div className="py-3 mt-24 px-3 bg-gray-100 md:mt-40">

      <div className=' text-center'>
        <span className='text-sky-600 text-sm  py-5 font-semibold'>OPTIMIZED DESIGNS</span>
        <h1 className='text-3xl md:text-5xl md:mt-5 font-bold text-gray-700'>
          Make Your Resume with <span className='block md:pt-2'> Proven Professional Templates. </span>
        </h1>
        <div className='text-gray-500 '>
          <h3 className='text-center px-4 pt-4 md:w-7/12 md:pl-96 md:ml-32 md:pt-5'>
            Use one of our field-tested resume templates, designed by a team of HR expertsand typographers.
          </h3>
        </div>

        <div className="flex justify-center gap-4 text-xs mt-6 md:text-lg font-semibold">
          <span className="px-4 py-2 text-xs md:underline decoration-sky-500 decoration-4 underline-offset-8 rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faAlignLeft} size="lg"/> ATS-Friendly</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faBriefcase} size="lg"/> Professional</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faBolt} size="lg"/> Modern</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faWandMagicSparkles} size="lg" /> Creative</span>
        </div>
      </div>

      {/* this is carousel blow */}

      <div className="relative w-full max-w-xl mt-10 md:h-auto mx-auto rounded-3xl shadow-2xl overflow-hidden md:mt-10">
        <div className="flex transition-transform duration-500 md:h-screen ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 max-h-screen">
              <img src={slide.image} alt={slide.alt} className="md:w-full shadow-2xl rounded-3xl md:h-screen  " />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-gray-800" : "bg-gray-400"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>


      <div className="mt-10 py-5 flex justify-center items-center">
        <button className="px-3 py-3 text-sky-500 font-bold text-xs bg-gray-100 border-2 border-sky-400 rounded-3xl shadow-md hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          See More Templates
        </button>

      </div>

    </div>
  );
};

export default Carousel;
