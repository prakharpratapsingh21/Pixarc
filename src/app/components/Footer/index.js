
'use client';
import React, { useState } from "react";
import Background from '../../../../public/Footer/Union.png';
import Image from "next/image";
import Logo from '../../../../public/Footer/Asset 21 (2)@4x 1.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare, FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    const res = await fetch("https://formspree.io/f/movepwgb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setEmail("");
      alert("✅ Thank you! Your email has been submitted.");
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen relative ">
      {/* Background Layer */}
      <div className="w-full h-full absolute ">
        {/* <img src={Background.src} className="w-full h-full object-cover" alt="Footer Background" /> */}
        <Image src={Background} alt="Logo" width={400} height={100} className="w-full h-screen -z-10"/>
        <Image
          src={Logo}
          alt="Logo"
          objectFit="cover"
          className="absolute w-[120px] h-[30px] inset-0 ml-[80%] mt-4"
        />
      </div>

      {/* Footer Content */}
      <div id="contact" className="w-full absolute top-20 pt-36 pb-10 px-8 flex flex-col justify-between">
        {/* Top CTA */}
        <div className="w-full flex justify-between items-center px-[80px]">
          <h1 className={`${montserrat.className} text-3xl text-[#116466] font-bold`}>
            Ready to Work Together?
          </h1>
          <button className={`${montserrat.className} flex items-center gap-2 border-2 border-[#116466] text-2xl text-[#116466] font-semibold px-10 py-4 rounded-[50px] cursor-pointer`}>
            Start a Project <FaRegArrowAltCircleRight />
          </button>
        </div>

        {/* Main Footer */}
        <div className="w-full mt-20 flex px-[80px] justify-between">
          {/* Contact Section */}
          <div className="w-[25%] flex flex-col">
            <div className={`${montserrat.className} text-2xl font-semibold text-[#116466]`}>
              Connect With Us
            </div>
            <div className="w-full flex gap-1 mt-4 text-left">
              <Link href="#"><RiInstagramFill className="text-3xl text-[#116466]" /></Link>
              <Link href="#"><FaFacebookSquare className="text-3xl text-[#116466]" /></Link>
              <Link href="#"><FaLinkedin className="text-3xl text-[#116466]" /></Link>
              <Link href="#"><FaBehanceSquare className="text-3xl text-[#116466]" /></Link>
              <Link href="#"><FaSquareUpwork className="text-3xl text-[#116466]" /></Link>
              <Link href="#"><SiFiverr className="text-3xl text-[#116466]" /></Link>
            </div>
            <div className="mt-2">
              <Link href="#" className="text-2xl text-[#116466] flex items-center gap-3 text-left">
                <FaPhoneSquareAlt />
                <div className="text-[12px]">
                  +91 9119764352
                  <div>+91 8006495455</div>
                </div>
              </Link>
            </div>
            <div className="mt-2 flex items-center gap-2 text-left">
              <GrMail className="text-2xl text-[#116466]" />
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=Pixarcstudio@gmail.com" target="_blank" className="text-[#116466] text-[12px]">pixarcstudio@gmail.com</Link>
            </div>
          </div>

          {/* Nav Links */}
          <div className="w-[30%] flex justify-center gap-6">
            <div>
              <ul className="text-[#116466]">
                <li className="mt-2"><Link href="#about">About Us</Link></li>
                <li className="mt-2"><Link href="#servofolio">Portfolio</Link></li>
                <li className="mt-2"><Link href="#">Our Services</Link></li>
                <li className="mt-2"><Link href="#reviews">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <ul className="text-[#116466]">
                <li className="mt-2"><Link href="#">Help</Link></li>
                <li className="mt-2"><Link href="#contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Email Input */}
          <div className="w-[33%]">
            <h1 className={`${montserrat.className} text-[22px] text-[#116466] font-semibold text-center mb-2`}>Stay In Touch</h1>
            <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${montserrat.className} w-full text-sm text-[#116466] font-semibold border-2 border-[#116466] rounded-[50px] py-[13px] pr-2 pl-3 outline-none`}
              />
              <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#116466] text-2xl">
                <FaRegArrowAltCircleRight className="cursor-pointer"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
