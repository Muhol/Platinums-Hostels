"use client";
import AboutUs from "@/components/landing/AboutUs";
import HeroSection from "@/components/landing/HeroSection";
import Overview from "@/components/landing/Overview";
import WhyChooseUs from "@/components/landing/WhyChooseUs ";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen  w-full scroll-smooth  ">
      <section className="">
        <HeroSection/>
      </section>
      <section>
      <Overview />
      </section>
      <section className="">
      <WhyChooseUs/>
      </section>
      {/* Call to Action */}
      <section className="bg-gray-100 rounded py-[60px] w-screen">
        <div className=" flex justify-center">
          <Link href={"/Rooms&Pricing"}>
            <button className="flex gap-[20] font-bold items-center bg-blue text-white px-8 py-2 rounded-full text-lg shadow-md transition-all duration-200 active:bg-light_green active:px-10 md:hover:px-10 md:hover:bg-light_green ">
              <p> Book Your Stay Now </p><Image src={"/icons/arrow-right.svg"} alt="" height={30} width={30}/>
            </button>
          </Link>
        </div>
      </section>
      <section className="">
      <AboutUs/>
      </section>
      {/* Call to Action */}
      <section className="bg-dark_green/15 w-screen flex justify-center py-[50px]" >
        <Link href={"/Rooms&Pricing"}>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay:0.5, duration:0.8}}
            className=' self-center flex items-center gap-4 font-bold bg-blue  text-white px-[20px] py-[10px] rounded-3xl my-[10px] active:bg-light_green active:px-[30px] md:hover:px-[30px] md:hover:bg-light_green transition-all duration-300'
            >
              Book a Room Today <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25} />
            </motion.button>
        </Link>
      </section>
    </div>
  );
}
