import React from 'react'
export default function Header(){
  return (
    <header className="py-12 bg-gradient-to-b from-blue-50 to-white text-center px-6">
      <img src="/images/profile.jpg" alt="Mark Oniola" className="rounded-full shadow-lg mb-6 border-4 border-blue-200 object-cover w-40 h-40 sm:w-44 sm:h-44 mx-auto"/>
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Mark G. Oniola</h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-2">Civil Engineer | Graphic Designer | Video Editor</p>
      <nav className="mt-6 space-x-4">
        <a href="#about" className="text-blue-700 hover:underline">About</a>
        <a href="#experience" className="text-blue-700 hover:underline">Experience</a>
        <a href="#projects" className="text-blue-700 hover:underline">Projects</a>
        <a href="#contact" className="text-blue-700 hover:underline">Contact</a>
      </nav>
    </header>
  )
}
