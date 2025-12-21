"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Bed, Monitor, Lock, Coffee, ShowerHead, ShieldCheck, Zap } from 'lucide-react'

// Mock similar rooms data
const SIMILAR_ROOMS = [
  {
    id: 1,
    title: "Single Room Standard",
    price: "Ksh 15,000",
    image: "/images/single-room-small1.jpg",
  },
  {
    id: 2,
    title: "Double Room Sharing",
    price: "Ksh 10,000",
    image: "/images/single-room-large3.jpg",
  },
  {
    id: 3,
    title: "Tripple Room Sharing",
    price: "Ksh 8,000",
    image: "/images/single-room-large1.jpg",
  }
]

function RoomDetailsPage() {

  const [slide , setSlide] = useState(false);
  const [activeImage, setActiveImage] = useState("/images/single-room-large3.jpg");

  const images = [
    "/images/single-room-large3.jpg",
    "/images/single-room-large1.jpg",
    "/images/single-room-large2.jpg",
    "/images/single-room-small1.jpg"
  ];

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='min-h-screen text-black pt-[110px] flex flex-col items-center bg-gray-50'
    >
        <div className="max-w-[1250px] w-full flex flex-col flex-1 pb-[120px] p-[20px] gap-[20px]">
          {/* Breadcrumb */}
          <div className="flex gap-[10px] items-center text-sm md:text-base">
            <Link className='hover:text-blue transition-all duration-200' href={"/"}>Home</Link>
            <Image src={"/icons/arrow-right-black.svg"} alt='arrow' width={16} height={16}/>
            <Link className='hover:text-blue transition-all duration-200' href={"/Rooms&Pricing"}>Rooms</Link>
            <Image src={"/icons/arrow-right-black.svg"} alt='arrow' width={16} height={16}/>
            <span className='text-blue font-semibold'>Single Room Large</span>
          </div>

          <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-[40px]">
            {/* Top Section: Gallery & Info */}
            <div className="flex flex-col lg:flex-row gap-[40px]">
                {/* Image Gallery */}
                <div className="w-full lg:w-[55%] flex flex-col gap-4">
                  <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
                    <Image 
                      src={activeImage} 
                      alt='Room Main' 
                      layout='fill' 
                      objectFit='cover'
                      className='transition-all duration-500 hover:scale-105'
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {images.map((img, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative h-[80px] md:h-[100px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImage === img ? 'border-blue opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx}`} layout='fill' objectFit='cover'/>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Info */}
                <div className="w-full lg:w-[45%] flex flex-col gap-6">
                    <div>
                      <h1 className='capitalize font-bold text-3xl md:text-4xl text-gray-900 mb-2'>Single Room Large</h1>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-light_green/10 text-light_green px-3 py-1 rounded-full text-sm font-semibold">Verified</span>
                        <span className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm font-semibold">Premium</span>
                      </div>
                      <p className='text-gray-600 text-lg'>Perfect for students who value privacy and extra space for their studies and relaxation.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex justify-between items-end mb-2">
                         <p className="text-gray-500">Monthly Rent</p>
                         <p className="text-3xl font-bold text-blue">Ksh 18,000</p>
                      </div>
                      <div className="flex justify-between items-end mb-4 border-b border-dashed border-gray-300 pb-4">
                         <p className="text-gray-500">Semester Price (Discounted)</p>
                         <p className="text-xl font-bold text-green-600">Ksh 68,000</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                        <div className="flex justify-between">
                          <span>Deposit (Refundable)</span>
                          <span className="font-semibold">Ksh 5,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Utilities (Water, Elec)</span>
                          <span className="font-semibold">Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Internet</span>
                          <span className="font-semibold">Included</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                         <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                           <span className="text-green-600 font-medium">Available Now</span>
                         </div>
                      </div>

                      <button className='w-full rounded-xl text-white bg-blue hover:bg-blue/90 text-lg font-bold py-4 shadow-lg shadow-blue/20 active:scale-[0.98] transition-all duration-200' >
                          Book This Room
                      </button>
                      <p className='text-center text-xs text-gray-400 mt-3'>Secure your spot with a minimal deposit today</p>
                    </div>
                </div>
            </div>

            {/* Middle Section: Amenities & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] border-t border-gray-100 pt-[40px]">
              
              {/* Description & Amenities */}
              <div className="lg:col-span-2 flex flex-col gap-[40px]">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button onClick={() => setSlide(false)} className={`pb-4 px-6 font-semibold text-lg transition-all duration-200 ${!slide ? "text-blue border-b-2 border-blue" : "text-gray-500 hover:text-gray-800"}`}>
                    Overview
                  </button>
                  <button onClick={() => setSlide(true)} className={`pb-4 px-6 font-semibold text-lg transition-all duration-200 ${slide ? "text-blue border-b-2 border-blue" : "text-gray-500 hover:text-gray-800"}`}>
                    Details & Policy
                  </button>
                </div>

                <div className="min-h-[300px]">
                   {!slide ? (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-8">
                       <div>
                         <h3 className="text-xl font-bold mb-4">Room Amenities</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100 dark:border-gray-800">
                             <Wifi className="text-blue" size={28} />
                             <span className="text-sm font-medium">Fast WiFi</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <Bed className="text-blue" size={28} />
                             <span className="text-sm font-medium">Comfy Bed</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <Monitor className="text-blue" size={28} />
                             <span className="text-sm font-medium">TV & Cable</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <Lock className="text-blue" size={28} />
                             <span className="text-sm font-medium">Secure Lock</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <Coffee className="text-blue" size={28} />
                             <span className="text-sm font-medium">Study Desk</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <ShowerHead className="text-blue" size={28} />
                             <span className="text-sm font-medium">Hot Shower</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <ShieldCheck className="text-blue" size={28} />
                             <span className="text-sm font-medium">24/7 Security</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                             <Zap className="text-blue" size={28} />
                             <span className="text-sm font-medium">Backup Power</span>
                           </div>
                         </div>
                       </div>
                       
                       <div>
                         <h3 className="text-xl font-bold mb-3">Description</h3>
                         <p className="text-gray-600 leading-relaxed mb-4">
                           Our Single Room Large offers the ultimate student living experience. Designed for those who appreciate their own space, this room comes fully furnished with a comfortable bed, a dedicated study area with a desk and chair, and ample storage for all your belongings.
                         </p>
                         <p className="text-gray-600 leading-relaxed">
                           The room features large windows that let in plenty of natural light, creating a bright and airy atmosphere perfect for studying or relaxing. With high-speed internet included, you&apos;ll never miss a deadline or a video call with family.
                         </p>
                       </div>
                     </motion.div>
                   ) : (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3">Additional Costs & Info</h3>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0"></span>
                              <p><strong>Meal Plan (Optional):</strong> Available for an additional cost. Includes breakfast, lunch, and dinner.</p>
                            </li>
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0"></span>
                              <p><strong>Transport (Optional):</strong> Shuttle services to nearby campuses starting from Ksh 2,000/month.</p>
                            </li>
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0"></span>
                              <p>If you opt out of the meal plan, the monthly rent reduces to <strong>Ksh 14,000</strong>.</p>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">House Rules</h3>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                              <p>No loud noise after 10:00 PM to ensure a conducive study environment.</p>
                            </li>
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                              <p>Guests are allowed but must leave by 9:00 PM.</p>
                            </li>
                            <li className="flex gap-3">
                              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                              <p>Keep the shared spaces clean after use.</p>
                            </li>
                          </ul>
                        </div>
                     </motion.div>
                   )}
                </div>
              </div>

              {/* Similar Rooms Sidebar */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold">Similar Rooms</h3>
                <div className="flex flex-col gap-4">
                  {SIMILAR_ROOMS.map((room) => (
                    <div key={room.id} className="flex gap-4 group cursor-pointer bg-white border border-gray-100 rounded-lg p-3 hover:shadow-md transition-all duration-300">
                      <div className="relative w-[100px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={room.image} alt={room.title} layout='fill' objectFit='cover' className="group-hover:scale-110 transition-transform duration-500"/>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue transition-colors duration-200">{room.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{room.price}/month</p>
                        <span className="text-xs text-blue font-semibold group-hover:underline">View Details</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-blue to-blue/80 rounded-2xl p-6 text-white text-center mt-6">
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="text-blue-100 mb-4 text-sm">Not sure which room is right for you? Talk to our team.</p>
                  <Link href="/contact-us">
                    <button className="bg-white text-blue px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">Contact Us</button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        
    </motion.div>
  )
}

export default RoomDetailsPage