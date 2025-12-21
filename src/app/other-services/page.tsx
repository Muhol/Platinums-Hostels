"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Shirt, UtensilsCrossed, Bus, BookOpen, Shield, Wrench } from 'lucide-react'

function OtherServicesPage() {
  const services = [
    {
      icon: <Shirt size={40} />,
      title: "Laundry Services",
      description: "Professional laundry and dry cleaning services available. We ensure your clothes are cleaned and returned fresh and neatly folded.",
      pricing: "From Ksh 500/week",
      features: ["Wash & Fold", "Ironing Available", "Same Day Service", "Pickup & Delivery"]
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: "Meal Plans",
      description: "Nutritious and delicious meals prepared daily. Choose from various meal plan options to suit your dietary needs and budget.",
      pricing: "From Ksh 4,000/month",
      features: ["Breakfast, Lunch & Dinner", "Vegetarian Options", "Customizable Plans", "Hygienic Kitchen"]
    },
    {
      icon: <Bus size={40} />,
      title: "Transport Services",
      description: "Convenient transport to and from your campus. Safe, reliable, and affordable shuttle services for students.",
      pricing: "From Ksh 2,000/month",
      features: ["Daily Shuttles", "Multiple Routes", "Safe & Reliable", "Flexible Schedules"]
    },
    {
      icon: <BookOpen size={40} />,
      title: "Study Areas",
      description: "Quiet, well-lit study spaces with comfortable seating and high-speed internet. Perfect for focused study sessions.",
      pricing: "Free for Residents",
      features: ["24/7 Access", "High-Speed WiFi", "Quiet Environment", "Comfortable Seating"]
    },
    {
      icon: <Shield size={40} />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and trained security personnel to ensure your safety and peace of mind.",
      pricing: "Included",
      features: ["CCTV Surveillance", "Security Guards", "Secure Entry", "Emergency Response"]
    },
    {
      icon: <Wrench size={40} />,
      title: "Maintenance Services",
      description: "Quick response to any maintenance issues. Our dedicated team ensures all facilities are in top condition.",
      pricing: "Included",
      features: ["24/7 Support", "Quick Response", "Professional Team", "Regular Inspections"]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen text-black pt-[110px] flex flex-col items-center bg-gradient-to-br from-gray-50 to-gray-100'
    >
      <div className="max-w-[1200px] w-full flex flex-col shadow-xl pb-[80px] px-[20px] gap-[40px]">
        {/* Breadcrumb */}
        <div className="flex gap-[10px] items-center pt-[20px]">
          <Link className='hover:text-blue transition-all duration-200' href={"/"}>Home</Link>
          <Image src={"/icons/arrow-right-black.svg"} alt='arrow' width={20} height={20}/>
          <p className='text-blue font-semibold'>Other Services</p>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center py-[20px]"
        >
          <h1 className='text-[32px] md:text-[42px] font-bold text-gray-900 mb-4'>Our Services</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-[800px] mx-auto'>
            Beyond comfortable accommodation, we offer a range of services designed to make your stay convenient, 
            productive, and enjoyable. Everything you need, all in one place.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] py-[20px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * (index + 3), duration: 0.6 }}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Icon Header */}
              <div className="bg-gradient-to-br from-blue to-light_green p-6 flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className='text-xl font-bold text-gray-900'>{service.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{service.description}</p>
                
                {/* Pricing */}
                <div className="bg-blue/5 p-3 rounded-lg">
                  <p className='text-blue font-bold text-lg'>{service.pricing}</p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2">
                  <p className='font-semibold text-sm text-gray-700'>Features:</p>
                  <ul className='space-y-1'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className="w-1.5 h-1.5 bg-light_green rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-r from-blue to-light_green rounded-2xl p-8 md:p-12 text-center text-white mt-[20px]"
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>Ready to Experience Premium Hostel Living?</h2>
          <p className='text-lg mb-6 opacity-90'>
            Book your room today and enjoy access to all our amazing services and amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Rooms&Pricing">
              <button className='bg-white text-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0'>
                View Rooms & Pricing
                <Image src={"/icons/arrow-right-black.svg"} alt="" width={20} height={20} />
              </button>
            </Link>
            <Link href="/contact-us">
              <button className='bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue transition-all duration-300 mx-auto sm:mx-0'>
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
        >
          <h3 className='text-2xl font-bold mb-4 text-gray-900'>Why Choose Our Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className='text-2xl'>✓</span>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Affordable Pricing</h4>
                <p className='text-gray-600 text-sm'>Competitive rates designed with students&apos; budgets in mind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className='text-2xl'>✓</span>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Quality Service</h4>
                <p className='text-gray-600 text-sm'>Professional staff committed to excellence in every service.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className='text-2xl'>✓</span>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Convenience</h4>
                <p className='text-gray-600 text-sm'>Everything you need in one location, saving you time and effort.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className='text-2xl'>✓</span>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Flexibility</h4>
                <p className='text-gray-600 text-sm'>Customizable service packages to match your specific needs.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OtherServicesPage