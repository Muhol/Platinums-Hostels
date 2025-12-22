export interface Room {
  id?: string; // Firestore ID
  title: string;
  price: string;
  image: string;
  slug: string;
  features: string[];
  description?: string;
  semesterPrice?: string;
  deposit?: string;
  images?: string[];
  isAvailable?: boolean;
}
