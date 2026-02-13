import AboutUs from "../components/landing/AboutUs";
import HeroSection from "../components/landing/HeroSection";
import Overview from "../components/landing/Overview";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import { Metadata } from 'next';

import Image from "next/image";
import Link from "next/link";
import HomeContent from "../components/landing/HomeContent";

export const metadata: Metadata = {
  title: "Platinum Hostels | Premium Student Accommodation Ongata Rongai",
  description: "Secure, affordable, and comfortable student hostels in Ongata Rongai near Maasai Lodge. WiFi, meal plans, and 24/7 security. Book your stay today!",
  alternates: {
    canonical: "/",
  },
};

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

      <section className="">
        <HeroSection />
      </section>

      <section className="w-full shadow-xl">
        <Overview />
      </section>

      <section className="bg-white py-16 w-full shadow-xl">
        <WhyChooseUs />
      </section>

      {/* Spacer */}
      {/* <div className="h-6 bg-white/5 w-full bg-transparent"></div> */}

      {/* Call to Action 1 */}
      <section className="bg-black/80 py-[60px] w-full shadow-2xl transition-all ">
        <div className=" flex justify-center">
          <Link href={"/Rooms&Pricing"}>
            <button className="flex gap-[20] font-bold items-center bg-blue text-white px-8 py-2 rounded-full text-lg shadow-md transition-all duration-200 active:bg-light_green active:px-10 md:hover:px-10 md:hover:bg-light_green ">
              <p> Book Your Stay Now </p><Image src={"/icons/arrow-right.svg"} alt="" height={30} width={30} />
            </button>
          </Link>
        </div>
      </section>


      <section className="bg-white/5 py- w-full shadow-xl">
        <AboutUs />
      </section>

      <div className="h-6 bg-black/30 w-full "></div>

      {/* Testimonials */}
      <section className="w-full shadow-xl">
        <Testimonials />
      </section>

      <HomeContent />
    </div>
  );
}
