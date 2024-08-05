import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Products from './component/Products'
import AOS from "aos";
import 'aos/dist/aos.css'
const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100
    });
    AOS.refresh()
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default App