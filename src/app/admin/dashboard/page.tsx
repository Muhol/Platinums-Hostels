"use client"
import React, { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { RoomService } from '@/services/roomService';
import { Room } from '@/types/room';
import { Plus, Trash2, LogOut, Loader2, Save, Edit, X } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';

// Available amenities matching the frontend icons
const AVAILABLE_AMENITIES = [
  "Fast WiFi",
  "Comfy Bed",
  "TV & Cable",
  "Secure Lock",
  "Study Desk",
  "Hot Shower",
  "24/7 Security",
  "Backup Power"
];

// Seed data
const SEED_DATA = [
  {
    title: "Single Room Large",
    price: "Ksh 18,000",
    image: "/images/single-room-large2.jpg",
    slug: "single-room-large",
    features: ["Fast WiFi", "Study Desk", "Comfy Bed", "Secure Lock", "Hot Shower", "24/7 Security"],
    description: "Experience the ultimate in student living comfort with our Single Room Large. This spacious unit is designed for students who value their privacy and need ample space for both study and relaxation. It features a large, comfortable bed, a dedicated study area with a modern desk and ergonomic chair, and plenty of storage for all your personal belongings. Large windows ensure the room is bathed in natural light during the day, creating a warm and inviting atmosphere. With high-speed WiFi included, you can stay connected with family and handle all your academic research without interruption. Secure and serene, this is your perfect home away from home.",
    semesterPrice: "Ksh 68,000",
    deposit: "Ksh 5,000",
    isAvailable: true
  },
  {
    title: "Single Room Standard",
    price: "Ksh 15,000",
    image: "/images/single-room-small1.jpg",
    slug: "single-room-standard",
    features: ["Fast WiFi", "Comfy Bed", "Study Desk", "Secure Lock"],
    description: "Our Single Room Standard offers a perfect blend of affordability and comfort. Ideal for the budget-conscious student who doesn't want to compromise on privacy, this compact room comes fully furnished with everything you need. You get a cozy bed, a functional study desk, and secure storage space. The room is efficiently designed to maximize utility while maintaining a cozy, homelike feel. Located in a quiet section of the hostel, it provides an excellent environment for focused study sessions. Enjoy all the essential amenities, including our reliable high-speed internet and hot showers, at a price that fits your budget.",
    semesterPrice: "Ksh 58,000",
    deposit: "Ksh 5,000",
    isAvailable: true
  },
  {
    title: "Double Room Sharing",
    price: "Ksh 10,000",
    image: "/images/single-room-large3.jpg",
    slug: "double-room-sharing",
    features: ["Fast WiFi", "Comfy Bed", "Study Desk", "Hot Shower", "Shared"],
    description: "Make lifelong friends in our Double Room Sharing units. These spacious rooms are designed to comfortably accommodate two students, offering a balance of companionship and personal space. Each student gets their own comfortable bed and a dedicated study desk, ensuring you have your own zone for academic work. The room is large enough so that you never feel cramped, with shared storage solutions that are both ample and secure. It's a fantastic way to save on rent while enjoying a vibrant social life. Perfect for friends wanting to live together or for making a new best friend/roommate.",
    semesterPrice: "Ksh 38,000",
    deposit: "Ksh 5,000",
    isAvailable: true
  },
  {
    title: "Tripple Room Sharing",
    price: "Ksh 8,000",
    image: "/images/single-room-large1.jpg",
    slug: "triple-room-sharing",
    features: ["Fast WiFi", "Comfy Bed", "Hot Shower", "24/7 Security"],
    description: "Join a vibrant community with our Triple Room Sharing option. This large, airy room is set up for three students and is one of our most popular choices for its affordability and social atmosphere. Despite sharing, the layout ensures that everyone has their own designated sleeping and study area. It's an economical choice that doesn't skimp on the essentials—you still get access to all the hostel's premium amenities like high-speed internet, security, and backup power. Ideally suited for sociable students who enjoy a lively environment and want to make their university years memorable.",
    semesterPrice: "Ksh 30,000",
    deposit: "Ksh 5,000",
    isAvailable: true
  },
  {
    title: "Executive Suite",
    price: "Ksh 25,000",
    image: "/images/single-room-large2.jpg",
    slug: "executive-suite",
    features: ["Fast WiFi", "Comfy Bed", "TV & Cable", "Hot Shower", "Backup Power", "Study Desk", "Secure Lock"],
    description: "For those who demand the best, our Executive Suite offers a premium living experience akin to a boutique hotel. This top-tier room features an en-suite bathroom, upgraded furnishings, and extra amenities like a personal TV with cable channels. The room is exceptionally spacious, featuring a queen-sized bed and a lounge area. It is perfect for senior students or anyone who spends a lot of time in their room and wants maximum comfort and privacy. With priority maintenance and the finest finishings, the Executive Suite is the jewel of Platinum Hostels.",
    semesterPrice: "Ksh 95,000",
    deposit: "Ksh 10,000",
    isAvailable: true
  },
  {
    title: "Quad Room Sharing",
    price: "Ksh 7,000",
    image: "/images/single-room-small1.jpg",
    slug: "quad-room-sharing",
    features: ["Fast WiFi", "Comfy Bed", "24/7 Security", "Hot Shower"],
    description: "Our Quad Room Sharing is the ultimate budget-saver without sacrificing safety or cleanliness. Designed for four students, this room is efficiently laid out with bunk beds and communal study areas. It is rigorously cleaned and maintained to ensure a hygienic environment for all. This option is perfect for groups of friends moving in together or for students who view their room primarily as a place to sleep and prefer to spend their days on campus or in the common areas. You still enjoy full access to all hostel facilities, making it the best value-for-money proposition.",
    semesterPrice: "Ksh 25,000",
    deposit: "Ksh 3,000",
    isAvailable: true
  }
];

export default function AdminDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();


  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
  
  const initialRoomState: Omit<Room, 'id'> = {
    title: '',
    price: '',
    image: '/images/single-room-large2.jpg', // Default image
    slug: '',
    features: [],
    description: '',
    semesterPrice: '',
    deposit: '',
    isAvailable: true,
    images: [] // Initialize images array
  };

  const [newRoom, setNewRoom] = useState<Omit<Room, 'id'>>(initialRoomState);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const data = await RoomService.getRooms();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/admin/login');
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this room?')) {
      await RoomService.deleteRoom(id);
      fetchRooms(); // Refresh
    }
  };

  const handleSeed = async () => {
    if (confirm('This will add default rooms to the database. Continue?')) {
        setLoading(true);
        try {
            for (const room of SEED_DATA) {
                await RoomService.addRoom(room);
            }
            fetchRooms();
            alert('Database seeded successfully!');
        } catch (error) {
            console.error(error);
            alert('Error seeding database');
        } finally {
            setLoading(false);
        }
    }
  };

  const handleAddRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const roomData = {
            ...newRoom
        };

        if (isEditing && currentRoomId) {
             await RoomService.updateRoom(currentRoomId, roomData);
             alert("Room updated successfully!");
        } else {
             await RoomService.addRoom(roomData);
             alert("Room added successfully!");
        }

        resetForm();
        fetchRooms();
    } catch (error) {
        console.error("Error saving room:", error);
        alert("Failed to save room");
    } finally {
        setLoading(false);
    }
  };

  const handleEdit = (room: Room) => {
      setIsEditing(true);
      setCurrentRoomId(room.id!);
      setIsAdding(true);
      setNewRoom({
          title: room.title,
          price: room.price,
          image: room.image,
          slug: room.slug,
          features: room.features,
          description: room.description || '',
          semesterPrice: room.semesterPrice || '',
          deposit: room.deposit || '',
          isAvailable: room.isAvailable ?? true,
          images: room.images || (room.image ? [room.image] : [])
      });
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
      setIsAdding(false);
      setIsEditing(false);
      setCurrentRoomId(null);
      setNewRoom(initialRoomState);
  };

  const toggleFeature = (feature: string) => {
      if (newRoom.features.includes(feature)) {
          setNewRoom({ ...newRoom, features: newRoom.features.filter((f: string) => f !== feature) });
      } else {
          setNewRoom({ ...newRoom, features: [...newRoom.features, feature] });
      }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 pb-20 pt-[120px]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500">Manage your hostel rooms and pricing</p>
            </div>
            <div className="flex gap-4">
                {rooms.length === 0 && (
                    <button onClick={handleSeed} className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                        <Save size={18} /> Seed Data
                    </button>
                )}
                <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <LogOut size={18} /> Logout
                </button>
            </div>
          </div>

          {/* Listings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Current Rooms ({rooms.length})</h2>
                <button 
                  onClick={() => isAdding ? resetForm() : setIsAdding(true)}
                  className={`flex items-center gap-2 px-4 py-2 ${isAdding ? 'bg-red-500 text-white' : 'bg-blue text-white'} rounded-lg hover:opacity-90 transition-colors`}
                >
                    {isAdding ? <X size={18} /> : <Plus size={18} />} 
                    {isAdding ? 'Cancel' : 'Add New Room'}
                </button>
            </div>

            {isAdding && (
                <form onSubmit={handleAddRoom} className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 animate-in fade-in slide-in-from-top-4">
                    <h3 className="font-bold mb-4">{isEditing ? 'Edit Room' : 'Add New Room'}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input type="text" required className="w-full p-2 rounded border" value={newRoom.title} onChange={e => setNewRoom({...newRoom, title: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Price Range</label>
                            <input type="text" required placeholder="e.g. Ksh 15,000" className="w-full p-2 rounded border" value={newRoom.price} onChange={e => setNewRoom({...newRoom, price: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Images ({newRoom.images?.length || 0})</label>
                            
                            {/* Image Grid */}
                            <div className="grid grid-cols-4 gap-2 mb-3">
                                {newRoom.images && newRoom.images.length > 0 && newRoom.images.map((img, idx) => (
                                    <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
                                        <Image src={img} alt={`Image ${idx}`} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 gap-1">
                                            {idx === 0 && <span className="text-xs bg-blue text-white px-2 py-0.5 rounded-full mb-1">Cover</span>}
                                            <button 
                                                type="button"
                                                onClick={() => {
                                                    const updatedImages = newRoom.images!.filter((_, i) => i !== idx);
                                                    setNewRoom({ 
                                                        ...newRoom, 
                                                        images: updatedImages,
                                                        image: updatedImages.length > 0 ? updatedImages[0] : ''
                                                    });
                                                }}
                                                className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                                                title="Remove"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 items-center">
                                {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                                    <CldUploadButton 
                                        options={{
                                            sources: ['local', 'url'],
                                            multiple: true
                                        }}
                                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "platinums_preset"}
                                    onSuccess={(result: { info?: string | { secure_url: string } }) => {
                                        const info = result?.info;
                                        if (typeof info === 'object' && info?.secure_url) {
                                            const secureUrl = info.secure_url;
                                            setNewRoom(prev => {
                                                const currentImages = prev.images || [];
                                                const updatedImages = [...currentImages, secureUrl];
                                                return { 
                                                    ...prev, 
                                                    images: updatedImages,
                                                    image: updatedImages[0] // Ensure first image is cover
                                                };
                                            });
                                        }
                                    }}
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                                    >
                                        <Plus size={16} /> Add Images
                                    </CldUploadButton>
                                ) : (
                                    <div className="text-red-500 text-xs bg-red-50 p-2 rounded border border-red-200">
                                        Missing Cloudinary credentials. Check .env.local
                                    </div>
                                )}
                            </div>
                            {/* Manual Fallback (Optional, keeps main image input if needed, but array is source of truth now) */}
                            {(!newRoom.images || newRoom.images.length === 0) && (
                                <input type="text" placeholder="Or enter URL manually" className="w-full p-2 rounded border mt-2 text-sm" value={newRoom.image} onChange={e => setNewRoom({...newRoom, image: e.target.value, images: [e.target.value]})} />
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Slug</label>
                            <input type="text" required className="w-full p-2 rounded border" value={newRoom.slug} onChange={e => setNewRoom({...newRoom, slug: e.target.value})} />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea required className="w-full p-2 rounded border min-h-[100px]" value={newRoom.description || ''} onChange={e => setNewRoom({...newRoom, description: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Semester Price</label>
                            <input type="text" placeholder="e.g. Ksh 68,000" className="w-full p-2 rounded border" value={newRoom.semesterPrice || ''} onChange={e => setNewRoom({...newRoom, semesterPrice: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Deposit</label>
                            <input type="text" placeholder="e.g. Ksh 5,000" className="w-full p-2 rounded border" value={newRoom.deposit || ''} onChange={e => setNewRoom({...newRoom, deposit: e.target.value})} />
                        </div>
                        <div className="flex items-end pb-2">
                             <div 
                                onClick={() => setNewRoom({...newRoom, isAvailable: !newRoom.isAvailable})}
                                className={`cursor-pointer w-full p-2 rounded border flex items-center justify-center gap-2 font-semibold transition-all ${newRoom.isAvailable !== false ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'}`}
                             >
                                 <div className={`w-3 h-3 rounded-full ${newRoom.isAvailable !== false ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                 {newRoom.isAvailable !== false ? 'Status: Available' : 'Status: Fully Booked'}
                             </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-3">Amenities</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {AVAILABLE_AMENITIES.map((amenity) => (
                                    <div key={amenity} 
                                        onClick={() => toggleFeature(amenity)}
                                        className={`cursor-pointer px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all ${newRoom.features.includes(amenity) ? 'bg-blue/10 border-blue text-blue font-semibold' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}
                                    >
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${newRoom.features.includes(amenity) ? 'bg-blue border-blue' : 'border-gray-300'}`}>
                                            {newRoom.features.includes(amenity) && <span className="text-white text-[10px]">✓</span>}
                                        </div>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" disabled={loading} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center gap-2">
                            <Save size={18}/> {loading ? 'Saving...' : (isEditing ? 'Update Room' : 'Save Room')}
                        </button>
                        <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {loading && !isAdding ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-blue" size={32} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <div key={room.id} className="border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all bg-white flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image src={room.image} alt={room.title} fill className="object-cover" />
                                <div className="absolute top-2 right-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${room.isAvailable !== false ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {room.isAvailable !== false ? 'Available' : 'Booked'}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg mb-1">{room.title}</h3>
                                <p className="text-blue font-medium text-sm mb-3">{room.price}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {room.features.slice(0, 3).map((f, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">{f}</span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                                    <span className="text-gray-400 truncate max-w-[150px]">{room.id}</span>
                                    <button 
                                        onClick={() => handleEdit(room)}
                                        className="text-blue hover:text-blue/80 font-medium flex items-center gap-1"
                                    >
                                        <Edit size={16} /> Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(room.id!)}
                                        className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {rooms.length === 0 && !loading && (
                        <div className="col-span-full text-center py-12 text-gray-500">
                            No rooms found. Add one or seed the database.
                        </div>
                    )}
                </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
