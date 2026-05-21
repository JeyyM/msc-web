import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8 leading-[1.1]"
            >
              We are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#7FBA00]">
                DLSU MSC.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-lg"
            >
              A community of passionate students at De La Salle University, dedicated to exploring, learning, and innovating with Microsoft technologies.
            </motion.p>
          </div>

          {/* Scrolling Right Column */}
          <div className="space-y-32">
            
            {/* Image Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="https://picsum.photos/seed/dlsu/1200/900"
                alt="DLSU Campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00A4EF]/60 to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Mission & Vision */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#F8F9FB] p-10 md:p-16 rounded-[2.5rem] border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#00A4EF]" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  To empower DLSU students with the skills, resources, and community needed to thrive in the digital age. We bridge the gap between academic learning and industry demands through hands-on experience with Microsoft's ecosystem.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#1F1F1F] text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7FBA00]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <Eye className="w-8 h-8 text-[#7FBA00]" />
                    </div>
                    <h2 className="font-display text-4xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    To be the premier student technology organization at De La Salle University, recognized for producing innovative leaders who leverage technology to solve real-world problems.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-12">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Innovation', desc: 'Embracing new technologies to create impactful solutions.', icon: Lightbulb, color: 'text-[#00A4EF]', bg: 'bg-[#00A4EF]/10' },
                  { title: 'Community', desc: 'Fostering an inclusive environment where everyone can learn and grow.', icon: Heart, color: 'text-[#F25022]', bg: 'bg-[#F25022]/10' },
                  { title: 'Excellence', desc: 'Striving for the highest standards in our projects and initiatives.', icon: Award, color: 'text-[#FFB900]', bg: 'bg-[#FFB900]/10' },
                  { title: 'Leadership', desc: 'Developing student leaders who inspire and guide others.', icon: Target, color: 'text-[#7FBA00]', bg: 'bg-[#7FBA00]/10' },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Credits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#F8F9FB] p-10 md:p-14 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:shadow-[#00A4EF]/10 transition-shadow duration-500"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#00A4EF] mb-3 transition-colors duration-300 group-hover:text-[#007A53]">
                Developed By:
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Technology Development Committee
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Project Heads & Lead Developers
                  </h3>
                  <div className="h-1 w-20 rounded-full bg-[#00A4EF] transition-all duration-500 group-hover:w-36" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Developers
                  </h3>
                  <div className="h-1 w-20 rounded-full bg-[#7FBA00] transition-all duration-500 group-hover:w-36" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
