import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  doc, 
  updateDoc, 
  deleteDoc,
} from "firebase/firestore";
import { Booking } from "@/types/booking";

const BOOKINGS_COLLECTION = "bookings";

export const BookingService = {
  // Create a new booking request
  createBooking: async (booking: Omit<Booking, "id" | "createdAt" | "status">) => {
    const bookingData = {
      ...booking,
      status: 'pending',
      createdAt: Date.now(),
    };
    return await addDoc(collection(db, BOOKINGS_COLLECTION), bookingData);
  },

  // Get all bookings (for admin)
  getBookings: async (): Promise<Booking[]> => {
    const q = query(collection(db, BOOKINGS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Booking, "id">),
    }));
  },

  // Update booking status
  updateBookingStatus: async (id: string, status: Booking['status']) => {
    const bookingRef = doc(db, BOOKINGS_COLLECTION, id);
    await updateDoc(bookingRef, { status });
  },

  // Delete a booking
  deleteBooking: async (id: string) => {
    const bookingRef = doc(db, BOOKINGS_COLLECTION, id);
    await deleteDoc(bookingRef);
  }
};
