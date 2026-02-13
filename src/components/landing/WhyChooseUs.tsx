import Image from 'next/image'
import React from 'react'

// type Props = {}

function WhyChooseUs () {
    const content = [
        // {
        //     head: "Comfortable & Fully Furnished Rooms",
        //     image: "/images/single-room-large2.jpg",
        //     desc: "Enjoy fully furnished rooms designed for relaxation and productivity. Each room comes with a study desk, perfect for students and remote workers."
        // },
        {
            head: " Clean & Well Maintained Facilities",
            image: "/images/bathroom.jpg",
            desc: "Our shared bathrooms are cleaned daily by professional cleaners, ensuring hygiene and freshness at all times."
        },
        {
            head: "High-Speed WiFi & Study Spaces",
            image: "/images/wifi.jpg",
            desc: "Stay connected with fast, reliable WiFi throughout the hostel. Need a quiet place to focus? Use our dedicated study area for maximum productivity."
        },
        {
            head: "Flexible Meal Options & Shared Kitchen",
            image: "/images/food.jpg",
            desc: "Choose our optional in-house meal plans for a hassle-free dining experience or use our fully equipped shared kitchen to prepare your own meals."
        },
        {
            head: "24/7 Security & Gated Compound",
            image: "/images/security.jpg",
            desc: "Your safety is our priority! Our hostel is secured with 24/7 CCTV surveillance, professional security personnel, and a gated compound for peace of mind."
        },
        {
            head: "Convenient Location & Transport Services",
            image: "/images/transport.jpg",
            desc: "Located in Rongai Maasai Lodge near NIBS, we are easily accessible by public transport. Plus, we offer transport services to make your commute even easier."
        },
        {
            head: "Lounge & Social Spaces",
            image: "/images/playstation.jpg",
            desc: "Unwind after a long day in our lounge area with a TV, a great place to relax and socialize with fellow residents."
        },
    ]
  return (
   
  <div className=" flex justify-center min-h-screen pt-[40px] pb-[110px] md:pt-[10px] px-6 text-black">
    {/* Container */}
    <div className="max-w-[1400px] w-full text-center flex flex-col gap-4 md:gap-12">
      
      {/* Section Title */}
      <h2 className="font-extrabold text-2xl md:text-4xl tracking-wide leading-snug">
         Why Choose <span className="text-blue">Platinum Hostels?</span>
      </h2>
  
      {/* Cards Grid */}
      <div className="flex flex-wrap items-center justify-center  gap-10 place-items-center">
        {content.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer md:min-w-[600px] md:max-w-[680px] h-auto md:min-h-[280px] p-5 rounded-xl shadow-2xl flex flex-wrap md:flex-nowrap gap-5 items-center justify-center text-center  transition-all duration-300 hover:shadow-2xl "
            // className="relative max-w-[400px] h-auto md:min-h-[320px] backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex flex-col items-cente md:justify-center text-center  transition-all duration-300 hover:shadow-2xl "
          >
              {/* <-----------<IMAGE>------------> */}
            <div className=" relative flex flex-row justify-center min-h-[240px] max-w-[300px] w-full min-w-[240px] ">
              <Image src={item.image} alt='' layout='fill' objectFit='cover' className='-z-0 rounded-lg' />
              <div className="bg-black/30 md:group-hover:flex-1 z-10 opacity-0 md:group-hover:opacity-100 transition-all duration-500 min-h-[100%] flex rounded-lg">
              </div>
            </div>
              {/* <-----------<CONTENT>------------> */}
            <div className="min-w-[50%] flex flex-col">
              <h3 className="font-bold text-xl sm:text-2xl  mb-4">{item.head}</h3>
              <p className="font-medium sm:text-lg ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>      
    </div>
  </div>



  // <-----------<PRECIOUS VERSION>--------------->

  
  )
}

export default WhyChooseUs 