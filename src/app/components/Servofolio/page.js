
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Dosis } from 'next/font/google';
import Image1 from '../../../../public/servofolio/Rectangle 11.png';
import Image2 from '../../../../public/servofolio/Rectangle 12.png';
import Image3 from '../../../../public/servofolio/Rectangle 13.png';
import Image4 from '../../../../public/servofolio/Rectangle 14.png';
import Image5 from '../../../../public/servofolio/Rectangle 15.png';
import Gradimg from '../../../../public/servofolio/Rectangle 16.png';
import Card1Img1 from '../../../../public/servofolio/card1/Traveingo@4x.png';
import Card1Img2 from '../../../../public/servofolio/card1/Sprout Root@4x.png';
import Card1Img3 from '../../../../public/servofolio/card1/Mc Daniels@4x.png';
import Card1Img4 from '../../../../public/servofolio/card1/Laddu Pandey@4x.png';
import Card2 from '../../../../public/servofolio/card2/image (1).png';
import Card3Img1 from '../../../../public/servofolio/card3/2151383057.png';
import Card3Img2 from '../../../../public/servofolio/card3/35833948.png';
import Card3Img3 from '../../../../public/servofolio/card3/35833949.png';
import Card3Img4 from '../../../../public/servofolio/card3/35833950.png';
import Card4Img1 from '../../../../public/servofolio/card4/2151383057.png';
import Card4Img2 from '../../../../public/servofolio/card4/35833949.png';
import Card4Img3 from '../../../../public/servofolio/card4/35833950.png';
import Card4Img4 from '../../../../public/servofolio/card4/35833951.png';

const dosis = Dosis({ subsets: ['latin'], weight: '400' });

const cardsData = [
  {
    id: 1,
    number: '1',
    title: 'BRANDING',
    img: Image1,
    translate: 'translate-y-12',
    extraContent: [
      { title: 'Logo', img: Card1Img1 },
      { title: 'Palette', img: Card1Img2 },
      { title: 'Guide', img: Card1Img3 },
      { title: 'Fonts', img: Card1Img4 },
    ],
  },
  {
    id: 2,
    number: '2',
    title: 'WEB DEV.',
    img: Image2,
    translate: 'translate-y-[-10px]',
    extraContent: [{ title: 'React Projects', img: Card2 }],
  },
  {
    id: 3,
    number: '3',
    title: 'PACKAGING',
    img: Image3,
    translate: 'translate-y-12',
    extraContent: [
      { img: Card3Img1 },
      { img: Card3Img2 },
      { img: Card3Img3 },
      { img: Card3Img4 },
    ],
  },
  {
    id: 4,
    number: '4',
    title: 'CREATIVES',
    img: Image4,
    translate: 'translate-y-[-10px]',
    extraContent: [
      { img: Card4Img1 },
      { img: Card4Img2 },
      { img: Card4Img3 },
      { img: Card4Img4 },
    ],
  },
  {
    id: 5,
    number: '5',
    title: 'VIDEO EDITING',
    img: Image5,
    translate: 'translate-y-12',
    extraContent: [{ title: 'Shorts', description: 'Engaging edits for YouTube/IG.' }],
  },
];

export default function Servofolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div id="servofolio" className="relative w-full h-[120vh] bg-gradient-to-b from-[#225A5B] to-[#113F3F] flex flex-col items-center justify-center px-[50px] pb-26">
      <h1 className="text-center text-5xl text-[#FFCB9A] font-montserrat font-bold">SERVOFOLIO</h1>
      <h3 className="text-center text-[#FFCB9A] mb-6 font-montserrat font-light">SERVICES cum PORTFOLIO</h3>

      <div className="w-full flex justify-center gap-6">
        {cardsData.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                ${item.translate}
                relative 
                transition-all duration-500 ease-in-out 
                h-[400px] 
                shadow-[15px_15px_30px_rgba(0,0,0,0.5)] 
                overflow-hidden 
                flex 
                justify-start 
                items-start
                bg-[#D2E8E2]
                group
                ${isHovered ? 'w-[1500px]' : 'w-[200px]'}
                cursor-pointer
              `}
            >
              {/* Image Section */}
              <div className="relative w-[200px] h-[400px] shrink-0 cursor-pointer">
                <Image src={item.img} alt={item.title} fill className="object-cover z-0" />
                <Image
                  src={Gradimg}
                  alt="Overlay"
                  fill
                  className="object-cover mix-blend-overlay opacity-[95%] z-10"
                />

                <div className="absolute bottom-2 left-3 z-20">
                  <h2 className="text-6xl font-bold text-[#FFCB9A]">{item.number}</h2>
                  <h3 className={`${dosis.className} text-xl text-white pt-2`}>{item.title}</h3>
                </div>
              </div>

              {/* Expanded Section */}
              {isHovered && (
                <div className="w-[600px] h-full p-6 overflow-hidden z-10 flex items-center justify-center cursor-pointer">
                  {index === 0 ? (
                    <div className="flex flex-wrap gap-4">
                      {item.extraContent.map((detail, i) => (
                        <div key={i} className="w-[130px] h-[130px] bg-white rounded-lg flex items-center justify-center gap-4 cursor-pointer">
                          <div className="relative w-[60px] h-[60px]">
                            <Image src={detail.img} alt={detail.title} fill className="object-contain" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : index === 1 ? (
                    <div className="relative w-full h-full object-cover overflow-visible">
                      <Image
                        src={Card2}
                        alt="Card 2 Expanded"
                        className="w-full h-full object-contain scale-x-130 scale-y-160 rounded-lg hover:scale-y-165"
                      />
                    </div>
                  ) : index === 2 || index === 3 ? (
                    <div className="flex flex-wrap gap-4">
                      {item.extraContent.map((imgObj, i) => (
                        <div
                          key={i}
                          className="relative w-[150px] h-[150px] rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300"
                          onClick={() => setLightboxImg(imgObj.img)}
                        >
                          <Image src={imgObj.img} alt={`Image ${i}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {item.extraContent.map((detail, i) => (
                        <div key={i} className="cursor-pointer">
                          <h4 className="text-xl font-semibold text-[#FFCB9A]">{detail.title}</h4>
                          <p className="text-white text-sm">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image src={lightboxImg} alt="Fullscreen View" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}






