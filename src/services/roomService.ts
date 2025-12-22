import { db } from '@/lib/firebase';
import { Room } from '@/types/room';
import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';

const ROOMS_COLLECTION = 'rooms';

export const RoomService = {
  /**
   * Fetches a single room's details by its ID.
   * @param id - The unique ID of the room.
   * @returns The room data or null if not found.
   */
  getRoomById: async (id: string): Promise<Room | null> => {
    const docRef = doc(db, ROOMS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Room;
    } else {
      return null;
    }
  },

  /**
   * Fetches all rooms from the database.
   * @returns An array of all rooms.
   */
  getRooms: async (): Promise<Room[]> => {
    const snapshot = await getDocs(collection(db, ROOMS_COLLECTION));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Room));
  },

  /**
   * Adds a new room to the database.
   * @param room - The room details excluding the ID.
   */
  addRoom: async (room: Omit<Room, 'id'>) => {
    return await addDoc(collection(db, ROOMS_COLLECTION), room);
  },

  /**
   * Deletes a room by its ID.
   * @param id - The unique ID of the room to delete.
   */
  deleteRoom: async (id: string) => {
    const roomRef = doc(db, ROOMS_COLLECTION, id);
    await deleteDoc(roomRef);
  },

  /**
   * Updates existing room details.
   * @param id - The ID of the room to update.
   * @param room - Partial room data to update.
   */
  updateRoom: async (id: string, room: Partial<Room>) => {
    const roomRef = doc(db, ROOMS_COLLECTION, id);
    await updateDoc(roomRef, room);
  }
};
