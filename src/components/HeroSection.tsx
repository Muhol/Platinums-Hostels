"use client";
 
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Grechen_Fuemen} from "next/font/google";

const grechen_fuemen = Grechen_Fuemen({subsets:['latin'], weight:['400']})

type Props = {}

function HeroSection({}: Props) {
  return (
    // 
    <div className="w-full min-h-screen relative overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src="/images/Hostel-Image.jpg"
        alt="Hostel Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
    </div>

    {/* Content Section */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mt-[150px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden shadow-lg"
      >
        <Image
          src="/images/logo.jpg"
          alt="Platinum Hostels Logo"
          layout="fill"
          objectFit="cover"
          className='rounded-full'
        />
      </motion.div>

      {/* Heading Text */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`${grechen_fuemen.className} text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-white`}
      >
        Your Home Away from Home 
        {/* Welcome to{" "}
        <span className="text-blue">Platinum Hostels</span> */}
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
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:0.5, duration:0.9}}
        className=' flex items-center gap-4 bg-light_green hover:bg-blue transition-all duration-300 text-white px-[20px] py-[10px] rounded-3xl my-[50px] '
      >
        Secure Your Space Now <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25} />
      </motion.button>
    </div>
  </div>
  )
}

export default HeroSection