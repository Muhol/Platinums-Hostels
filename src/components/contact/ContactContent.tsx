"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactService } from '@/services/contactService'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      await ContactService.addContact(formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting contact form:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen text-black pt-[110px] flex flex-col items-center bg-gradient-to-br from-gray-50 to-gray-100'
    >
      <div className="max-w-[1200px] w-full flex flex-col shadow-xl pb-[80px] px-[20px] gap-[40px]">
        {/* Breadcrumb */}
        <div className="flex gap-[10px] items-center pt-[20px]">
          <Link className='hover:text-blue transition-all duration-200' href={"/"}>Home</Link>
          <Image src={"/icons/arrow-right-black.svg"} alt='arrow' width={20} height={20}/>
          <p className='text-blue font-semibold'>Contact Us</p>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center py-[20px]"
        >
          <h1 className='text-[32px] md:text-[42px] font-bold text-gray-900 mb-4'>Get In Touch</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto'>
            Have questions about our hostels? We&apos;re here to help! Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] py-[20px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-3"
          >
            <div className="bg-blue/10 p-4 rounded-full">
              <Phone className="text-blue" size={28} />
            </div>
            <h3 className='font-semibold text-lg'>Phone</h3>
            <p className='text-gray-600'>+254 722 123 456</p>
          </motion.div>

          {/* ... other cards ... */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-3"
          >
            <div className="bg-blue/10 p-4 rounded-full">
              <Mail className="text-blue" size={28} />
            </div>
            <h3 className='font-semibold text-lg'>Email</h3>
            <p className='text-gray-600'>info@example.com</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-3"
          >
            <div className="bg-blue/10 p-4 rounded-full">
              <MapPin className="text-blue" size={28} />
            </div>
            <h3 className='font-semibold text-lg'>Location</h3>
            <p className='text-gray-600'>Maasai Lodge Road, Ongata Rongai</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-3"
          >
            <div className="bg-blue/10 p-4 rounded-full">
              <Clock className="text-blue" size={28} />
            </div>
            <h3 className='font-semibold text-lg'>Office Hours</h3>
            <p className='text-gray-600'>Mon-Sat: 8 AM - 6 PM</p>
          </motion.div>
        </div>

        {/* Main Content - Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] py-[20px]">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className='text-2xl font-bold mb-6'>Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                <p className='font-semibold'>Message sent successfully!</p>
                <p className='text-sm'>We&apos;ll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className='block text-sm font-semibold mb-2'>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className='block text-sm font-semibold mb-2'>Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue transition-colors`}
                  placeholder="+254 712 345 678"
                />
                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="subject" className='block text-sm font-semibold mb-2'>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue transition-colors`}
                  placeholder="Room Inquiry"
                />
                {errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-semibold mb-2'>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue transition-colors resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className='bg-blue text-white font-semibold py-3 px-8 rounded-lg hover:bg-light_green transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2'
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6584707890547!2d36.76886931475395!3d-1.3921715360238848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05004976207b%3A0x1933d8d75b758f57!2sKWOSHCOM!5e0!3m2!1sen!2ske!4v1703000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className='text-xl font-bold mb-4'>Connect With Us</h3>
              <p className='text-gray-600 mb-4'>Follow us on social media for updates and special offers</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className='bg-blue/10 hover:bg-blue hover:text-white text-blue p-3 rounded-full transition-all duration-300'
                  aria-label="Facebook"
                >
                  <Image src={"/icons/facebook-light.svg"} alt='Facebook' height={24} width={24} className='invert opacity-70'/>
                </a>
                <a 
                  href="#" 
                  className='bg-blue/10 hover:bg-blue hover:text-white text-blue p-3 rounded-full transition-all duration-300'
                  aria-label="Instagram"
                >
                  <Image src={"/icons/instagram-light.svg"} alt='Instagram' height={24} width={24} className='invert opacity-70'/>
                </a>
                <a 
                  href="#" 
                  className='bg-blue/10 hover:bg-blue hover:text-white text-blue p-3 rounded-full transition-all duration-300'
                  aria-label="Twitter"
                >
                  <Image src={"/icons/twitter-light.svg"} alt='Twitter' height={24} width={24} className='invert opacity-70'/>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
