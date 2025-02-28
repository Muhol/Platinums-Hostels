import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type Props = {}

function Footer() {
  return (
    <div className='w-screen pt-[60px] flex flex-col bg-gray-900 text-white items-center gap-[40px] '>
    {/* // <div className='w-screen py-[60px] flex flex-col bg-gradient-to-b from-blue to-black/50 text-white items-center gap-[40px] '> */}
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row md:flex-wrap lg:flex-nowrap gap-[30px] ">
            <div className=" py-[50px]  flex flex-col justify-center md:items-center lg:items-start gap-[20px] min-w-[360px] px-[30px] ">
                <h1 className=' text-xl '>Contact Us</h1>
                <p className='flex gap-[20px] items-center text-white' > <Image src={"/icons/location-light.svg"} alt='' height={20} width={20}/> <span className='hidden md:block' > Location:</span> <a className='text-blue hover:text-orange-300' href="https://www.google.com/maps/place/KWOSHCOM/@-1.3921042,36.7711031,20.05z/data=!4m6!3m5!1s0x182f05004976207b:0x1933d8d75b758f57!8m2!3d-1.3921715!4d36.7710521!16s%2Fg%2F11wb1dtjcn!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D">  Maasai Lodge Road, Ongata Rongai</a> </p>
                <p className='flex gap-[20px] items-center text-white' ><Image src={"/icons/call-light.svg"} alt='' height={20} width={20}/><span className='hidden md:block' > Phone: </span>+254 722 123 456</p>
                <p className='flex gap-[20px] items-center text-white' >
                    <Image src={"/icons/mail-light.svg"} alt='' height={20} width={20}/>
                    Email: <a href="#" className='text-blue hover:text-orange-300'>info@example.com</a>
                </p>
                <p className='text-white' >Office Hours: Mon-Sat (8 AM - 6 PM)</p>
            </div>
            <div className=" py-[50px] flex flex-col items-conter justify-center gap-[20px] border-y lg:border-y-0 lg:border-x border-white px-[30px]">
                <h1 className=' text-xl place-self-center' >Quick Links</h1>
                <ul className='flex flex-col md:items-center gap-[20px] md:min-w-[400px]' >
                    <li><Link className=' text-white hover:text-orange-300' href="/">Home</Link></li>
                    <li><Link className=' text-white hover:text-orange-300' href="/Rooms&Pricing">Rooms & Pricing</Link></li>
                    <li><Link className=' text-white hover:text-orange-300' href="/Booking">Booking</Link></li>
                    <li><Link className=' text-white hover:text-orange-300' href="/contact-us">Contact Us</Link></li>
                    <li><Link className=' text-white hover:text-orange-300' href="/FAQs">FAQs</Link></li>
                    <li><Link className=' text-white hover:text-orange-300' href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className=" py-[50px]  flex flex-col md:items-center lg:items-start gap-[20px] px-[30px]">
                <h1 className=' text-xl '>Follow Us</h1>
                <div className="flex flex-wrap gap-[20px] md:gap-[50px] ">
                    <a href="#" className='border md:border-none hover:bg-blue transition-colors duration-300 p-[9px] rounded-3xl md:rounded-2xl ' ><Image src={"/icons/facebook-light.svg"} alt='' height={30} width={30}/></a>
                    <a href="#" className='border md:border-none hover:bg-blue transition-colors duration-300 p-[9px] rounded-3xl md:rounded-2xl ' ><Image src={"/icons/instagram-light.svg"} alt='' height={30} width={30}/></a>
                    <a href="#" className='border md:border-none hover:bg-blue transition-colors duration-300 p-[9px] rounded-3xl md:rounded-2xl ' ><Image src={"/icons/twitter-light.svg"} alt='' height={30} width={30}/></a>
                </div>
            </div>
        </div>
        <div className="w-full py-[40px] md:py-[70px] bg-gray-950 flex justify-center">
            <p className='text-gray-400'>© 2024 Platinum Hostels. All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer