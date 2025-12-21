"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Year 3, IT Student",
    image: "/images/single-room-large2.jpg", 
    content: "Living at Platinum Hostels has been the best decision for my studies. The quiet study areas and reliable WiFi make it perfect for getting work done.",
    rating: 5
  },
  {
    id: 2,
    name: "Kevin Omondi",
    role: "Year 2, Engineering",
    image: "/images/single-room-small1.jpg", 
    content: "I love the community here! The shared spaces are great for making friends, but I still have my privacy in my single room when I need it.",
    rating: 5
  },
  {
    id: 3,
    name: "Mercy Chebet",
    role: "Year 1, Business",
    image: "/images/single-room-large3.jpg",
    content: "As a freshman, safety was my biggest concern. Platinum Hostels 24/7 security makes me feel safe and secure at all times.",
    rating: 4 // Note: Changed to 4 to match data, but visually rendered 5 stars in loop logic if not careful. Logic below handles rating count.
  }
]

function Testimonials() {
  return (
    <div className="w-full py-10 md:py-16 px-4 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl">
           <div className="bg-blue/5 py-2 px-6 rounded-full inline-block mb-4">
              <span className="text-blue font-bold tracking-wider uppercase text-xs">Student Stories</span>
           </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            What Our <span className="text-blue">Residents Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="h-full"
            >
              <div className="bg-gray-50 hover:bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full flex flex-col gap-4">
                
                <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <Image 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                        <p className="text-blue text-xs font-semibold">{testimonial.role}</p>
                    </div>
                </div>

                <div className="flex-1">
                     <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} 
                          />
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10 italic">
                        &quot;{testimonial.content}&quot;
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
