import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Products from './component/Products'
import AOS from "aos";
import 'aos/dist/aos.css'
import TopProduct from './component/TopProduct';
import Banner from './component/Banner';
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
      <TopProduct/>
      <Banner/>
    </div>
  )
}

export default App