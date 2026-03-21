import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useMembers } from '../hooks/useSupabaseData';

const COLORS = ['#00A4EF', '#7FBA00', '#FFB900', '#F25022'];

export default function Officers() {
  const { members: rawMembers, loading, error } = useMembers();

  // Only show active members, sorted by displayOrder (already from DB)
  const officers = rawMembers
    .filter(m => m.isActive)
    .map((m, idx) => ({
      id: m.id,
      name: m.fullName,
      role: m.role,
      image: m.imageUrl,
      bio: m.bio,
      color: m.color ?? COLORS[idx % COLORS.length],
    }));

  return (
    <div className="min-h-screen bg-[#1F1F1F] pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#FFB900]">Team</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            The passionate student leaders driving innovation and community at DLSU Microsoft Student Clubs.
          </p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="w-10 h-10 border-4 border-white/10 border-t-white/60 rounded-full animate-spin" />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="max-w-md mx-auto text-center py-16 text-red-400">
            <p className="font-medium">Could not load members: {error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && officers.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-xl font-light">No members to show right now.</p>
          </div>
        )}

        {!loading && !error && officers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, idx) => (
              <motion.div
                key={officer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] cursor-pointer"
              >
                {/* Image with Grayscale to Color transition */}
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
                      style={{ backgroundColor: officer.color }}
                    >
                      {officer.role}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{officer.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {officer.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pt-4 border-t border-white/20">
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
