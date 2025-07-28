import React from 'react'
import Navbar from '../Navbar/index'
import Image from 'next/image'
import Circle from '../../../../public/home/view-3d-graphic-nature-landscape-Photoroom 1.png'
import Pixarc from '../../../../public/home/PIXARC.png'
import Pix2 from '../../../../public/home/pixhome.png'
import Computer from '../../../../public/home/3d-rendering-computer-desk-Photoroom 1.png'
import { Dosis } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { IoCall } from "react-icons/io5";
import Computer2 from '../../../../public/home/3d-rendering-laptop 1.png'
import Vector from '../../../../public/home/Vector 4.png'
import Link from 'next/link'

const dosis = Dosis({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
export const Home = () => {
  return (
    <div id='home' className='w-full  flex flex-col items-center p-[20px]  bg-linear-to-b from-[#126567] to-[#225A5B] overflow-hidden'>
        <Navbar/>
        <div className='w-full h-[100vh] mt-8 md:px-[100px]  relative '>
            <div className='md:w-[240px] md:h-[150px] md:pl-[90px] w-[150px] h-[150px]'>
                <Image src={Circle} alt='homecircle'  layout='respnsive'className='w-full h-full'/> 
            </div>

             {/* Container for Pixarc Image and Text */}
             <div className="relative   md:w-full md:h-[50%] flex justify-center  ">
                <Image src={Pixarc} alt='logo' width={800} height={100}  objectFit='contain'  />
                {/* <img src={Pixarc.src} alt='logo' className='w-[800px] md:h-[250px] h-[160px] '  /> */}
                {/* <img src={Pix2.src} alt='logo' className='w-[1800px] h-[800px] pb-[100px] absolute '  objectFit='contain'  /> */}
                <h1 className= {`${dosis.className} transform absolute md:-translate-x-[15px] md:translate-y-[89px] translate-y-[52px] md:text-[42px] text-[30px] text-[#FFCB9A]`}>
                    DESIGN CREATE BUILD
                </h1>
            </div>
            
            {/* <div className='w-full h-[40%] flex items-center justify-center overflow-hidden'>
              <Image src={Computer} alt='homecomputer' className='w-[400px] h-[300px] object-contain shadow-[0_15px_25px_rgba(0,0,0,0.3)] rounded-lg'/> 
            </div> */}

            <div className="relative w-full h-[200px] flex items-center justify-center">
                <Image
                    src={Computer}
                    alt="3D Computer"
                    className="w-[480px] h-[500px] object-contain relative z-10"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-[70px] w-[16%] h-4 bg-black/40 blur-sm rounded-full z-0"></div>
            </div>

        </div>


        <div className='w-full h-[90vh] flex justify-center items-center px-[50px] mt-36 '>
            <div className='w-[60%] h-[90%]  flex flex-col justify-center pl-10'>
                <h1 className={`${montserrat.className} text-[55px] leading-none font-bold font-family: 'Montserrat', sans-serif text-[#FFCB9A] `}>HELLO! <br/>
                 WE ARE PIXARC</h1>
                <p className={`${montserrat.className} text-[#FFCB9A] mt-10 text-[15px] font-family: 'Montserrat', sans-serif font-thin`}> We believe that every design tells a story, and every <br/>
                    story builds a bridge between businesses and their <br/> 
                    customers.</p>
                <div className='mt-6 flex gap-6'>
                    <button className='bg-[#D2E8E2] px-12 py-2 rounded-3xl text-[#116466] cursor-pointer
                    shadow-[inset_8px_8px_10px_rgba(118,224,223,0.5),inset_-8px_-8px_10px_rgba(118,224,223,0.5)]'>Hire Us</button>
                    <Link href={"https://wa.me/919927818649"} className='bg-[#D2E8E2] px-[12px] py-[10px] rounded-full text-[#116466] cursor-pointer  
                    shadow-[inset_8px_8px_10px_rgba(118,224,223,0.5),inset_-8px_-8px_10px_rgba(118,224,223,0.5)] flex justify-center items-center'>
                        <IoCall/>
                    </Link>
                </div>    
            </div>

            <div className='w-[40%] h-[90%] relative  pt-14'>
                <Image className='absolute z-10' src={Computer2} alt='homecomp2' width={400} height={300} layout='intrinsic' />
                <Image className='ml-[200px] mt-[70px] opacity-30 z-0' src={Vector} alt='computershadow' width={336} height={100} layout='intrinsic' />
            </div>
        </div>
    </div>
  )
}


