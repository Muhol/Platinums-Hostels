"use client";
 
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Grechen_Fuemen} from "next/font/google";
import Link from 'next/link';

const grechen_fuemen = Grechen_Fuemen({subsets:['latin'], weight:['400']})

// type Props = {}

function HeroSection() {
  return (
    <div className="w-full relative min-h-[400px] md:h-screen overflow-hidden flex flex-col bg-transparent">
      {/* <-----------<COMMENTED ALTERNATIVE STYLE>-----------> */}
    {/* <div className="w-full relative h-screen md:h-screen overflow-hidden flex flex-col bg-transparent"> */}
    {/* Background Image Container - Now Transparent */}
    <div className=" md:relative md:h-[calc(100%-70px)]  lg:h-[calc(100%-110px)]">
    {/* <div className=" md:relative h-full md:h-[calc(100%-110px)]"> */}
      
      {/* Image removed to use global fixed background */}
      
      <div className=" absolute pt-[140px] md:pt-[0] flex flex-col md:items-center md:justify-center inset-0 bg-black/60 md:bg-black/60 z-10">
      {/* Heading Text */}
        <div className="relative z-20 flex flex-col items-center md:justify-center h-full text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative md:absolute md:bg-light_b md:bottom-[-90px] mt-[0] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full shadow-lg z-30"
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
            className={`text-[30px] font-semibold md:text-[40px] lg:text-[50px] xl:text-[60px] text-white`}
            // className={`${grechen_fuemen.className} text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-white`}
          >
            Your Home Away from Home 
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" hidden text-lg md:text-2xl xl:text-3xl text-gray-200  leading-relaxed"
          >
            More than just a place to stay—find comfort, security, and community
            {/* From as low ksh 10,000 */}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className= {`${grechen_fuemen.className} hidden  text-lg md:text-lg xl:text-xl text-gray-400  leading-relaxed`}
          >
            Fully Furnished Rooms | 📚 Study Areas & WiFi | 🍽 Meal Plans Available | 🏢 Nearby Shops & Transport
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" text-[14px] font-semibold md:text-2xl xl:text-lg text-white my-[20] leading-relaxed"
          >
            From as low ksh 10,000
          </motion.p>
          <Link href={"/Rooms&Pricing"} >
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{delay:0.5, duration:0.9}}
              // className=' flex items-center gap-4  bg-light_green  transition-all duration-300 text-white px-[20px] py-[10px] rounded-3xl border border-light_green active:px[25px] md:hover:px-[25px] active:bg-blue md:hover:bg-blue md:hover:border-blue md:backdrop-filter  md:rounded-lg md:my-[30px] '
              className=' flex items-center gap-4 bg-blue md:backdrop-blur-md  transition-all duration-300 text-white px-[20px] py-[10px] rounded-3xl font-bold active:px[25px] md:hover:px-[25px] active:bg-light_green md:hover:bg-light_green/80 md:hover:border-blue md:backdrop-filter  md:rounded-lg md:my-[30px] '
            >
              Secure Your Space Now <Image src={"/icons/arrow-right.svg"} alt="Arrow Right" width={25} height={25} />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
    {/* Bottom opaque white part */}
    <div className="hidden md:block absolute bottom-0 w-full md:h-[70px] lg:h-[110px] bg-white "></div>
  </div>
  )
}

export default HeroSection