import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  doc, 
  deleteDoc,
} from "firebase/firestore";
import { Contact } from "@/types/contact";

const CONTACTS_COLLECTION = "contacts";

export const ContactService = {
  /**
   * Saves a new contact inquiry to Firestore.
   * @param contact The contact form data (name, email, phone, subject, message).
   * @returns A promise that resolves to the added document reference.
   */
  addContact: async (contact: Omit<Contact, "id" | "createdAt">) => {
    const contactData = {
      ...contact,
      createdAt: Date.now(),
    };
    return await addDoc(collection(db, CONTACTS_COLLECTION), contactData);
  },

  /**
   * Retrieves all contact inquiries from Firestore, ordered by creation date (descending).
   * @returns A promise that resolves to an array of contact objects.
   */
  getContacts: async (): Promise<Contact[]> => {
    const q = query(collection(db, CONTACTS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Contact, "id">),
    }));
  },

  /**
   * Deletes a specific contact inquiry from Firestore.
   * @param id The unique ID of the contact message to delete.
   */
  deleteContact: async (id: string) => {
    const contactRef = doc(db, CONTACTS_COLLECTION, id);
    await deleteDoc(contactRef);
  }
};
