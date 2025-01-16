import React from 'react'

function Cards() {
  return (
    <div className=' py-5'>
      <div className="flex flex-wrap justify-center gap-10 p-4">
      {/* Card 1 */}
      <div className="bg-sky-600 shadow-2xl rounded-3xl md:py-8 max-w-sm md:max-w-lg p-6 hover:shadow-xl transition-shadow">
        
        <div className=" w-64 md:w-80 py-1">
          <h1 className="text-2xl md:text-6xl w-12 md:w-28 py-2 px-4 md:py-5 md:px-5 md:pl-8 md:pr-8 text-sky-700 bg-white rounded-xl md:rounded-3xl font-bold">1.</h1>
           <p className='text-2xl md:text-4xl pt-6 md:pt-24 font-bold text-white '>
            Choose a Free Resume Template
           </p>
          <p className="text-white pt-1 text-sm md:text-xl mt-2">
            You've got plenty of formatting and style options
          </p>
         
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 shadow-lg rounded-3xl max-w-sm p-6 hover:shadow-xl transition-shadow">
       
        <div className="w-64 md:w-80 py-1">
          <h3 className="text-2xl md:text-6xl w-12 md:w-28 py-2 px-4 md:py-6 md:px-5 md:pl-8 md:pr-8 text-white bg-gray-800 rounded-lg md:rounded-3xl  font-bold">2.</h3>
          <p className="text-2xl md:text-4xl pt-6 md:pt-24 font-bold text-gray-800">
            Customize the Design
          </p>
          <p className="text-gray-400 pt-1 text-sm md:text-xl mt-2">
            Make your own resume easily and customize all content
          </p>
         
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 shadow-lg rounded-3xl max-w-sm p-6 hover:shadow-xl transition-shadow">
       
        <div className="w-64 md:w-80 py-1">
          <h3 className="text-2xl md:text-6xl w-12 md:w-28 py-2 px-4 md:py-6 md:px-5 md:pl-8 md:pr-8 text-white bg-gray-800 rounded-lg md:rounded-3xl  font-bold">3.</h3>
          <p className="text-2xl md:text-4xl pt-6 md:pt-24 font-bold text-gray-800">
            Share as PDF or Web
          </p>
          <p className="text-gray-400 pt-1 text-sm md:text-xl mt-2">
            Download your resume or share your own online resume website 
          </p>
         
        </div>
      </div>

    </div>
    </div>
  )
}

export default Cards
