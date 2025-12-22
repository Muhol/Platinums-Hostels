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
  /**
   * Creates a new booking request in the database.
   * Sets initial status to 'pending' and adds a timestamp.
   * @param booking - User details and room information.
   */
  createBooking: async (booking: Omit<Booking, "id" | "createdAt" | "status">) => {
    const bookingData = {
      ...booking,
      status: 'pending',
      createdAt: Date.now(),
    };
    return await addDoc(collection(db, BOOKINGS_COLLECTION), bookingData);
  },

  /**
   * Retrieves all booking requests, ordered by newest first.
   * @returns Array of all bookings.
   */
  getBookings: async (): Promise<Booking[]> => {
    const q = query(collection(db, BOOKINGS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Booking, "id">),
    }));
  },

  /**
   * Updates the status of a booking request.
   * @param id - The ID of the booking to update.
   * @param status - The new status (confirmed, cancelled, pending).
   */
  updateBookingStatus: async (id: string, status: Booking['status']) => {
    const bookingRef = doc(db, BOOKINGS_COLLECTION, id);
    await updateDoc(bookingRef, { status });
  },

  /**
   * Permanently deletes a booking request from the database.
   * @param id - The ID of the booking to delete.
   */
  deleteBooking: async (id: string) => {
    const bookingRef = doc(db, BOOKINGS_COLLECTION, id);
    await deleteDoc(bookingRef);
  }
};
