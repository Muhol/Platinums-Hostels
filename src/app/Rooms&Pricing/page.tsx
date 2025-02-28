"use client"
import RoomCard from '@/components/cards/RoomCard'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// type Props = {}

function Rooms() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.5,
      duration: 0.5,
    }}

    // className='min-h-screen text-black py-[120px] flex flex-col items-center bg-gradient-to-br from-slate-50 to-slate-100'
    className='min-h-screen text-black pt-[120px] flex flex-col items-center bg-white '
    >
      <div className="flex flex-col gap-[0px] flex-1 h-full shadow-lg pt-[10px] pb-[120px] px-[20px] max-w-[1200px] w-full ">
        <p className=' flex gap-[10px] items-center text-[18px] md:text-[20px] font-light self-center md:self-start' >Home <Image src={"/icons/arrow-right-black.svg"} alt='' width={20} height={20} /> Rooms & Pricing – Platinum Hostels</p>
        {/* <p className=' font-light text-xl text-center '>At Platinum Hostels, we offer a variety of comfortable and affordable room options designed to fit your needs. Whether you prefer a private space or a shared living experience, our well-maintained rooms come with top-notch amenities to ensure a comfortable stay.</p> */}
        <div className="flex-1 w-full flex flex-wrap gap-[40px] justify-center py-[50px]">
          {/* roomcards */}
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
        </div>
        <p className=' self-center text-center max-w-[600px] md:text-lg font-light '><span className='font-normal '>Note !</span> The price range exists due to inclusion or removal of some optional amenities according to your configuration</p>
      </div>
    </motion.div>
  )
}

export default Rooms