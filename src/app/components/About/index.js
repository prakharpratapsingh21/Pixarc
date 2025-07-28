

import React from "react";
import Image from 'next/image';
import BgImg from '../../../../public/about/Mask group (1).png';
import ForeImg from '../../../../public/about/Mask group.png';
import Boy from '../../../../public/about/21510670426 1.png';
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { Montserrat } from "next/font/google";

const skills = [
  { name: "Graphic Design", value: 95 },
  { name: "Video Editing", value: 80 },
  { name: "Web Development", value: 85 },
  { name: "Branding", value: 90 },
];
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <div className="w-full h-[100vh] bg-[#D2E8E2] flex items-center" id="about">
      
      {/* Vertical text section */}
      <div className="w-[10vw] h-full flex items-center justify-center bg-gray-200 p-4">
        <h1 className="text-[90px] text-[#116466] font-extrabold [writing-mode:vertical-rl] rotate-90">
          ABOUT US
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-[39vw] h-full flex flex-col justify-center items-center bg-black/8 text-center p-4">
        <div className="w-full">
          <h1 className="text-[#2A4D63] text-3xl font-bold mb-2 text-left">OUR SKILLS</h1>
          <div className=" text-[#116466] text-left space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="w-full flex items-center gap-2">
                  <div className={`${montserrat.className} w-[42%] text-lg`}>{skill.name}</div>
                  <div className="w-[58%] flex-1  bg-[#A2CDC1] h-[6px] rounded-full overflow-hidden">
                    <div
                      className="bg-[#116466] text-[#A2CDC1] h-full transition-all duration-500"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="w-full mt-7 text-[#2A4D63] text-left">
          <p className={`${montserrat.className} text-[16px]`}>
            From stunning graphics to captivating animations, our <br />
            team is dedicated to helping your brand stand out in a <br />
            crowded digital landscape.
          </p>
        </div>

        <div className="w-full mt-4 text-[#2A4D63] text-left">
          <p className={`${montserrat.className} text-[16px]`}>
            {`Whether you're looking to refine your brand's image, <br />
            launch an animated campaign, or create impactful <br />
            graphics that speak volumes, <br />
            PICSARC is here to turn your vision into reality.`}
          </p>
        </div>
      </div>

      {/* Image Section with Figma Icon */}
      <div className="w-[30vw] h-full flex items-center justify-center relative">
        <div className="w-[110%] h-full mt-14 ml-20">
          <Image
            src={Boy}
            alt="Foreground Image"
            objectFit="cover"
            className="w-full h-full scale-y-110 scale-x-160"
          />
        </div> 

        {/* Figma Icon Positioned Beside Face */}
        <div className="absolute top-26 left-[20%] p-2 w-14 h-12 bg-[#D2E8E2] rounded-lg shadow-[10px_10px_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <IoLogoFigma className="w-9 h-8 text-[#116466] " />
        </div>

        {/* Illustrator Icon Positioned Beside Face */}
        <div className="absolute z-10 top-26 left-[95%] p-2 w-14 h-12 bg-[#D2E8E2] rounded-lg shadow-[10px_10px_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
          < SiAdobeillustrator  className="w-9 h-8 text-[#116466] " />
        </div>

        {/* After Effect Icon Positioned Beside Face */}
        <div className="absolute z-10 top-[75%] left-[80%] p-2 w-14 h-12 bg-[#D2E8E2] rounded-lg shadow-[10px_10px_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <SiAdobeaftereffects  className="w-9 h-8 text-[#116466] " />
        </div>
      </div>

      {/* Background & Foreground Image */}
      <div className="w-[18vw] h-[90%] flex items-center justify-center">
        <div className="relative w-[90%] h-full overflow-hidden rounded-t-xl">
          {/* Background Image */}
          <Image
            src={BgImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full rounded-b-xl"
          />

          {/* Foreground Image with Opacity */}
          <Image
            src={ForeImg}
            alt="Foreground Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full opacity-70 mix-blend-overlay rounded-b-xl"
          />
        </div> 
      </div>

    </div>
  );
}
