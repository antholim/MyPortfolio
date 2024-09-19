import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import AboutMe from './components/AboutMe.tsx'
import Projects from './components/Projects.tsx'
import ContactMe from './components/ContactMe.tsx'

function App() {

  return (
    <>
      <Header/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default App
