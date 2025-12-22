"use client"
import RoomCard from '@/components/cards/RoomCard'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Room } from '@/types/room'
import { RoomService } from '@/services/roomService'
import { Loader2 } from 'lucide-react'

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRooms = async () => {
        try {
            const data = await RoomService.getRooms();
            setRooms(data);
        } catch (error) {
            console.error("Failed to load rooms", error);
        } finally {
            setLoading(false);
        }
    };
    loadRooms();
  }, []);

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
            Showing {loading ? '...' : rooms.length} Rooms
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Accommodation</h1>
          <p className="text-gray-600 max-w-[700px]">
            Choose from a variety of comfortable and affordable room options designed to fit your student lifestyle and budget.
          </p>
        </div>

        {loading ? (
             <div className="flex-1 w-full flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-blue" size={48} />
             </div>
        ) : (
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center py-[20px]">
            {/* roomcards */}
            {rooms.map((room) => (
                <RoomCard 
                key={room.id}
                id={room.id}
                title={room.title}
                price={room.price}
                image={room.image}
                // slug={room.slug}
                features={room.features}
                />
            ))}
            </div>
        )}

        {!loading && rooms.length === 0 && (
            <div className="text-center py-10 text-gray-500">
                No rooms available at the moment. Please check back later.
            </div>
        )}
        
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