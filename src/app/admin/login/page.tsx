"use client"
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Lock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AdminService } from '@/services/adminService';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Login Logic
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/admin/dashboard');
      } else {
        // Registration Logic
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match.");
        }

        // Check limit
        const canAdd = await AdminService.canAddAdmin();
        if (!canAdd) {
           throw new Error("Admin limit reached (Max 3). Contact support.");
        }

        // Create Auth User
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Record in Firestore
        await AdminService.registerAdmin(userCredential.user.uid, email);

        router.push('/admin/dashboard');
      }
    } catch (err: any) {
      // console.error(err);
      if (err.message) {
        setError(err.message.replace('Firebase: ', ''));
      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative bg-white rounded-[50px] shadow-xl w-full max-w-[900px] bg-blue flex items-center gap-8 overflow-hidden'>
        
        {/* Login Form Section */}
        <motion.div 
          className={`flex-1 p-8 transition-opacity duration-300 ${!isLogin ? "opacity-20 pointer-events-none" : "opacity-100"}`}
        >
          <div className="text-center mb-8 w-full">
            <div className="w-full flex">
              <p className="text-black font-bold text-xl mt-2">Please sign in to continue</p>
            </div>
          </div>

          {error && isLogin && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 mb-6 text-sm">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all outline-none"
                  placeholder="admin@platinums.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || !isLogin}
              className="w-full bg-transparent border-2 border-blue text-blue hover:text-white py-3 rounded-full font-bold hover:bg-blue disabled:opacity-50 transition-all mt-2"
            >
              {loading ? 'Processing...' : 'Access Dashboard'}
            </button>
          </form>
        </motion.div>

        {/* Register Form Section */}
        <motion.div 
          className={`flex-1 p-8 transition-opacity duration-300 ${isLogin ? "opacity-20 pointer-events-none" : "opacity-100"}`}
        >
          <div className="text-center mb-8">
            <div className="w-full flex">
              <p className="text-black font-bold text-xl mt-2">Create an account</p>
            </div>
          </div>

          {error && !isLogin && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 mb-6 text-sm">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all outline-none"
                  placeholder="admin@platinums.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || isLogin}
              className="w-full bg-transparent border-2 border-blue text-blue hover:text-white py-3 rounded-full font-bold hover:bg-blue disabled:opacity-50 transition-all mt-2"
            >
              {loading ? 'Creating...' : 'Register Account'}
            </button>
          </form>
        </motion.div>

        {/* Toggle Panel */}
        <motion.div className={`absolute h-full w-1/2 bg-blue/20 backdrop-blur ${isLogin?"rounded-r-[50px]":"rounded-l-[50px]"} z-10 flex flex-col gap-5 items-center justify-center transition-all ease-in-out duration-700 ${isLogin? "translate-x-full":"translate-x-0"}`}>
          <div className="relative w-[270px] h-[270px] rounded-full overflow-hidden p-1">
            <Image src="/images/logo-removebg.png" alt="Platinum Hostels" fill className="object-contain " />
          </div>
          <button onClick={()=>{
            setIsLogin(!isLogin);
            setError(''); // Clear error on switch
            setEmail(''); // Optional: clear fields or keep them
            setPassword('');
            setConfirmPassword('');
          }} className=" bg-transparent min-w-[200px] px-9 border-2 border-blue hover:border-white hover:bg-white text-blue hover:text-blue py-2 rounded-full font-bold hover:bg-white disabled:opacity-50 transition-all mt-2">{isLogin?"Create Account":"Log Back in"}</button>
        </motion.div>
      </motion.div>
    </div>
  );
}
