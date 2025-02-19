import React from 'react'

// type Props = {}

function WhyChooseUs () {
    const content = [
        {
            head: "Comfortable & Fully Furnished Rooms",
            desc: "Enjoy fully furnished rooms designed for relaxation and productivity. Each room comes with a study desk, perfect for students and remote workers."
        },
        {
            head: " Clean & Well-Maintained Facilities",
            desc: "Our shared bathrooms are cleaned daily by professional cleaners, ensuring hygiene and freshness at all times."
        },
        {
            head: "High-Speed WiFi & Study Spaces",
            desc: "Stay connected with fast, reliable WiFi throughout the hostel. Need a quiet place to focus? Use our dedicated study area for maximum productivity."
        },
        {
            head: "Flexible Meal Options & Shared Kitchen",
            desc: "Choose our optional in-house meal plans for a hassle-free dining experience or use our fully equipped shared kitchen to prepare your own meals."
        },
        {
            head: "24/7 Security & Gated Compound",
            desc: "Your safety is our priority! Our hostel is secured with 24/7 CCTV surveillance, professional security personnel, and a gated compound for peace of mind."
        },
        {
            head: "Convenient Location & Transport Services",
            desc: "Located in Rongai Maasai Lodge near NIBS, we are easily accessible by public transport. Plus, we offer transport services to make your commute even easier."
        },
        {
            head: "Lounge & Social Spaces",
            desc: "Unwind after a long day in our lounge area with a TV, a great place to relax and socialize with fellow residents."
        },
    ]
  return (
   
    <div className=" flex justify-center  min-h-screen py-[110px] md:py-[60px] px-6 bg-slate-100 text-black">
    {/* Container */}
    <div className="max-w-[1400px] w-full text-center flex flex-col gap-12">
      
      {/* Section Title */}
      <h1 className="font-extrabold text-4xl md:text-5xl tracking-wide leading-snug">
         Why Choose <span className="text-blue">Platinum Hostels?</span>
      </h1>
  
      {/* Cards Grid */}
      <div className="flex flex-wrap items-center justify-center  gap-10 place-items-center">
        {content.map((item, index) => (
          <div
            key={index}
            className="max-w-[400px] h-auto md:min-h-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex flex-col items-center md:justify-center text-center p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h1 className="font-bold text-2xl text-blue mb-4">{item.head}</h1>
            <p className="font-medium text-lg text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>      
    </div>
  </div>
  

  )
}

export default WhyChooseUs 