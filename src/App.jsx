import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans" style={{scrollBehavior: 'smooth'}}>
      <Header />
      <main className="max-w-4xl mx-auto">
        <About />
        <Experience />
        <Tools />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}
