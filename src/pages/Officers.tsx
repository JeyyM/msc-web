import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Officers() {
  const officers = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'President',
      image: 'https://picsum.photos/seed/maria/600/800',
      bio: 'Computer Science major passionate about AI and community building.',
      color: '#00A4EF'
    },
    {
      id: 2,
      name: 'Juan Dela Cruz',
      role: 'VP for Internal Affairs',
      image: 'https://picsum.photos/seed/juan/600/800',
      bio: 'Information Systems student focusing on enterprise architecture.',
      color: '#7FBA00'
    },
    {
      id: 3,
      name: 'Ana Reyes',
      role: 'VP for External Affairs',
      image: 'https://picsum.photos/seed/ana/600/800',
      bio: 'Marketing major bridging the gap between tech and business.',
      color: '#FFB900'
    },
    {
      id: 4,
      name: 'Carlos Mendoza',
      role: 'Secretary General',
      image: 'https://picsum.photos/seed/carlos/600/800',
      bio: 'Software Engineering student with a love for clean code and documentation.',
      color: '#F25022'
    },
    {
      id: 5,
      name: 'Elena Garcia',
      role: 'Director of Technology',
      image: 'https://picsum.photos/seed/elena/600/800',
      bio: 'Full-stack developer specializing in .NET and Azure cloud services.',
      color: '#00A4EF'
    },
    {
      id: 6,
      name: 'Miguel Torres',
      role: 'Director of Creatives',
      image: 'https://picsum.photos/seed/miguel/600/800',
      bio: 'UI/UX designer creating intuitive experiences for student applications.',
      color: '#7FBA00'
    }
  ];

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
      </div>
    </div>
  );
}
