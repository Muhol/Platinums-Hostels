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
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message.replace('Firebase: ', ''));
      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative bg-white rounded-3xl md:rounded-[50px] shadow-xl w-full max-w-[900px] flex flex-col md:flex-row items-center overflow-hidden min-h-[600px] md:min-h-0'>
        
        {/* Login Form Section */}
        <motion.div 
          className={`w-full md:flex-1 p-6 md:p-8 transition-opacity duration-300 ${!isLogin ? "opacity-50 pointer-events-none hidden md:block" : "opacity-100 block"}`}
        >
          <div className="text-center mb-8 w-full">
            <h2 className="text-black font-bold text-2xl md:text-xl mt-2">Please sign in to continue</h2>
          </div>

          {error && isLogin && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 mb-6 text-sm">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
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
            
            <button 
              type="button"
              onClick={() => setIsLogin(false)}
              className="md:hidden text-blue font-semibold text-sm mt-4 underline"
            >
              New here? Create an account
            </button>
          </form>
        </motion.div>

        {/* Register Form Section */}
        <motion.div 
          className={`w-full md:flex-1 p-6 md:p-8 transition-opacity duration-300 ${isLogin ? "opacity-50 pointer-events-none hidden md:block" : "opacity-100 block"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-black font-bold text-2xl md:text-xl mt-2">Create an account</h2>
          </div>

          {error && !isLogin && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 mb-6 text-sm">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
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

            <button 
              type="button"
              onClick={() => setIsLogin(true)}
              className="md:hidden text-blue font-semibold text-sm mt-4 underline"
            >
              Already have an account? Log in
            </button>
          </form>
        </motion.div>

        {/* Toggle Panel (Desktop only) */}
        <motion.div 
          className={`hidden md:flex absolute h-full w-1/2 bg-blue/30 backdrop-blur z-10 flex-col gap-5 items-center justify-center transition-all ease-in-out duration-700 ${isLogin? "translate-x-full rounded-r-[50px]":"translate-x-0 rounded-l-[50px]"}`}
        >
          <div className="relative w-[270px] h-[270px] rounded-full overflow-hidden p-1">
            <Image src="/images/logo-removebg.png" alt="Platinum Hostels" fill className="object-contain brightness-0 " />
          </div>
          <button 
            onClick={()=>{
              setIsLogin(!isLogin);
              setError('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }} 
            className="bg-transparent min-w-[200px] px-9 border-2 border-black hover:border-white hover:bg-white text-black py-2 rounded-full font-bold transition-all"
          >
            {isLogin ? "Create Account" : "Log Back in"}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
