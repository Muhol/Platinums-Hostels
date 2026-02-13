import { MetadataRoute } from 'next'
import { RoomService } from '@/services/roomService'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://platinumhostels.com' // Replace with actual domain

    // Static routes
    const staticRoutes = [
        '',
        '/Rooms&Pricing',
        '/contact-us',
        '/other-services',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic room routes
    const rooms = await RoomService.getRooms()
    const roomRoutes = rooms.map((room) => ({
        url: `${baseUrl}/rooms/${room.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...roomRoutes]
}
