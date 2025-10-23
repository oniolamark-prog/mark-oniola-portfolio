import React from 'react'
export default function Contact(){
  return (
    <section id="contact" className="bg-blue-50 py-10 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
        <p className="text-gray-700 text-sm sm:text-base">Email: <a href="mailto:oniolamark@gmail.com" className="text-blue-700 hover:underline">oniolamark@gmail.com</a></p>
        <p className="text-gray-700 text-sm sm:text-base">Phone: +63 909 507 0872</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:oniolamark@gmail.com"><button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-800 w-full sm:w-auto">Contact Me</button></a>
        </div>
      </div>
    </section>
  )
}
