"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
// import { Grechen_Fuemen} from "next/font/google";

// const roboto = Grechen_Fuemen({subsets:['latin'], weight:['400']})


// type Props = {}

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Track Scroll for Navbar Transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-[calc(100vw-30px)] rounded-lg place-self-center mx-[10px] z-50 fixed top-[10px] h-[100px] transition-all duration-300 px-[30px] md:px-[50px] lg:px-[100px] xl:px-[170px]  ${
        isScrolled
          ? "backdrop-blur-md bg-black/60 shadow-lg"
          : "backdrop-blur-md bg-black/40 "
      } flex items-center px-6 md:px-10 lg:px-16 xl:px-24`}
    >
      {/* Logo */}
      <div className="  flex-1 ">
        <Image
          className="mix-blend-multiply"
          src="/images/logo-removebg.png"
          alt="Platinum Hostels Logo"
          width={80}
          height={80}
        />
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex min-w-[700px] flex-1 items-center gap-8">
        <ul className="flex w-full gap- justify-between items-center text-white font-medium">
          <li>
            <button className="flex gap-3 justify-center items-center px-6 py-2 mx-3 bg-light_green hover:bg-blue transition-all duration-200 text-white rounded-full shadow-md">
              Book Now <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25}/>
            </button>
          </li>
          <li className=" flex justify-center text-center border-l h-[30px] items-center flex-1 hover:text-blue transition-all duration-150">
            <Link href="#">Home</Link>
          </li>
          <li className=" flex justify-center text-center border-l h-[30px] items-center flex-1 hover:text-blue transition-all duration-150">
            <Link href="#">Rooms & Pricing</Link>
          </li>
          {/* <li className=" flex justify-center text-center border-l h-[30px] items-center flex-1 hover:text-blue transition-all duration-150">
            <Link href="#">Booking</Link>
          </li> */}
          <li className=" flex justify-center text-center border-l h-[30px] items-center flex-1 hover:text-blue transition-all duration-150">
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex flex-1 justify-end ">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <X size={30} className="text-white" />
          ) : (
            <Menu size={30} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur flex flex-col items-center py-6 gap-6"
        >
          <Link href="#" className="text-white text-lg hover:text-green-400">
            Home
          </Link>
          <Link href="#" className="text-white text-lg hover:text-green-400">
            Rooms & Pricing
          </Link>
          {/* <Link href="#" className="text-white text-lg hover:text-green-400">
            Booking
          </Link> */}
          <Link href="#" className="text-white text-lg hover:text-green-400">
            Contact Us
          </Link>
          <button className="px-6 py-2 bg-green-600 hover:bg-blue-500 transition-all duration-200 text-white rounded-full shadow-md">
            Book Now
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Header