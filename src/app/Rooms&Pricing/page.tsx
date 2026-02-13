import React from 'react'
import { RoomService } from '../../services/roomService'
import { Metadata } from 'next'
import RoomsContent from '../../components/rooms/RoomsContent'

export const metadata: Metadata = {
  title: "Rooms & Pricing | Affordable Student Hostels Ongata Rongai",
  description: "Browse our range of affordable student rooms. From single rooms to shared options, find the perfect stay starting from Ksh 10,000/month.",
  alternates: {
    canonical: "/Rooms&Pricing",
  },
}

export default async function Rooms() {
  const rooms = await RoomService.getRooms();

  return (
    <RoomsContent rooms={rooms} />
  )
}