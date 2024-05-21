import React from 'react'
import Home from './Components/Home'
import FluidBackground from './Components/FluidBackground'

function App() {
  return (
    <div className='relative  w-full h-fit'>
      <div className='w-full fixed overflow-hidden'> <FluidBackground/></div>
    
     <div className='absolute w-full top-0 overflow-hidden' >
       <Home/>

      </div>
    </div>
  )
}

export default App