import React from 'react'
import { Metadata } from 'next'
import ContactContent from '../../components/contact/ContactContent'

export const metadata: Metadata = {
  title: "Contact Us | Platinum Hostels Ongata Rongai",
  description: "Have questions? Reach out to us for inquiries about student accommodation, room availability, and bookings in Ongata Rongai.",
  alternates: {
    canonical: "/contact-us",
  },
}

export default function ContactPage() {
  return (
    <ContactContent />
  )
}