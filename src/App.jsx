import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieSearch from './components/Movie'
import Navbar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='nav'>
        
      <Navbar/>
      </div>
      <div className='Hero-section'>
      <Hero/>
      </div>

    

      <MovieSearch/>
    </div>
  )
}

export default App
