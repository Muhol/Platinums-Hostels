import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";
import "./globals.css";
import { Nunito } from "next/font/google"


// const roboto = Josefin_Sans({subsets:['latin'], weight:["100","300","400"]})
const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://platinumhostels.com'), // Replace with actual domain
  title: {
    default: "Platinum Hostels | Premium Student Accommodation Ongata Rongai",
    template: "%s | Platinum Hostels"
  },
  description: "Affordable student accommodation in Ongata Rongai. Fully furnished rooms, WiFi, meal plans, transport, and 24/7 security near Maasai Lodge. Book your stay today!",
  keywords: ["Hostel in Ongata Rongai", "Student accommodation Rongai", "Affordable student hostel", "Secure hostel booking", "Platinum Hostels"],
  authors: [{ name: "Platinum Hostels" }],
  creator: "Platinum Hostels",
  publisher: "Platinum Hostels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://platinumhostels.com",
    siteName: "Platinum Hostels",
    title: "Platinum Hostels | Premium Student Accommodation Ongata Rongai",
    description: "Experience premium student living at Platinum Hostels. Secure, comfortable, and fully furnished rooms in Ongata Rongai.",
    images: [
      {
        url: "/images/logo-removebg.png",
        width: 800,
        height: 600,
        alt: "Platinum Hostels Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Hostels | Premium Student Accommodation",
    description: "Affordable and secure student accommodation in Ongata Rongai.",
    images: ["/images/logo-removebg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import LayoutWrapper from "@/components/common/LayoutWrapper";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <JsonLd 
          data={{
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Platinum Hostels",
            "image": "https://platinumhostels.com/images/logo-removebg.png",
            "@id": "https://platinumhostels.com",
            "url": "https://platinumhostels.com",
            "telephone": "+254722123456",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Maasai Lodge Road",
              "addressLocality": "Ongata Rongai",
              "addressRegion": "Kajiado",
              "postalCode": "00503",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.3921715,
              "longitude": 36.7688693
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          }}
        />
      </head>
      <body className={` ${nunito.className} overflow-x-hidden w-screen h-full `}>
        <AuthProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
