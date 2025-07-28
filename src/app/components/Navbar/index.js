
// responsive
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/Frame.svg';
import { FiMoreVertical } from "react-icons/fi";
import { Quicksand } from 'next/font/google';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li className="text-[13px]">
        <Link href="#home">Home</Link>
      </li>
      <li className="text-[13px]">
        <Link href="#servofolio">Portfolio</Link>
      </li>
      <li className="text-[13px]">
        <Link href="#about">About</Link>
      </li>
      <li className="text-[13px]">
        <Link href="#">Services</Link>
      </li>
      <li className="text-[13px]">
        <Link href="#contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between ">
        {/* Logo */}
        <Link href="#home">
          <Image src={Logo} width={100} height={30} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-20">
          <ul className={`flex gap-10 text-[#FFCB9A] ${quicksand.className}`}>
            {navLinks}
          </ul>
          <Link href="#">
            <FiMoreVertical className="text-[#FFCB9A]" />
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoClose
              className="text-[#FFCB9A] text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-[#FFCB9A] text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-end pr-4 gap-4  text- text-[#FFCB9A] rounded-b-xl transition-all duration-300 ease-in-out">
          <ul className={`flex flex-col gap-3 ${quicksand.className}`}>
            {navLinks}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

