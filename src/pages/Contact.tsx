import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FB] pt-32 pb-32 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00A4EF]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#7FBA00]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#7FBA00]">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Have questions about membership, partnerships, or upcoming events? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="glass p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-white/60">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A4EF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00A4EF] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#00A4EF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-lg">msc@dlsu.edu.ph</p>
                    <p className="text-sm text-gray-500 mt-1">We aim to respond within 24-48 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#7FBA00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7FBA00] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#7FBA00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      De La Salle University<br />
                      2401 Taft Ave, Malate<br />
                      Manila, 1004 Metro Manila
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB900]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFB900] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#FFB900] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-lg">+63 (2) 8524 4611</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12 bg-[#1F1F1F] rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5865F2]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-display text-2xl font-bold text-white mb-4 relative z-10">Join Our Community</h3>
              <p className="text-gray-400 mb-8 text-lg font-light relative z-10">
                Stay updated with our latest events, workshops, and opportunities by joining our official Discord server.
              </p>
              <button className="relative z-10 w-full py-4 rounded-xl bg-[#5865F2] text-white font-bold hover:bg-[#4752C4] transition-colors shadow-lg hover:shadow-xl text-lg">
                Join Discord Server
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-white/60 h-fit"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-white/50 focus:bg-white shadow-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-white/50 focus:bg-white shadow-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-white/50 focus:bg-white shadow-sm"
                  placeholder="john.doe@dlsu.edu.ph"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-white/50 focus:bg-white shadow-sm appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Partnership</option>
                  <option>Event Registration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-white/50 focus:bg-white resize-none shadow-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-[#007A53] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg group"
              >
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
