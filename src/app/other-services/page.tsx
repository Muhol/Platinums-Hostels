import React from 'react'
import { Metadata } from 'next'
import OtherServicesContent from '../../components/services/OtherServicesContent'

export const metadata: Metadata = {
  title: "Our Services | Laundry, Meals & Transport for Students",
  description: "Beyond housing, we offer laundry services, nutritious meal plans, and reliable transport to nearby campuses for our residents in Ongata Rongai.",
  alternates: {
    canonical: "/other-services",
  },
}

export default function OtherServicesPage() {
  return (
    <OtherServicesContent />
  )
}