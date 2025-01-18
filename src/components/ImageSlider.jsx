import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faBolt, faBriefcase, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

const ImageSlider = () => {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  const slides = [
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://www.wozber.com/public/templates/v2/previews/en/1/resume-template-1-w364x1.png" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://static.resumegiants.com/assets/templates/thumbnails/en/withPhoto/munich-736x1041.webp" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://cdn.prod.website-files.com/652e8c998f656fbf00cb7c99/65325b315f1eb2094d50c0ca_ats-resume-format-1.png" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/qxoRLnTzA-photo.png" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://cdn.enhancv.com/predefined-examples/mB02OQrxv0ISEJYxXuHcznuQtEn0pUU7e7OXQ2DK/image.png" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/PbTdfOsbMa-photo.png" alt="6" />,
    }, 
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://raketcontent.com/Blue_Simple_Professional_CV_Resume_3286c70e6f.png" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img className="shadow-xl rounded-lg" src="https://resumeworded.com/assets/images/resume-guides/junior-data-scientist.png" alt="8" />,
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));


  return (

    <div className="py-3 mt-24 px-3 bg-gray-100 md:mt-40">

      <div className=' text-center'>
        <span className='text-sky-600 text-sm  py-5 font-bold'>OPTIMIZED DESIGNS</span>
        <h1 className='title text-3xl md:text-7xl md:mt-5 font-bold text-black'>
          Make Your Resume with <span className='block md:pt-2'> Proven Professional Templates. </span>
        </h1>
        <div className='text-gray-500 '>
          <h3 className='text-center px-4 pt-4 md:w-7/12 md:pl-96 md:ml-32 md:pt-5'>
            Use one of our field-tested resume templates, designed by a team of HR expertsand typographers.
          </h3>
        </div>

        <div className="flex justify-center gap-4 text-xs mt-6 md:text-lg font-semibold">
          <span className="px-4 py-2 text-xs md:underline decoration-sky-500 decoration-4 underline-offset-8 rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faAlignLeft} size="lg" /> ATS-Friendly</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faBriefcase} size="lg" /> Professional</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faBolt} size="lg" /> Modern</span>
          <span className="px-4 py-2 text-xs  rounded-full"> <FontAwesomeIcon className="text-sky-500 px-2" icon={faWandMagicSparkles} size="lg" /> Creative</span>
        </div>
      </div>

    
      {/* new slider */}
      <div className="w-11/12 sm:w-10/12 md:pl-20 md:w-8/12 lg:w-9/12 mx-auto h-[300px] md:h-[700px]">
        <Carousel
          
          slides={slides}
          showNavigation={showNavigation}

        />
      </div>


      <div className="mt-10 md:mt-20 md:ml-10 py-5 flex justify-center items-center">
        <button className="px-5 py-5 text-sky-500 font-bold text-sm bg-gray-100 border-2 border-sky-400 rounded-full shadow-md hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          See More Templates
        </button>

      </div>

    </div>
  );
};

export default ImageSlider;
