import React from 'react'
import Home from './Components/Home'
import FluidBackground from './Components/FluidBackground'

function App() {
  return (
    <>
     <FluidBackground/>
     <div style={{ position: 'relative', zIndex: 99  }}>
       <Home/>

      </div>
    </>
  )
}

export default App