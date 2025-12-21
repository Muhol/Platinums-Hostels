"use client";
import AboutUs from "@/components/landing/AboutUs";
import HeroSection from "@/components/landing/HeroSection";
import Overview from "@/components/landing/Overview";
import WhyChooseUs from "@/components/landing/WhyChooseUs ";
import Testimonials from "@/components/landing/Testimonials";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen w-full scroll-smooth relative">
      
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <Image 
          src="/images/Hostel-Image.jpg" 
          alt="Hostel Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* Optional overlay for text readability check */}
      </div>

      {/* <section className="">
        <HeroSection/>
      </section> */}

      <section className="">
        <HeroSection/>
      </section>

      {/* Spacer to show background */}
      {/* <div className="h-[50px] w-full bg-transparent"></div> */}

      <section className="w-full shadow-xl">
        <Overview />
      </section>

      {/* Spacer */}
      {/* <div className="h-[50px] w-full bg-transparent"></div> */}

      <section className="bg-white py-16 w-full shadow-xl">
        <WhyChooseUs/>
      </section>

      {/* Spacer */}
      <div className="h-6 bg-white/5 w-full bg-transparent"></div>

      {/* Call to Action 1 */}
      <section className="bg-gray-700 backdrop-blur-m py-[60px] w-full shadow-2xl transition-all ">
        <div className=" flex justify-center">
          <Link href={"/Rooms&Pricing"}>
            <button className="flex gap-[20] font-bold items-center bg-blue text-white px-8 py-2 rounded-full text-lg shadow-md transition-all duration-200 active:bg-light_green active:px-10 md:hover:px-10 md:hover:bg-light_green ">
              <p> Book Your Stay Now </p><Image src={"/icons/arrow-right.svg"} alt="" height={30} width={30}/>
            </button>
          </Link>
        </div>
      </section>

      {/* Spacer */}
      {/* <div className="h-[50px] w-full bg-transparent"></div> */}

      <section className="bg-white/5 py-6 w-full shadow-xl">
        <AboutUs/>
      </section>
      
      {/* Testimonials */}
      <section className="w-full shadow-xl">
        <Testimonials />
      </section>

      {/* Call to Action */}
      <section className="bg-white/90 backdrop-blur-m w-full flex justify-center py-[80px] shadow-2xl transition-all" >
        <div className="flex flex-col items-center gap-6 text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800">Ready to Book Your Room?</h2>
          <p className="text-gray-600 max-w-lg mb-4">Don&apos;t miss out on the best student accommodation in Ongata Rongai. Spaces fill up fast!</p>
          <Link href={"/Rooms&Pricing"}>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{delay:0.5, duration:0.8}}
              className='flex items-center gap-4 font-bold bg-blue text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-light_green hover:scale-105 active:scale-95 transition-all duration-300'
              >
                Book a Room Today <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25} />
              </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
