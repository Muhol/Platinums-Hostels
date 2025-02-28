
"use client";
import { motion } from "framer-motion";
import React from 'react'

// type Props = {}

function AboutUs() {
  return (


    <div className="flex lg:min-h-fit flex-col items-center  bg-gray-50  font-semibold text-black py-[40px] md:py-[80px] px-6">
      {/* <----------------<GRADIENT STYLE>----------------> */}
    {/* <div className="flex lg:min-h-screen flex-col items-center  bg-blue/30 bg-gradient-to-bl from-blue/30 to-dark_green/50 font-semibold text-gray-800 py-[40px] md:py-[60px] px-6"> */}
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1400px] w-full flex flex-col gap-16 md:gap-6"
      >
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:max-h-screen items-center "
        >
          <p className="text-3xl md:text-4xl font-extrabold text-center md:text-left">
            About <span className="text-blue">Platinum Hostels</span>
          </p>
          <div className="max-w-[950px] text-lg leading-relaxed space-y-6">
            <p className="text-center">
              At <span className="text-blue font-semibold">Platinum Hostels</span>, we understand that where you live plays a crucial role in your comfort, productivity, and overall well-being. That’s why we have designed a living space that combines{" "}
              <span className="text-blue font-medium">convenience, security, and a strong sense of community</span>.
            </p>
            <p className="text-center">
              Located in <span className="text-blue">Rongai Maasai Lodge near NIBS</span>, our hostel provides students, working professionals, and travelers with a home that is more than just a place to sleep. We offer a{" "}
              <span className="font-semibold">modern, fully furnished, and well-maintained environment</span> where residents can focus on their studies, work remotely, or relax without worrying about basic necessities.
            </p>
          </div>
        </motion.div>

        {/* Animated Feature List */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="  bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3 text-blue">✨ What We Offer:</h2>
          <ul className="space-y-3 ">
            {[
              "Spacious, fully furnished rooms with study desks",
              "Clean, well-maintained shared bathrooms (cleaned daily)",
              "Reliable high-speed WiFi for uninterrupted work and entertainment",
              "A common study area for focused learning and collaboration",
              "Secure, gated compound with 24/7 CCTV monitoring",
              "Flexible meal plans and a shared kitchen",
              "Access to nearby shops, supermarkets, ATMs, and medical services",
            ].map((item, index) => (
              <motion.li
                key={index}
                // initial={{ opacity: 0, x: -20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ delay: 0.2 * index, duration: 0.6 }}
                // viewport={{ once: true }}
                className="flex items-center gap-2 transition-all duration-300"
              >
                <span className="text-blue">✔</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 self-center items-center max-w-[750px]"
        >
          <p className="text-3xl md:text-4xl font-extrabold tracking-wide text-center md:text-left">
            Our <span className="text-blue">Mission</span>
          </p>
          <div className="text-lg leading-relaxed space-y-6">
            <p className="text-center">
              At <span className="text-blue" > Platinum Hostels</span>, our mission is simple: to provide a high-quality, safe, and comfortable living experience that enhances the lives of our residents.
            </p>
            <p className="text-center">
              We strive to offer a home-like atmosphere that allows students and professionals to focus on their goals without worrying about accommodation challenges. We recognize that a great living space is more than just a room—it’s a place where you feel supported, inspired, and secure.
            </p>
          </div>
          </motion.div>
        
        </motion.div>
    </div>
  );
}


export default AboutUs