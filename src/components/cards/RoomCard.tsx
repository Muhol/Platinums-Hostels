import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type Props = {}


function RoomCard() {


  return (
    <div title='single room' className=' flex flex-col w-[300px] h-[400px] p-[3px] rounded-lg border group hover:shadow-xl' >
        <div className=" relative w-full h-[300px] flex justify-center">
            <Image src={"/images/single-room-large2.jpg"} alt="" layout='fill' objectFit='cover' className='rounded-t-lg'/>
            <div className="hidden md:flex items-center justify-center p-1 rounded-t-lg bg-black/70 backdrop-blur-none opacity-0 w-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 overflow-hidden h-full bg-black/3 z-10">
            {/* <div className="hidden md:flex items-center justify-center p-1 rounded-t-lg bg-gradient-to-b from-transparent to-white backdrop-blur-none opacity-0 w-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 overflow-hidden h-full bg-black/3 z-10"> */}
                <Link href={"/Room_details"} 
                    className=' absolute -bottom-8 self-end flex items-center justify-center border-2 font-semibold text-[16px] border-white min-w-[150px] py-[3px] rounded px-[6px] text-white hover:min-w-[160px] hover:text-white hover:border-blue  hover:bg-blue transition-all group-hover:bottom-3 duration-500'
                >
                    View Details
                </Link>
            </div>
        </div>
        <div className="flex bg-white z-10 flex-col gap-3 w-full flex-1 py-3 px-2">
            <p className=' text-xl '>Single room Large</p>
            <p className=' text-light_green font-bold '><span className=' text-black md:text-lg font-normal '>Price:</span> ksh 18,000 - ksh 20,000 </p>
            <Link href={"/Room_details"} className='md:hidden border-2 border-light_green rounded text-white bg-light_green font-semibold py-1 px-3 self-center active:bg-blue active:border-blue active:px-4 transition-all duration-400 '>
                View Details 
            </Link>
        </div>
    </div>
  )
}

export default RoomCard