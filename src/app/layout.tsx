import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import { Nunito } from "next/font/google"
// import { Josefin_Sans, Figtree , Nunito } from "next/font/google"
import Footer from "@/components/common/Footer";


// const roboto = Josefin_Sans({subsets:['latin'], weight:["100","300","400"]})
const nunito = Nunito({subsets:['latin'], weight:['300','400','600']})

export const metadata: Metadata = {
  title: "Platinum Hostels - Your Home Away from Home in Ongata Rongai",
  description: "Affordable student accommodation in Ongata Rongai. Fully furnished rooms, WiFi, meal plans, transport, and 24/7 security. From Ksh 10,000/month.",
  icons: {
    icon: "/images/logo-removebg.png", // Adjust the path to match your project
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={` ${nunito.className} overflow-x-hidden w-screen h-full `}>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
