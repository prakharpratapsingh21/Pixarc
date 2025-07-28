import React from 'react'
import { Home } from './components/Home'
import Servofolio from '../../src/app/components/Servofolio/page'
import About from '../../src/app/components/About/index'
import Testimonials  from '../../src/app/components/Testimonials/index'
import Footer from '../../src/app/components/Footer/index'


function page() {
  return (
    <div className=' w-full   bg-linear-to-b from-[#116466] to-[#111514] '>
      <Home/>
      <Servofolio/>
       <About/>
      <Testimonials/>
      <Footer/>
     
    </div>
  )
}

export default page