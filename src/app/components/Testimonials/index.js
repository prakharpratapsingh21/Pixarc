
"use client";

import React, { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Boy from "../../../../public/Testimonials/group 10.png";
import { Bayon, Montserrat, Carattere, Alfa_Slab_One } from "next/font/google";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { delay } from "motion";

const bayon = Bayon({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const carattere = Carattere({ subsets: ["latin"], weight: "400" });
const alfa_slab = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    delay:1000,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  };

  const testimonialData = [
    {
      name: "Mathew Jones",
      title: "Founder, Rhodium Industries",
      heading: "Flawless Results",
      text1:
        "The edited images I received back were so beautiful!!! The best deep etching I have ever seen. The results are flawless. I needed garments on a mannequin deep-etched with the base excluded.",
      text2:
        "I am absolutely thrilled with the quality!!! Even for very detailed areas fine details like feathers are isolated out magnificently. I would highly recommend for anyone in need of deep etching to use Graphic Design Eye.",
    },
    {
      name: "Stella Jones",
      title: "Founder, Rhodium Industries",
      heading: "Amazing Service",
      text1:
        "Quick turnaround and flawless quality. Everything looked professional and elegant. I needed several product images cleaned up and was very impressed.",
      text2:
        "Highly recommended! The precision and detail were top-notch. Great communication too.",
    },
    {
      name: "Jones",
      title: "Creative Director",
      heading: "Outstanding Quality",
      text1:
        "Seriously impressed with how clean and sharp the final visuals came out. This team really understands attention to detail.",
      text2:
        "Wouldn't hesitate to use their services again for future creative projects.",
    },
  ];

  // 👇 Visibility change effect to resume autoplay
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        sliderRef.current?.slickPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      id="reviews"
      className="w-full h-[120vh] bg-gradient-to-b from-[#112B2B] to-[#111F1E] flex flex-col items-center"
    >
      <h1 className="text-6xl text-[#FFCB9A] mt-18 font-bold">TESTIMONIALS</h1>
      <div className="flex gap-[3px] mt-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-[8px] h-[8px] bg-[#FFCB9A] rounded-full"
          ></div>
        ))}
      </div>

      <div className="w-full h-[65vh] flex gap-4 items-center justify-center mt-18">
        {/* Static Side Card */}
        <div className="w-[12%] h-full bg-[#D9D9D9] rounded-full flex flex-col items-center justify-between py-4">
          <div className="flex pt-10">
            <BiSolidQuoteSingleLeft className="w-15 h-15 text-[#116466]" />
            <BiSolidQuoteSingleLeft className="w-15 h-15 text-[#116466]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-amber-400" />
              ))}
            </div>

            <div className="w-[8vw] h-[17vh] relative rounded-full overflow-hidden">
              <Image
                src={Boy}
                alt="User"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Main Sliding Content */}
        <div className="w-[60%] h-full bg-[#D9D9D9] rounded-[100px] flex items-center justify-center p-10 overflow-hidden">
          <div className="w-full h-full">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
              {testimonialData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 justify-center h-full px-[20px]"
                >
                  <div className="text-[#116466]">
                    <h1 className={`${bayon.className} text-4xl`}>{item.name}</h1>
                    <h3 className={`${montserrat.className}`}>{item.title}</h3>
                  </div>
                  <div className="text-[#116466] flex flex-col gap-3">
                    <h1 className={`${carattere.className} text-3xl`}>
                      {item.heading}
                    </h1>
                    <p className={`${montserrat.className} text-justify`}>
                      {item.text1}
                    </p>
                    <p className={`${montserrat.className} text-justify`}>
                      {item.text2}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
