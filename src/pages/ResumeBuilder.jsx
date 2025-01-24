import React from 'react'
import '@fontsource/montserrat';
import '@fontsource/inter';
import InputFieldDropdown from '../components/InputFieldDropdown';
import SingleInputDropdown from '../components/SingleInputDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faArrowPointer, faArrowsLeftRightToLine, faArrowsToEye, faB, faBorderAll, faBriefcase, faChartSimple, faCircleMinus, faCirclePlus, faFile, faFileArrowUp, faFileDownload, faFilePdf, faGear, faGraduationCap, faGripLines, faI, faItalic, faPencil, faPrint, faRotateLeft, faRotateRight, faS, faShare, faSquare, faU, faUnderline, faWandMagicSparkles, faWindowMaximize } from "@fortawesome/free-solid-svg-icons"
import { faGripVertical } from '@fortawesome/free-solid-svg-icons/faGripVertical';
import { faCircleDown, faCircleUp, faEye, faHand } from '@fortawesome/free-regular-svg-icons';

import { CiAlignLeft, CiAlignCenterH, CiAlignRight, CiAlignTop, CiAlignCenterV, CiAlignBottom, CiCirclePlus, CiCircleMinus, CiEdit, } from "react-icons/ci";
import { VscLayoutSidebarLeft, VscLayoutPanel, VscLayoutSidebarRight } from "react-icons/vsc";
import { TfiRulerPencil } from "react-icons/tfi";
import { PiGearSix } from "react-icons/pi";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { RiArrowGoForwardLine, RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineHorizontalRule } from "react-icons/md";



