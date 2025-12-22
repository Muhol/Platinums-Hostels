"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { BookingService } from '@/services/bookingService';
import { Room } from '@/types/room';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}

export default function BookingModal({ isOpen, onClose, room }: BookingModalProps) {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await BookingService.createBooking({
        roomId: room.id!, // The room must have an ID at this point
        roomTitle: room.title,
        ...formData
      });
      setSuccess(true);
      // Wait a bit then close
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ userName: '', userEmail: '', userPhone: '' });
      }, 3000);
    } catch (err) {
      console.error("Booking failed:", err);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white/50 backdrop-blur w-full max-w-[500px] rounded-[10px] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue/20 p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute text-black right-4 top-4 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-black mb-1">Book This Room</h2>
              <p className="text-black opacity-90">Secure your spot at {room.title}</p>
            </div>

            <div className="p-8">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Submitted!</h3>
                  <p className="text-gray-600">Our team will contact you shortly to confirm your reservation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Full Name</label>
                    <div className="relative ">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        required
                        value={formData.userName}
                        onChange={(e) => setFormData({...formData, userName: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-full border-2 border-transparent focus:border-blue focus:ring-4 focus:ring-blue/5 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="email" 
                        required
                        value={formData.userEmail}
                        onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-full border-2 border-transparent focus:border-blue focus:ring-4 focus:ring-blue/5 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="tel" 
                        required
                        value={formData.userPhone}
                        onChange={(e) => setFormData({...formData, userPhone: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-full border-2 border-transparent focus:border-blue focus:ring-4 focus:ring-blue/5 outline-none transition-all"
                        placeholder="+254 700 000000"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue text-white py-4 rounded-full font-bold text-lg hover:bg-blue/90 disabled:opacity-50 transition-all shadow-lg shadow-blue/20 flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking Request'
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-800">By booking, you agree to our terms and conditions.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
