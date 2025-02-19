"use client";
 
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Grechen_Fuemen} from "next/font/google";

const grechen_fuemen = Grechen_Fuemen({subsets:['latin'], weight:['400']})

// type Props = {}

function HeroSection() {
  return (
    <div className="w-full relative h-screen md:h-[calc(100vh+40px)] overflow-hidden flex flex-col md:pt-[] bg-slate-200">
    {/* Background Image */}
    <div className=" md:relative h-full md:h-[calc(100%-180px)]">
      
      <Image
        src="/images/Hostel-Image.jpg"
        alt="Hostel Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className=" absolute flex flex-col items-center justify-center inset-0 bg-black/50 backdrop-filter backdrop-blur-sm md:backdrop-blur-none z-10">
      {/* Heading Text */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" relative md:absolute md:bg-light_b md:bottom-[-130px] mt-[0] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full shadow-lg"
          >
            <Image
              src="/images/logo.jpg"
              alt="Platinum Hostels Logo"
              layout="fill"
              objectFit="cover"
              className='rounded-full mix-blend-multiply'
            />
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`${grechen_fuemen.className} text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-white`}
          >
            Your Home Away from Home 
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" text-lg md:text-2xl xl:text-3xl text-gray-200  leading-relaxed"
          >
            More than just a place to stay—find comfort, security, and community.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className= {`${grechen_fuemen.className}  text-lg md:text-lg xl:text-xl text-gray-400  leading-relaxed`}
          >
            Fully Furnished Rooms | 📚 Study Areas & WiFi | 🍽 Meal Plans Available | 🏢 Nearby Shops & Transport
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" text-sm md:text-2xl xl:text-3xl text-gray-300 my-[20] leading-relaxed"
          >
            From as low ksh 10,000
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay:0.5, duration:0.9}}
            className=' flex items-center gap-4 bg-light_green  hover:bg-blue transition-all duration-300 text-white px-[20px] py-[10px] rounded-3xl border border-light_green md:hover:bg-light_green md:hover:rounded md:hover:border-light_green md:bg-black/30 md:backdrop-filter md:backdrop-blur-sm md:border-white md:rounded-none md:my-[30px] '
          >
            Secure Your Space Now <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25} />
          </motion.button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection