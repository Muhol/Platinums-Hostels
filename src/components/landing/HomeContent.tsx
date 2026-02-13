"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HomeContent() {
    return (
        <section className="bg-white/90 backdrop-blur-m w-full flex justify-center py-[80px] shadow-2xl transition-all" >
            <div className="flex flex-col items-center gap-6 text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800">Ready to Book Your Room?</h2>
                <p className="text-gray-600 max-w-lg mb-4">Don&apos;t miss out on the best student accommodation in Ongata Rongai. Spaces fill up fast!</p>
                <Link href={"/Rooms&Pricing"}>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className='flex items-center gap-4 font-bold bg-blue text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-light_green hover:scale-105 active:scale-95 transition-all duration-300'
                    >
                        Book a Room Today <Image src={"/icons/arrow-right.svg"} alt="Arrow Right" width={25} height={25} />
                    </motion.button>
                </Link>
            </div>
        </section>
    )
}
