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
  // Save a new contact inquiry
  addContact: async (contact: Omit<Contact, "id" | "createdAt">) => {
    const contactData = {
      ...contact,
      createdAt: Date.now(),
    };
    return await addDoc(collection(db, CONTACTS_COLLECTION), contactData);
  },

  // Get all contact inquiries (for admin)
  getContacts: async (): Promise<Contact[]> => {
    const q = query(collection(db, CONTACTS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Contact, "id">),
    }));
  },

  // Delete a contact inquiry
  deleteContact: async (id: string) => {
    const contactRef = doc(db, CONTACTS_COLLECTION, id);
    await deleteDoc(contactRef);
  }
};
