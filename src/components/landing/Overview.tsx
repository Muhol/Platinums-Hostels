import React from 'react'

// type Props = {}

// function Overview({}: Props) {
function Overview() {
  return (
    <div className='w-full py-[40px] pb-[40px] lg:py-[60px] flex justify-center bg-gray-100 md:bg-gray-100 px-3'>
        <div className="max-w-[890px] w-full bg-red-40 flex flex-col gap-2 items-center">
            {/* <h1 className='font-bold text-3xl ' >Overview</h1> */}
            <span className='hidden md:block font-bold text-3xl ' >Overview</span> 
            <span className='md:hidden font-bold text-3xl ' >Welcome</span> 
            <p className='text-center'>Platinum Hostels offers a secure, comfortable, and student-friendly living space designed to meet 
               your needs. Nestled in the heart of Rongai Maasai Lodge near NIBS, our hostel provides the perfect 
               balance of privacy, community, and convenience. Whether you're a student or a working professional, 
               we ensure a stress-free stay with fully furnished rooms, high-speed WiFi, study areas, and 24/7 
               security.
            </p>
            <p className='text-center'>
            With affordable pricing, flexible payment plans, and a vibrant atmosphere, Platinum Hostels is
            the ideal place to focus on your goals while enjoying a great living experience.
            </p>
        </div>
    </div>
  )
}

export default Overview