"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
// import { Grechen_Fuemen} from "next/font/google";

// const roboto = Grechen_Fuemen({subsets:['latin'], weight:['400']})


// type Props = {}

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  
  if(isScrolled){
    console.log("reached");
  }
  // Track Scroll for Navbar Transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const isHome = pathname == "/";
  // console.log('pathname', pathname)
  // console.log(isHome)

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed ${mobileMenu ? "md:fixed":"md:absolute"} flex justify-center  top-[0] font-semibold  w-screen place-self-center z-50 h-[80px] md:h-[90px] transition-all duration-300 px-[30px] md:px-[50px] lg:px-[100px] xl:px-[170px]  ${
      // className={`fixed top-[0] md:absolute w-screen md:w-[calc(100vw-20px)] md:rounded-lg place-self-center md:mx-[10px] z-50  md:top-[10px] h-[80px] md:h-[100px] transition-all duration-300 px-[30px] md:px-[50px] lg:px-[100px] xl:px-[170px]  ${
        isHome
          ? ` lg:backdrop-blur-md ${isScrolled ? "bg-white md:fixed" : "md:absolute" } bg-white md:bg-black/15 shadow  md:shadow-lg  text-white md:rounded`
          // ? `${mobileMenu? "backdrop-blur-none " :"backdrop-blur-lg " }${isScrolled && "bg-white/0"} bg- md:bg-black/15 shadow  md:shadow-lg md:w-[calc(100vw-20px)] md:mx-[10px] md:top-[10px] text-white md:rounded-lg`
          : ` shadow  md:shadow-xl bg-white  border-gray-800 text-black`
      } flex items-center  px-6 md:px-10 lg:px-16 xl:px-24`}
    >
      {/* Logo */}
      <Link className={` md:flex-1 `} href={"/"}>
        <div className=" flex md:flex-1 ">
          <Image
            className={`${isHome &&`lg:hidden ${isScrolled ? "block":"block"}`} `}
            src="/images/logo-removebg.png"
            alt="Platinum Hostels Logo"
            width={80}
            height={80}
            />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden lg:flex min-w-[700px] flex-1 items-center gap-8">
        <ul className="flex w-full gap- justify-between items-center  font-normal">
          <li className='flex justify-center min-w-[200px]'>
            <button className={`flex gap-3 justify-center items-center px-6 py-[5px] mx-3 ${isHome ? "bg-blue hover:bg-light_green/80" : "bg-blue hover:bg-blue/80" }  hover:px-7  transition-all duration-300 text-white rounded-2xl shadow-md`}>
              Book Now <Image src={"/icons/arrow-right.svg"} alt="" width={25} height={25}/>
            </button>
          </li>
          <li 
          className={` ${pathname=="/" && "text-blue font-extrabold border-b-2 border-blue"} flex justify-center text-center  h-[30px] items-center  hover:text-blue transition-all duration-150`}
          >
            <Link href="/" >Home</Link>
          </li>
          <li 
          className={` ${pathname=="/Rooms&Pricing" && "text-blue font-extrabold border-b-2 border-blue "} flex justify-center text-center  h-[30px] items-center  hover:text-blue transition-all duration-150`}
          >
            <Link href="/Rooms&Pricing" >Rooms & Pricing</Link>
          </li>
          {/* <li className=" flex justify-center text-center  h-[30px] items-center flex-1 hover:text-blue transition-all duration-150">
            <Link href="#">Booking</Link>
          </li> */}
          <li 
          className={` ${pathname=="/contact-us" && "text-blue font-extrabold border-b-2 border-blue "} flex justify-center text-center  h-[30px] items-center  hover:text-blue transition-all duration-150`}
          >
            <Link href="/contact-us" >Contact Us</Link>
          </li>
          <li 
          className={` ${pathname=="/other-services" && "text-blue font-extrabold border-b-2 border-blue "} flex justify-center text-center  h-[30px] items-center  hover:text-blue transition-all duration-150`}
          >
            <Link href="/other-services" >Other Services</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className=" top-[20px] sm:top-[30px] right-[30px] absolute z-10 lg:hidden flex  place-self-end ">
        <button className='rounded p-1' onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <X size={30} 
            className={`${mobileMenu && `text-black`}`} 
            />
            ) : (
              <Menu size={30} 
              className={`${isScrolled && `text-black`} text-black`} 
              />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {mobileMenu && ( */}
        <motion.div
          // initial={{  opacity: 0 }}
          // animate={{  opacity: 1 }}
          // exit={{ y: 20, opacity: 0 }}
          // className=" fixed -z-10 top-0 left-0 w-full h-screen bg-white/60 backdrop-blur-xl flex flex-col items-center py-[120px] gap-6"
          className={`lg:hidden fixed -z-10 top-0 ${mobileMenu ? "right-0" : "-right-full" } w-[calc(100%)] h-screen text-black bg-white/25 backdrop-blur-xl flex flex-col items-center px-[50px] py-[120px] gap-6 transition-all duration-300`}
        >
          <Link onClick={()=>setMobileMenu(false)} href="/" className=" text-lg active:text-blue md:hover:text-green-400">
            Home
          </Link>
          <Link onClick={()=>setMobileMenu(false)} href="/Rooms&Pricing" className=" text-lg active:text-blue md:hover:text-green-400">
            Rooms & Pricing
          </Link>
          {/* <Link onClick={()=>setMobileMenu(false)} href="#" className=" text-lg active:text-blue md:hover:text-green-400">
            Booking
          </Link> */}
          <Link onClick={()=>setMobileMenu(false)} href="/contact-us" className=" text-lg active:text-blue md:hover:text-green-400">
            Contact Us
          </Link>
          <Link onClick={()=>setMobileMenu(false)} href="/contact-us" className=" text-lg active:text-blue md:hover:text-green-400">
            Other Services
          </Link>
          <button onClick={()=>setMobileMenu(false)} className="px-6 py-2 w-[200px] bg-light_green hover:bg-blue-500 transition-all duration-200 text-white rounded-full shadow-md">
            Book Now
          </button>
        </motion.div>
      {/* )} */}
    </motion.div>
  )
}

export default Header