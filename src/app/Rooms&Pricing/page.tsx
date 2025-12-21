"use client"
import RoomCard from '@/components/cards/RoomCard'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Sample data for rooms
const ROOMS_DATA = [
  {
    id: 1,
    title: "Single Room Large",
    price: "Ksh 18,000 - Ksh 20,000",
    image: "/images/single-room-large2.jpg",
    slug: "single-room-large",
    features: ["Private", "Study Desk", "WiFi", "Large Bed"]
  },
  {
    id: 2,
    title: "Single Room Standard",
    price: "Ksh 15,000 - Ksh 17,000",
    image: "/images/single-room-small1.jpg",
    slug: "single-room-standard",
    features: ["Private", "WiFi", "Compact", "Budget Friendly"]
  },
  {
    id: 3,
    title: "Double Room Sharing",
    price: "Ksh 10,000 - Ksh 12,000",
    image: "/images/single-room-large3.jpg",
    slug: "double-room-sharing",
    features: ["Shared", "Spacious", "2 Beds", "Social"]
  },
  {
    id: 4,
    title: "Tripple Room Sharing",
    price: "Ksh 8,000 - Ksh 10,000",
    image: "/images/single-room-large1.jpg",
    slug: "triple-room-sharing",
    features: ["Shared", "Budget", "Community", "Large"]
  },
  {
    id: 5,
    title: "Executive Suite",
    price: "Ksh 25,000 - Ksh 30,000",
    image: "/images/single-room-large2.jpg",
    slug: "executive-suite",
    features: ["En-suite", "Premium", "AC", "TV"]
  },
  {
    id: 6,
    title: "Quad Room Sharing",
    price: "Ksh 7,000 - Ksh 9,000",
    image: "/images/single-room-small1.jpg",
    slug: "quad-room-sharing",
    features: ["Super Saver", "Shared", "Basic", "Clean"]
  }
];

function Rooms() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.5,
      duration: 0.5,
    }}
    className='min-h-screen text-black pt-[120px] flex flex-col items-center bg-gray-50'
    >
      <div className="flex flex-col gap-[0px] flex-1 h-full pt-[10px] pb-[120px] px-[20px] max-w-[1200px] w-full ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className=' flex gap-[10px] items-center text-[16px] md:text-[18px] font-medium text-gray-600' >
            Home <Image src={"/icons/arrow-right-black.svg"} alt='' width={16} height={16} /> 
            <span className="text-blue font-bold">Rooms & Pricing</span>
          </p>
          <div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
            Showing {ROOMS_DATA.length} Rooms
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Accommodation</h1>
          <p className="text-gray-600 max-w-[700px]">
            Choose from a variety of comfortable and affordable room options designed to fit your student lifestyle and budget.
          </p>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center py-[20px]">
          {/* roomcards */}
          {ROOMS_DATA.map((room) => (
            <RoomCard 
              key={room.id}
              title={room.title}
              price={room.price}
              image={room.image}
              slug={room.slug}
              features={room.features}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-blue/5 border border-blue/10 rounded-xl p-6 text-center">
          <p className=' text-center max-w-[800px] mx-auto md:text-lg text-gray-700 '>
            <span className='font-bold text-blue'>Note:</span> The price range exists due to inclusion or removal of some optional amenities like meal plans or transport services according to your preference.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Rooms