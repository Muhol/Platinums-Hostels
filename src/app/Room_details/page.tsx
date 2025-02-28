"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

// type Props = {}

function RoomDetailsPage() {

  const [slide , setSlide] = useState(false);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        delay: 0.5,
        duration: 0.5,
        }}

        className='min-h-scfullt-black pt-[110px] flex flex-col items-center '
        // className='min-h-screen text-black pt-[120px] flex flex-col items-center bg-gradient-to-bl to-slate-400 from-slate-100'
    >
        <div className="max-w-[1200px] w-full flex flex-col flex-1 shadow-xl pb-[120px] p-[20px] gap-[10px] md:gap-[20px]">
          <div className="flex gap-[10px] items-center ">
            <Link className='hover:text-blue transition-all duration-200' href={"/"}>Home</Link>
            <Image src={"/icons/arrow-right-black.svg"} alt='image' width={20} height={20}/>
            <Link className='hover:text-blue transition-all duration-200' href={"/Rooms&Pricing"}>Rooms</Link>
            <Image src={"/icons/arrow-right-black.svg"} alt='image' width={20} height={20}/>
            <Link className='hover:text-blue transition-all duration-200' href={"/Room-details"}>Single Room Large</Link>
          </div>
            <div className="w-full flex flex-wrap gap-[20px]">
                <div className=" w-full md:flex-1  md:min-w-[500px] flex flex-col items-center px-[10px] gap-[30px] md:gap-[10px] ">
                  <div className="relative w-full min-h-[300px] md:h-[400px]">
                    <Image src={"/images/single-room-large3.jpg"} alt='' layout='fill' objectFit='contain' />
                  </div>
                  <div className=" overflow-scroll md:overflow-scroll max-w-full sm:max-w-[500px] lg:max-w-[95%] self-center flex md:flex-wrap  m:justify-center gap-2">
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-large1.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-large2.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-large3.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-small1.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-small1.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-small1.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="min-w-[100px] h-[100px] relative">
                      <Image src={"/images/single-room-small1.jpg"} alt='image' layout='fill' objectFit='cover'/>
                    </div>
                  </div>
                  
                </div>
                <div className=" w-full md:flex-1  md:min-w-[500px] font-ligh text-[16px]">
                  <div className="flex flex-col gap-[30px]">
                    {/* roomtype name  */}
                    <h1 className='Capitalize font-semibold text-[19px] hover:text-blue transition-colors duration-200 ' >Single Room Large</h1>
                    <div className="flex flex-col gap-[30px] md:gap-[40px]">
                    {/* who the room suits */}
                    <p>This room is perfect for a student who values privacy</p>
                    {/* explaination of the cost  */}
                    <p>
                      The cost of this room is Ksh 18,000 per month ,if you prefer paying per semester
                      the cost will be Ksh 68,000 a discount of ksh 5,000 aplicable only if you pay the whole amount.
                    </p>
                    {/* what the cost covers */}
                    <p>
                      This includes a private room, access to a shared kitchen, and a shared bathroom. The cost also 
                      includes utilities, internet, and other expenses.
                    </p>
                    {/* the deposit infomation */}
                    <p>
                      A deposit of Ksh 5,000 for individuals paying per month and Ksh 10,000 for students 
                      paying per semester is required to secure the room. This deposit will be refunded
                      when you move out, provided you leave the room in good condition.
                    </p>

                    <div className="w-full pt-[30px] flex items-center gap-[20px]">
                      {/* availability */}
                        <p>
                          Availability:
                        </p>
                        <div className="flex items-center font-bold gap-[10px]">
                          {/* <Image src={"/icons/cancelled-red.svg"} alt='image' width={20} height={20} /> */}
                          {/* <Image src={"/icons/available.svg"} alt='image' width={20} height={20} /> */}
                          <p className='text-green-500' >available</p>
                          {/* <p className='text-red-500' >Unavailabe</p> */}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[20px]">
                      <p>Secure a space before they are full</p>
                      <button className=' self-center md:self-start rounded text-white bg-light_green md:bg-blue text-lg font-semibold p-[4px] w-[190px] active:bg-blue  active:w-[210px] md:hover:bg-blue/80 md:hover:w-[210px] transition-all duration-300' >
                          Book Now
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* <------------<description and additional information>------------>*/}
            <div className="flex flex-col py-[50px] gap-[40px]">
              <div className="flex justify-center border-b gap-[0px] md:text-[20px]">
                <div onClick={() => setSlide(false)} className={` py-2 ${!slide && "border-b-2 border-green-600"} transition-all duration-200 px-[20px] cursor-pointer`}>
                  <p className={` ${!slide &&"text-green-600"} font-semibold transition-colors duration-300`} >Description</p>
                </div>
                <div onClick={() => setSlide(true)} className={` py-2 ${slide && "border-b-2 border-green-600"} transition-all duration-200 px-[20px] cursor-pointer`}>
                  <p className={` ${slide &&"text-green-600"} font-semibold transition-colors duration-300`} >Additional Information</p>
                </div>
              </div>
              <div className="md:py-[30px] md:text-lg self-center overflow-hidden">
                        {/* <-----------------<slider>------------------> */}
                <div className={`flex ${slide && "-translate-x-full"} transition-transform duration-300 self-center w-full max-w-[600px]`}>
                        {/* <---------------<description>---------------> */}
                  <div className="flex flex-col gap-[20px] md:gap-[30px] min-w-full">
                    <p>
                      Our rooms are fully furnished and equipped with all the necessary amenities to make your stay comfortable and enjoyable.
                    </p>
                        {/* <----------------<features>-----------------> */}
                    <div className="flex flex-col gap-[10px] md:gap-[20px]">
                      <p>
                        Some of the features of our rooms include:
                      </p>
                      <ul className="list-disc ml-[20px]">
                        <li>Shared bathroom with shower and toilet</li>
                        <li>Bed(s) with comfortable mattress</li>
                        <li>A study desk</li>
                        <li>Flat-screen TV with cable channels</li>
                        <li>Play Station for Unwinding after a long day</li>
                        <li>Free & Fast Wi-Fi</li>
                      </ul>
                      <p>
                        In addition you also get:
                      </p>
                      <ul className="list-disc ml-[20px]">
                        <li>24/7 security</li>
                        <li>A meal plan (Optional)</li>
                        <li>Clean & Well Maintained Facilities</li>
                        <li>Hot Shower</li>
                      </ul>
                    </div>
                  </div>
                        {/* <------------<additional infomation>------------> */}
                  <div className="flex flex-col gap-[20px] min-w-full ">
                    <p>
                      If you decide not to take the meal plan the cost will reduce to Ksh 14,000 per month and Ksh 55,000 per semester
                    </p>
                    <p>
                      Transport is also optional and the charges for transport depend on the campus your are in starting from Ksh 2,000 per month. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </motion.div>
  )
}

export default RoomDetailsPage