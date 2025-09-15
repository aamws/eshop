import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Outlet } from 'react-router'






function App() {
  

  return (
    <>
   
   <Navbar />
   
<main>
  <Outlet />
</main>
 <Footer />

   </>
  )
}

export default App
