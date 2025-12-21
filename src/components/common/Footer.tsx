import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock } from 'lucide-react'

function Footer() {
  return (
    <footer className='w-full pt-16 pb-8 bg-gray-900 text-gray-300'>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Brand & Social */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden p-1">
                        <Image src="/images/logo-removebg.png" alt="Platinum Hostels" fill className="object-contain brightness-0 invert" />
                    </div>
                    <span className="text-2xl font-bold text-white tracking-wide">Platinum Hostels</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                    Premium student accommodation in Ongata Rongai. Safe, comfortable, and conducive for your academic success.
                </p>
                <div className="flex gap-4 mt-2">
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue hover:text-white transition-all duration-300 group">
                        <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 group">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 group">
                        <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                    <li>
                        <Link href="/" className="hover:text-blue hover:pl-2 transition-all duration-300 inline-block">Home</Link>
                    </li>
                    <li>
                        <Link href="/Rooms&Pricing" className="hover:text-blue hover:pl-2 transition-all duration-300 inline-block">Rooms & Pricing</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="hover:text-blue hover:pl-2 transition-all duration-300 inline-block">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/other-services" className="hover:text-blue hover:pl-2 transition-all duration-300 inline-block">Other Services</Link>
                    </li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <MapPin className="text-blue shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-white font-medium mb-1">Location</span>
                            <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors">
                                Maasai Lodge Road, Ongata Rongai
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Phone className="text-blue shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-white font-medium mb-1">Phone</span>
                            <a href="tel:+254722123456" className="hover:text-blue transition-colors">+254 722 123 456</a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Mail className="text-blue shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-white font-medium mb-1">Email</span>
                            <a href="mailto:info@platinumhostels.com" className="hover:text-blue transition-colors">info@platinumhostels.com</a>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 text-sm bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                        <Clock className="text-light_green shrink-0" size={18} />
                        <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center md:flex md:justify-between md:items-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Platinum Hostels. All Rights Reserved.</p>
                <div className="flex gap-6 justify-center mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer