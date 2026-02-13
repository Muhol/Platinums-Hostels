import { RoomService } from "../../../services/roomService";
import { Metadata } from "next";
import RoomDetailsContent from "./RoomDetailsContent";
import JsonLd from "../../../components/common/JsonLd";
import Link from "next/link";

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const id = (await params).id
  const room = await RoomService.getRoomById(id)

  if (!room) {
    return {
      title: 'Room Not Found | Platinum Hostels',
      description: 'The requested room could not be found.'
    }
  }

  const title = `${room.title} | Premium Hostel in Ongata Rongai`
  const description = room.description?.slice(0, 160) || `Affordable student room: ${room.title} at Platinum Hostels. Secure, comfortable, and fully furnished.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [room.image, ...(room.images || [])],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [room.image],
    },
    alternates: {
      canonical: `/rooms/${id}`,
    }
  }
}

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const room = await RoomService.getRoomById(id)

  if (!room) {
    return (
      <div className="min-h-screen pt-[110px] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-2xl font-bold">Room Not Found</h1>
        <p className="text-gray-600">The room you are looking for does not exist or has been removed.</p>
        <Link href="/Rooms&Pricing" className="bg-blue text-white px-6 py-2 rounded-lg font-bold">Back to Rooms</Link>
      </div>
    )
  }

  const allRooms = await RoomService.getRooms();
  const similarRooms = allRooms
    .filter(r => r.id !== id)
    .slice(0, 3);

  const baseUrl = 'https://platinumhostels.com'

  return (
    <>
      <JsonLd 
        data={{
          "@context": "https://schema.org/",
          "@type": "Accommodation",
          "name": room.title,
          "image": [
            room.image,
            ...(room.images || [])
          ],
          "description": room.description,
          "sku": room.id,
          "brand": {
            "@type": "Brand",
            "name": "Platinum Hostels"
          },
          "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/rooms/${id}`,
            "priceCurrency": "KES",
            "price": room.price.replace(/[^0-9]/g, ''),
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Platinum Hostels"
            }
          }
        }}
      />
      <RoomDetailsContent room={room} similarRooms={similarRooms} />
    </>
  );
}