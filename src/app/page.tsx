"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs ";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen  w-full scroll-smooth  ">
      <section className="">
        <HeroSection/>
      </section>
      <section className="">
      <WhyChooseUs/>
      </section>
      {/* Call to Action */}
      <section className="bg-gray-400 py-[100px] w-screen">
        <div className=" flex justify-center">
          <button className="flex gap-[20] items-center hover:bg-light_green bg-blue text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition-all duration-200 ">
            <p> Book Your Stay Now </p><Image src={"/icons/arrow-right.svg"} alt="" height={30} width={30}/>
          </button>
        </div>
      </section>
      <section className="">
      <AboutUs/>
      </section>
      {/* Call to Action */}
      <section className="bg-gray-950 w-screen flex justify-center py-[100px]" >
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:0.5, duration:0.8}}
        className=' self-center flex items-center gap-4 bg-blue hover:bg-light_green transition-all duration-300 text-white px-[20px] py-[10px] rounded-3xl my-[10px] '
        >
          Book a Room Today <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25} />
        </motion.button>
      </section>
    </div>
  );
}
