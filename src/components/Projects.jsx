import React from 'react'
export default function Projects(){
  return (
    <section id="projects" className="px-6 py-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center sm:text-left">Sample Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <img src="/images/freeadvice-logo.png" alt="FreeAdvice Logo" className="w-40 h-40 object-contain"/>
          <p className="text-gray-600 mt-3 text-center">Logo Design for FreeAdvice</p>
        </div>
        <div className="p-4 flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <img src="/images/quote-logo.png" alt="Quote.com Logo" className="w-40 h-40 object-contain"/>
          <p className="text-gray-600 mt-3 text-center">Logo Design for Quote.com</p>
        </div>
      </div>
    </section>
  )
}
