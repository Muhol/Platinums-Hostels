export interface Booking {
  id: string;
  roomId: string;
  roomTitle: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: number;
}
