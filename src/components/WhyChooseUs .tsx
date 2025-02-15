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
   
    <div className="bg-gradient-to-br from-green-500 to-dark_green flex justify-center  min-h-screen py-20 px-6 text-white">
    {/* Container */}
    <div className="max-w-[1400px] w-full text-center flex flex-col gap-12">
      
      {/* Section Title */}
      <h1 className="font-extrabold text-4xl md:text-5xl tracking-wide leading-snug">
         Why Choose <span className="text-blue-400">Platinum Hostels?</span>
      </h1>
  
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] h-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex flex-col items-center text-center p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h1 className="font-bold text-2xl text-white mb-4">{item.head}</h1>
            <p className="font-medium text-lg text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
  
      {/* Call to Action */}
      <div className="mt-10">
        <button className="bg-light_green hover:bg-blue text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300 hover:scale-105">
          Book Your Stay Now
        </button>
      </div>
  
    </div>
  </div>
  

  )
}

export default WhyChooseUs 