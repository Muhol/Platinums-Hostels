"use client"
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Bed, Monitor, Lock, Coffee, ShowerHead, ShieldCheck, Zap, Loader2, Home } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { RoomService } from '@/services/roomService'
import { Room } from '@/types/room'

// Map of amenity strings to Lucide components
const AMENITY_ICONS: Record<string, any> = {
  "Fast WiFi": Wifi,
  "Comfy Bed": Bed,
  "TV & Cable": Monitor,
  "Secure Lock": Lock,
  "Study Desk": Coffee, // Coffee icon used as study desk alternative
  "Hot Shower": ShowerHead,
  "24/7 Security": ShieldCheck,
  "Backup Power": Zap
};

function RoomDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [room, setRoom] = useState<Room | null>(null);
  const [similarRooms, setSimilarRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [slide , setSlide] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const fetchRoomData = async () => {
      if (!id) { 
        setLoading(false); 
        return; 
      }
      try {
        setLoading(true);
        // Fetch current room
        const data = await RoomService.getRoomById(id);
        if (data) {
          setRoom(data);
          // Set initial active image
          if (data.images && data.images.length > 0) {
             setActiveImage(data.images[0]);
          } else {
             setActiveImage(data.image);
          }

          // Fetch all rooms to determine similar ones (naive approach: filter out current)
          const allRooms = await RoomService.getRooms();
          const others = allRooms
            .filter(r => r.id !== id)
            .slice(0, 3); // Take top 3
          setSimilarRooms(others);
        }
      } catch (error) {
        console.error("Failed to fetch room/data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRoomData();
  }, [id]);

  if (loading) {
     return (
        <div className="min-h-screen pt-[110px] flex justify-center items-start">
             <Loader2 className="animate-spin text-blue mt-20" size={48} />
        </div>
     )
  }

  if (!room) {
    return (
        <div className="min-h-screen pt-[110px] flex flex-col items-center justify-center gap-4 text-center px-4">
             <h1 className="text-2xl font-bold">Room Not Found</h1>
             <p className="text-gray-600">The room you are looking for does not exist or has been removed.</p>
             <Link href="/Rooms&Pricing" className="bg-blue text-white px-6 py-2 rounded-lg font-bold">Back to Rooms</Link>
        </div>
    )
  }

  // Use room.images if available, otherwise just use room.image repeated or empty
  const galleryImages = room.images && room.images.length > 0 ? room.images : [room.image];

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
            <span className='text-blue font-semibold line-clamp-1'>{room.title}</span>
          </div>

          <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-[40px]">
            {/* Top Section: Gallery & Info */}
            <div className="flex flex-col lg:flex-row gap-[40px]">
                {/* Image Gallery */}
                <div className="w-full lg:w-[55%] flex flex-col gap-4">
                  <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
                    <Image 
                      src={activeImage || room.image} 
                      alt={room.title} 
                      layout='fill' 
                      objectFit='cover'
                      className='transition-all duration-500 hover:scale-105'
                    />
                  </div>
                  {galleryImages.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                        {galleryImages.map((img, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative h-[80px] md:h-[100px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImage === img ? 'border-blue opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                        >
                            <Image src={img} alt={`Thumbnail ${idx}`} layout='fill' objectFit='cover'/>
                        </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Room Info */}
                <div className="w-full lg:w-[45%] flex flex-col gap-6">
                    <div>
                      <h1 className='capitalize font-bold text-3xl md:text-4xl text-gray-900 mb-2'>{room.title}</h1>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-light_green/10 text-light_green px-3 py-1 rounded-full text-sm font-semibold">Verified</span>
                        {room.price.includes('18,000') && ( // Simple logic for premium tag execution
                             <span className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm font-semibold">Premium</span>
                        )}
                      </div>
                      <p className='text-gray-600 text-lg leading-relaxed line-clamp-4'>{room.description || "A wonderful room for your stay."}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex justify-between items-end mb-2">
                         <p className="text-gray-500">Monthly Rent</p>
                         <p className="text-3xl font-bold text-blue">{room.price}</p>
                      </div>
                      {room.semesterPrice && (
                        <div className="flex justify-between items-end mb-4 border-b border-dashed border-gray-300 pb-4">
                            <p className="text-gray-500">Semester Price (Discounted)</p>
                            <p className="text-xl font-bold text-green-600">{room.semesterPrice}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                        {room.deposit && (
                            <div className="flex justify-between">
                            <span>Deposit (Refundable)</span>
                            <span className="font-semibold">{room.deposit}</span>
                            </div>
                        )}
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
                           <div className={`w-3 h-3 rounded-full animate-pulse ${room.isAvailable !== false ? 'bg-green-500' : 'bg-red-500'}`}></div>
                           <span className={`${room.isAvailable !== false ? 'text-green-600' : 'text-red-600'} font-medium`}>
                               {room.isAvailable !== false ? 'Available Now' : 'Fully Booked'}
                           </span>
                         </div>
                      </div>

                      <button disabled={room.isAvailable === false} className='w-full disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white bg-blue hover:bg-blue/90 text-lg font-bold py-4 shadow-lg shadow-blue/20 active:scale-[0.98] transition-all duration-200' >
                          {room.isAvailable !== false ? 'Book This Room' : 'Join Waitlist'}
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
                           {room.features.map((feature, idx) => {
                               const Icon = AMENITY_ICONS[feature] || Home; // Default icon
                               return (
                                   <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100 dark:border-gray-800">
                                       <Icon className="text-blue" size={28} />
                                       <span className="text-sm font-medium text-center">{feature}</span>
                                   </div>
                               )
                           })}
                         </div>
                       </div>
                       
                       <div>
                         <h3 className="text-xl font-bold mb-3">Description</h3>
                         <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                           {room.description || "No description available for this room."}
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
                  {similarRooms.length > 0 ? similarRooms.map((similar) => (
                    <Link href={`/Room_details?id=${similar.id}`} key={similar.id} className="flex gap-4 group cursor-pointer bg-white border border-gray-100 rounded-lg p-3 hover:shadow-md transition-all duration-300">
                      <div className="relative w-[100px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={similar.image} alt={similar.title} layout='fill' objectFit='cover' className="group-hover:scale-110 transition-transform duration-500"/>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue transition-colors duration-200 line-clamp-1">{similar.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{similar.price}/month</p>
                        <span className="text-xs text-blue font-semibold group-hover:underline">View Details</span>
                      </div>
                    </Link>
                  )) : (
                      <p className="text-gray-500 text-sm">No similar rooms found.</p>
                  )}
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