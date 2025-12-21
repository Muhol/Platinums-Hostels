"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rooms & Pricing', href: '/Rooms&Pricing' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Other Services', href: '/other-services' },
]

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();
  const isHome = pathname == "/";

  // Track Scroll for Navbar Transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styling logic
  // If we are on Home, start transparent (glassy text), then become white on scroll
  // If not on Home, always be white
  const headerBgClass = isHome 
    ? (isScrolled ? "bg-white shadow-md" : "bg-transparent") 
    : "bg-white shadow-md";
    
  // Text color needs to be white on transparent home, black otherwise
  const textColorClass = isHome && !isScrolled ? "text-white" : "text-gray-900";
  
  // Mobile menu button color needs to adapt
  const menuIconColor = isHome && !isScrolled ? "text-white" : "text-black";

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass} ${textColorClass}`}
    >
      <div className="max-w-[1440px] h-[80px] md:h-[90px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
            <Image
              // If we are on home and transparent, show logo? Or maybe always show it.
              // Logic: Logo always visible.
              src="/images/logo-removebg.png"
              alt="Platinum Hostels Logo"
              width={70}
              height={70}
              className={`${isHome && !isScrolled ? "brightness-0 invert" : ""} transition-all duration-300`}
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {NAV_LINKS.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className={`font-medium text-[16px] hover:text-blue transition-colors relative py-1
                ${pathname === link.href ? "font-bold text-blue" : ""}
                ${pathname === link.href && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue"}
              `}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/Rooms&Pricing">
            <button className={`flex gap-2 items-center px-6 py-2.5 font-semibold rounded-full shadow transition-all duration-300
              ${isHome && !isScrolled 
                ? "bg-white/20 hover:bg-white text-white hover:text-blue backdrop-blur-sm" 
                : "bg-blue hover:bg-blue/90 text-white"
              }
            `}>
              Book Now <Image src={isHome && !isScrolled ? "/icons/arrow-right-black.svg" : "/icons/arrow-right.svg"} alt="" width={20} height={20} className={isHome && !isScrolled ? "brightness-0 invert-0" : "brightness-0 invert"}/>
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className={`focus:outline-none transition-colors ${menuIconColor}`}>
            {mobileMenu ? <X size={32} className='text-black relative z-50' /> : <Menu size={32} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6 text-xl font-medium text-gray-800">
               {NAV_LINKS.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  onClick={() => setMobileMenu(false)}
                  className={`hover:text-blue transition-colors ${pathname === link.href ? "text-blue font-bold" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link href="/Rooms&Pricing" onClick={() => setMobileMenu(false)} className="mt-4">
                <button className="px-8 py-3 bg-blue text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  )
}

export default Header