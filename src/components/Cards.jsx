import React from 'react'

function Cards() {
  return (
    <div className=' py-5'>
      <div className="flex flex-wrap justify-center gap-6 p-4">
      {/* Card 1 */}
      <div className="bg-sky-600 shadow-2xl rounded-3xl max-w-sm p-6 hover:shadow-xl transition-shadow">
        
        <div className=" w-56 py-1">
          <h1 className="text-2xl  w-12 py-2 px-4 md:pl-4 md:pr-8 text-sky-700 bg-white rounded-lg font-bold">1.</h1>
           <p className='text-2xl pt-6 md:pt-10 font-bold text-white '>
            Choose a Free Resume Template
           </p>
          <p className="text-white pt-1 text-sm mt-2">
            You've got plenty of formatting and style options
          </p>
         
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 shadow-lg rounded-3xl max-w-sm p-6 hover:shadow-xl transition-shadow">
       
        <div className="w-56 py-1">
          <h3 className="text-2xl  w-12 py-2 px-4 md:pl-4 md:pr-8 text-white bg-gray-800 rounded-lg font-bold">2.</h3>
          <p className="text-2xl pt-6 md:pt-10 font-bold text-gray-700">
            Customize the Design
          </p>
          <p className="text-gray-400 pt-1 text-sm mt-2">
            Make your own resume easily and customize all content
          </p>
         
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 shadow-lg rounded-3xl max-w-sm p-6 hover:shadow-xl transition-shadow">
       
        <div className="w-56 py-1">
          <h3 className="text-2xl  w-12 py-2 px-4 md:pl-4 md:pr-8 text-white bg-gray-800 rounded-lg font-bold">3.</h3>
          <p className="text-2xl pt-6 md:pt-10 font-bold text-gray-700">
            Share as PDF or Web
          </p>
          <p className="text-gray-400 pt-1 text-sm mt-2">
            Download your resume or share your own online resume website 
          </p>
         
        </div>
      </div>

    </div>
    </div>
  )
}

export default Cards
