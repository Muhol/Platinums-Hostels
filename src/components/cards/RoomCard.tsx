import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RoomCardProps = {
  id?: string | number;
  title: string;
  price: string;
  image: string;
  features?: string[];
}

function RoomCard(props: RoomCardProps) {
  const { title, price, image, features } = props;

  return (
    <div title={title} className='bg-white flex flex-col w-[300px]  p-[0px] rounded-lg border group hover:shadow-2xl transition-all duration-300 overflow-hidden' >
        <div className=" relative w-full h-[250px] flex justify-center overflow-hidden">
            <Image src={image} alt={title} layout='fill' objectFit='cover' className='group-hover:scale-110 transition-transform duration-700'/>
            <div className="hidden md:flex items-center justify-center p-1 rounded-t-lg bg-black/40 backdrop-blur-[2px] opacity-0 w-full h-full absolute top-0 left-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <Link href={`/Room_details?id=${props.id}`} 
                    className=' flex items-center justify-center border-2 font-semibold text-[16px] border-white min-w-[140px] py-[8px] rounded-full px-[20px] text-white hover:bg-white hover:text-blue hover:border-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500'
                >
                    View Details
                </Link>
            </div>
            
            {/* Price Tag Overlay */}
            <div className="absolute bottom-0 right-0 bg-blue/40 backdrop-blur text-white py-1 px-4 rounded-tl-lg z-10 text-sm font-bold">
              {price.split(' - ')[0]}
            </div>
        </div>
        <div className="flex bg-white z-10 flex-col gap-3 w-full flex-1 py-4 px-4 justify-between">
            <div>
              <p className=' text-xl font-bold text-gray-800 line-clamp-1'>{title}</p>
              <div className="text-sm text-gray-500 mt-2 flex flex-wrap gap-1">
                {features?.slice(0, 3).map((feature, idx) => (
                  <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded text-xs">{feature}</span>
                ))}
                {features && features.length > 3 && (
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">+{features.length - 3} more</span>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className=' text-blue font-bold text-sm '><span className=' text-gray-500 font-normal '>Price:</span> {price} </p>
              <Link href={`/Room_details?id=${props.id}`} className='md:hidden text-center w-full border-2 border-blue rounded-full text-blue hover:text-white hover:bg-blue font-semibold py-1.5 px-3 transition-all duration-300 '>
                  View Details 
              </Link>
            </div>
        </div>
    </div>
  )
}

export default RoomCard