function ResumeBuilder() {



  return (

    <div>

      {/* navigation panel */}
      <div className=' py-1'>

        <div className='mx-5 bg-white border-b-2 border-gray-300'>
          <h1 className='text-md font-bold relative top-5'>
            <span className='text-blue-500 text-lg '>Pix </span>Resume
          </h1>

          <div className='flex justify-center gap-5 relative bottom-2 left-10'>

            <div className=' relative right-12 top-1 gap-5'>
              <button className='text-gray-400  relative top-1 px-2'>
                <IoArrowUpCircleOutline size={18} />
              </button>

              <button className='text-gray-400 relative top-1 px-2'>
                <IoArrowDownCircleOutline size={18} />
              </button>

              <button className='text-sm font-semibold bg-gray-100 py-1 text-gray-400 px-4 rounded-lg'>
                1/1
              </button>
            </div>


            <button>
              <FontAwesomeIcon className="text-blue-500 px-2 hover:text-blue-500" icon={faArrowPointer} />
            </button>

            <button>
              <FontAwesomeIcon className="text-gray-500 px-2 hover:text-blue-500" icon={faHand} />
            </button>

            <button className='text-gray-500 hover:text-blue-500'>
              <RiArrowGoBackLine />
            </button>

            <button className='text-gray-500 hover:text-blue-500'>
              <RiArrowGoForwardLine />
            </button>

            <button className='hover:text-blue-500 text-gray-600'>
              <CiCircleMinus size={20} />
            </button>

            <button className='hover:text-blue-500 text-gray-600'>
              <CiCirclePlus size={20} />
            </button>

            <button className='text-sm font-semibold bg-gray-100 py-1 text-gray-400 px-4 rounded-lg'>
              50%
            </button>

            <div className=' relative left-80 '>

              <button className=' relative right-40'>
                <FontAwesomeIcon className="text-gray-500 pr-2 hover:text-blue-500" icon={faPrint} />
              </button>

              <button className="px-3 mx-1 py-2 text-sm font-semibold border-2 border-gray-300  rounded-full shadow-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                <FontAwesomeIcon className="text-blue-500 pr-2 hover:text-blue-500" icon={faShare} />
                Share
              </button>

              <button className="px-3 py-2 mx-1 text-sm font-semibold bg-blue-500 border-2 text-white  rounded-full shadow-lg shadow-blue-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                <FontAwesomeIcon className="text-white pr-2 " icon={faFileArrowUp} />
                Publish
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* resume edit section */}
      <div className='flex-1 grid grid-cols-5  gap-2  '>

        {/* sidebard*/}

        <div className=' w-20 mx-5 px-4 border-r-2 border-gray-300 gap-3'>

          <div className='mt-32 '>
            <button className='text-gray-500 px-2 py-2 my-3'>
              <CiEdit size={25} />
            </button>

            <button className='text-white bg-blue-500 shadow-lg shadow-blue-300 rounded-lg px-3 py-3 my-3'>
              <TfiRulerPencil size={20} />
            </button>

            <button className='text-gray-500 px-2 py-2 my-3'>
              <PiGearSix size={25} />
            </button>
          </div>

        </div>


        {/* left section */}
        <div className='relative right-44'>
          <h1 className='font-bold font-inter w-28 mt-3 title text-xl text-center'>
            Customize
          </h1>

          <div className='w-72  px-1 mt-5 rounded-md py-1 mt bg-gray-100'>

            <button className='px-10 text-xs font-bold py-3 bg-white rounded-md'>
              <FontAwesomeIcon className="text-blue-500 px-2" icon={faFile} size="lg" />
              Pages
            </button>

            <button className='px-5 py-2 text-xs font-bold text-gray-500'>

              <FontAwesomeIcon className="text-gray-500 px-2" icon={faBorderAll} size="lg" />
              Templates
            </button>
          </div>

          {/* horizontal line */}
          <div className=' w-72 mt-5'>
            <hr className='border-2 border-gray-200' />
          </div>


          {/* layout area */}
          <div className='mt-8'>
            <h1 className='font-bold text-lg font-inter text-center w-16 '>Layout</h1>

            <div className=' mt-4'>


              <button className='px-1 mx-2 py-1 border-2 border-blue-300 text-blue-500 rounded-lg'>
                <VscLayoutPanel size={38} />
              </button>

              <button className='px-1 mx-2 py-1 border-2 border-gray-300 text-gray-500 hover:text-blue-500 hover:border-blue-300 rounded-lg'>
                <VscLayoutSidebarLeft size={38} />
              </button>

              <button className='px-1 mx-2 py-1 border-2 border-gray-300 text-gray-500 hover:text-blue-500 hover:border-blue-300 rounded-lg'>
                <VscLayoutSidebarRight size={38} />
              </button>

              <div className='mt-2'>
                <span className='text-xs ml-6 font-bold'>Top</span>
                <span className='text-xs ml-10 text-gray-500 font-bold'>Left</span>
                <span className='text-xs ml-10 text-gray-500 font-bold'>Right</span>
              </div>

            </div>
          </div>

          {/* horizonal line */}
          <div className=' w-72  mt-8'>
            <hr className='border-2 border-gray-200' />
          </div>

          {/* column area */}
          <div className='mt-6 '>
            <h1 className='font-bold text-lg font-inter text-center w-20 mb-2'>Column</h1>

            <div className='  mt-4'>

              <button className='px-1 py-3 mx-2 border-2 hover:border-blue-500 border-gray-300 rounded-lg '>
                <FontAwesomeIcon className="hover:text-blue-500 text-gray-500 px-2" icon={faGripLines} size="2xl" />
              </button>

              <button className='px-1 py-4 mx-2 border-2 border-blue-500 rounded-lg hover:border-blue-300 '>
                <FontAwesomeIcon className="text-blue-500 px-1  " icon={faGripLines} />
                <FontAwesomeIcon className="text-blue-500 px-1" icon={faGripLines} />
              </button>

              <div className='mt-2'>
                <span className='text-xs ml-2 text-gray-500 font-bold'>1Column</span>
                <span className='text-xs ml-6 font-bold'>2Column</span>
              </div>

            </div>

            <div className='mt-8 ml-5 text-center mr-6'>

              <span className='text-xs font-semibold relative right-24 top-3'>Left</span>
              <span className='text-xs font-black text-gray-400  relative top-9 right-28'>80%</span>
              <span className='text-xs font-semibold relative left-28 top-3'>Right</span>
              <span className='text-xs font-black top-9 text-gray-400 relative left-20 '>20%</span>

              <div>
                <div className=' w-72  pb-5  relative bottom-9 right-5'>
                  <label
                    htmlFor="default-range"
                    className="block text-xs py-1 font-semibold  w-20   mb-2">
                    Column Width
                  </label>
                  <input
                    id="default-range"
                    type="range"
                    defaultValue="80"
                    className="w-72 h-1 bg-gray-200 rounded-lg  dark:bg-blue-500"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* horizonal line */}
          <div className=' w-72  mt-1 '>
            <hr className='border-2 border-gray-200' />
          </div>

          {/* arrange area */}

          <div>
            <div className='mt-8 '>
              <h1 className='font-bold text-lg font-inter text-center w-40 mb-2'>Rearrange Section</h1>

              <div className='grid grid-cols-2 gap-1 w-72 '>


                <button className='px-1 py-2 border-2 border-gray-300 rounded-lg '>
                  <FontAwesomeIcon className="text-gray-500 pr-4" icon={faGripVertical} size="xs" />
                  <FontAwesomeIcon className="text-blue-500  relative right-1 pr-1" icon={faBriefcase} size="sm" />
                  <span className='text-xs font-bold'>Experience</span>
                </button>

                <button className='px-1 py-2  border-2 border-gray-300 rounded-lg '>
                  <FontAwesomeIcon className="text-gray-500 relative right-7" icon={faGripVertical} size="xs" />
                  <FontAwesomeIcon className="text-blue-500  relative right-4" icon={faGear} size="sm" />
                  <span className='text-xs font-bold relative right-2'>Skills</span>
                </button>

                <button className='px-1 py-2  border-2 border-gray-300 rounded-lg '>
                  <FontAwesomeIcon className="text-gray-500 relative right-3" icon={faGripVertical} size="xs" />
                  <FontAwesomeIcon className="text-blue-500 relative right-1 pl-1" icon={faGraduationCap} size="sm" />
                  <span className='text-xs font-bold'>Education</span>
                </button>

                <button className='px-1 py-2 border-2 border-gray-300 rounded-lg '>
                  <FontAwesomeIcon className="text-gray-500 relative right-1" icon={faGripVertical} size="xs" />
                  <FontAwesomeIcon className="text-blue-500 px-1" icon={faWandMagicSparkles} size="sm" />
                  <span className='text-xs font-bold '>Specialities</span>
                </button>

              </div>
            </div>
          </div>

          {/* horizonal line */}
          <div className=' w-72 mt-8 '>
            <hr className='border-2 border-gray-200' />
          </div>

          {/* Personal info */}
          <InputFieldDropdown
            heading="Personal Information"
            jobTitle="Job role"
            firstName="First Name"
            lastName="Last Name"
            email="Email"
            phoneNumber="Phone number"
            city="City"
            country="Country"
          />

          {/* professional summary */}
          <SingleInputDropdown 
            heading = "Professional Summary"
            textAlign = " relative right-4"
            text = "Summary"
          />

          {/* Employment History */}
           <InputFieldDropdown 
            heading = "Employment History"
            jobTitle = "Job role"
            firstName = "Employer"
            lastName = "Years of work"      
            city = "City"
            hide = "true"
          />  

          {/* Education */}
           <InputFieldDropdown 
            heading = "Education Information"
            jobTitle = "School"
            firstName = "Degree"
            lastName = "Year of completion"         
            city = "City"
            hide = "true"
          />  

           {/* social links */}
           <SingleInputDropdown 
            heading = "Website & Social Links"
            textAlign = " relative right-5"
            text = "@"
          />

            {/* hobbies */}
            <SingleInputDropdown 
            heading = "Hobbies"
            textAlign = " relative right-16"
            text = "enter your hobbies"
          />

           {/* awards */}
           <SingleInputDropdown 
            heading = "Hobbies"
            textAlign = " relative right-16"
            text = "enter your hobbies"
          />

        </div>





        {/* center section */}
        <div className='col-span-2 relative right-32  bg-gray-100'>
          <div className='mt-10'>
            <img className='ml-6 shadow-lg w-11/12'
              src='https://resumeworded.com/assets/images/resume-guides/junior-data-scientist.png'
              alt='resume'
            />

            <div className='text-center'>
              <button className='mt-8 '>
                <FontAwesomeIcon className="text-blue-500 px-2 hover:text-blue-500" icon={faCirclePlus} size='2xl' />
              </button>
            </div>

          </div>
        </div>



        {/* right section */}
        <div className='relative right-20'>

          {/* align area */}
          <h1 className='text-start mt-3 w-16 font-inter  font-bold mx-5'>
            Align
          </h1>

          <div className='flex justify-center ml-2 w-72 gap-3 mt-4 '>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignLeft size={20} />
            </button>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignCenterH size={20} />
            </button>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignRight size={20} />
            </button>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignTop size={20} />
            </button>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignCenterV size={20} />
            </button>

            <button className='text-gray-500 px-2 hover:text-blue-500'>
              <CiAlignBottom size={20} />
            </button>

          </div>

          {/* horizontal line */}
          <div className=' w-72 mt-5'>
            <hr className=' ml-5 border-2 border-gray-200' />
          </div>

          {/* text area */}
          <div className='mt-8'>
            <h1 className='text-start font-inter mt-3 w-12 font-bold mx-5'>
              Text
            </h1>

            <div className=' w-72 mt-4 ml-4 grid grid-cols-6  gap-3'>

              <button className='border-2 py-2 col-span-6 text-start border-gray-300 rounded-lg'>
                <span className='mx-4 text-xs font-semibold'>Inter</span>
              </button>

              <button className='border-2 py-2 col-span-4 text-start border-gray-300 rounded-lg'>
                <span className='mx-4 text-xs font-semibold'>Semibold</span>
              </button>

              <button className='border-2 py-2 col-span-2 text-start border-gray-300 rounded-lg'>
                <span className='mx-4 text-xs font-semibold'>12</span>
              </button>

              <button className='border-2 col-span-3 py-2 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-gray-400 ml-4 " size='sm' icon={faI} />
                <span className='ml-3 text-xs font-semibold'>150</span>
                <span className='text-gray-400 pl-10'>%</span>
              </button>

              <button className='border-2 py-2 col-span-3 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-gray-400 ml-4 " size='sm' icon={faArrowsLeftRightToLine} />
                <span className='ml-3 text-xs font-semibold'>0</span>
                <span className='text-gray-400 text-xs ml-12'>px</span>
              </button>

            </div>

            {/* first set of align button */}
            <div className='grid grid-cols-4 mt-2 border-2 w-58 border-gray-300 ml-4 py-2 rounded-lg'>

              <button className=' border-r-2 border-gray-300'>
                <FontAwesomeIcon className="text-gray-400 px-2 hover:text-blue-500" icon={faAlignLeft} />
              </button>

              <button className=' border-r-2 border-gray-300'>
                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faAlignCenter} />
              </button>

              <button className='border-r-2 border-gray-300'>
                <FontAwesomeIcon className="text-gray-400 px-2 hover:text-blue-500" icon={faAlignRight} />
              </button>

              <button>
                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faAlignJustify} />
              </button>

            </div>

            {/* second set of align button */}
            <div className='grid grid-cols-4 mt-2 border-2 w-58 border-gray-300 ml-4 py-2 rounded-lg'>

              <button className='border-r-2 border-gray-300'>
                <FontAwesomeIcon className="text-gray-400 px-2 hover:text-blue-500 " icon={faB} />
              </button>

              <button className='border-r-2  border-gray-300'>

                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faItalic} />
              </button>

              <button className='border-r-2 border-gray-300'>
                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faUnderline} />
              </button>

              <button>
                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faS} />
              </button>

            </div>

            {/* third set of button */}
            <div className='grid grid-cols-4 mt-2 border-2 w-58 border-gray-300 ml-4 py-2 rounded-lg'>

              <button className='border-r-2 text-gray-400 text-center border-gray-300'>
                <MdOutlineHorizontalRule style={{ position: 'relative', left: "25px" }} />
                {/* <span className='text-gray-400 hover:text-blue-400'>-</span> */}
              </button>

              <button className='border-r-2 border-gray-300'>
                <span className='text-gray-400 font-semibold hover:text-blue-400'>Ag</span>
              </button>

              <button className='border-r-2 border-gray-300'>
                <span className='text-gray-400 font-semibold hover:text-blue-400'>ag</span>
              </button>

              <button>
                <span className='text-gray-400 font-semibold hover:text-blue-400'>AG</span>
              </button>

            </div>

          </div>

          {/* horizontal line */}
          <div className=' w-72 mt-5'>
            <hr className=' ml-5 border-2 border-gray-200' />
          </div>

          {/* color area */}

          <div className='mt-8'>
            <h1 className='text-start font-inter mt-3 w-16 font-bold mx-5'>
              Color
            </h1>

            <div className=' w-58 mt-4 ml-4 grid grid-cols-5 gap-3'>

              <button className='border-2 py-2 col-span-3 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-gray-800 ml-3" icon={faSquare} />
                <span className='mx-3 text-xs font-semibold '>171717</span>
              </button>

              <button className='border-2 py-2 col-span-2 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-gray-400 px-2  hover:text-blue-500" icon={faEye} />
                <span className='mx-4 text-xs font-semibold'>100%</span>
              </button>

            </div>

          </div>

          {/* horizontal line */}
          <div className=' w-72 mt-5'>
            <hr className=' ml-5 border-2 border-gray-200' />
          </div>

          {/* export area */}

          <div className='mt-8'>
            <h1 className='text-start mt-3 w-16  font-inter font-bold mx-5'>
              Export
            </h1>

            <div className=' w-58 mt-4 ml-4 grid grid-cols-4 gap-3'>

              <button className='border-2 py-2 col-span-4 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-red-800 ml-3" icon={faFilePdf} />
                <span className='mx-3 text-xs font-bold '>PDF</span>
                <span className='text-xs text-gray-400 font-semibold relative left-40'>1,35Mb</span>
              </button>

              <button className='border-2 py-2 col-span-4 text-start border-gray-300 rounded-lg'>
                <FontAwesomeIcon className="text-blue-600 px-2  hover:text-blue-500" icon={faFileDownload} />
                <span className='mx-3 text-xs font-bold'>DOC</span>
                <span className='text-xs text-gray-400 font-semibold relative left-40'>756Kb</span>
              </button>

            </div>
          </div>

          {/* horizontal line */}
          <div className=' w-72 mt-5'>
            <hr className=' ml-5 border-2 border-gray-200' />
          </div>

        </div>

      </div>

    </div>
  )
}

export default ResumeBuilder;
