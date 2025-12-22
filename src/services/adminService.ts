import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc, getCountFromServer } from 'firebase/firestore';

const ADMINS_COLLECTION = 'admins';

export const AdminService = {
  // Check if we can add a new admin
  canAddAdmin: async (): Promise<boolean> => {
    const coll = collection(db, ADMINS_COLLECTION);
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count < 3;
  },

  // Record a new admin
  registerAdmin: async (uid: string, email: string) => {
    const coll = collection(db, ADMINS_COLLECTION);
    const snapshot = await getCountFromServer(coll);
    const count = snapshot.data().count;

    const role = count === 0 ? 'superadmin' : 'admin';

    await setDoc(doc(db, ADMINS_COLLECTION, uid), {
      email,
      role,
      createdAt: new Date().toISOString()
    });
  }
};
