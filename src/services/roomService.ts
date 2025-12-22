import { db } from '@/lib/firebase';
import { Room } from '@/types/room';
import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';

const ROOMS_COLLECTION = 'rooms';

export const RoomService = {
  // Fetch a single room by ID
  getRoomById: async (id: string): Promise<Room | null> => {
    const docRef = doc(db, ROOMS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Room;
    } else {
      return null;
    }
  },

  // Fetch all rooms
  getRooms: async (): Promise<Room[]> => {
    const snapshot = await getDocs(collection(db, ROOMS_COLLECTION));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Room));
  },

  // Add a new room
  addRoom: async (room: Omit<Room, 'id'>) => {
    return await addDoc(collection(db, ROOMS_COLLECTION), room);
  },

  // Delete a room
  deleteRoom: async (id: string) => {
    const roomRef = doc(db, ROOMS_COLLECTION, id);
    await deleteDoc(roomRef);
  },

  // Update a room (bonus)
  updateRoom: async (id: string, room: Partial<Room>) => {
    const roomRef = doc(db, ROOMS_COLLECTION, id);
    await updateDoc(roomRef, room);
  }
};
