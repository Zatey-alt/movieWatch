import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieSearch from './components/Movie'

import Hero from './components/Hero'


function App() {


  return (
    <div className='app'>
      <div className='Hero-section'>
      <Hero/>
      </div>

    

      <MovieSearch/>
   
    </div>
  )
}

export default App
