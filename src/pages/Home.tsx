import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Users, Lightbulb, Sparkles, Terminal, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [5, 10, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[10%] w-32 h-32 lg:w-48 lg:h-48 glass rounded-3xl -z-10 hidden md:flex items-center justify-center shadow-2xl border-t-white/80"
        >
          <Code className="w-16 h-16 text-[#00A4EF]" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [-10, -5, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[10%] w-24 h-24 lg:w-40 lg:h-40 glass rounded-full -z-10 hidden md:flex items-center justify-center shadow-2xl border-t-white/80"
        >
          <Lightbulb className="w-12 h-12 text-[#FFB900]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/60 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#F25022]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">Empowering Student Innovators</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8 leading-[1.1]"
            >
              Build the Future with <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#00A4EF]/20 via-[#7FBA00]/20 to-[#FFB900]/20 blur-2xl rounded-full" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] via-[#7FBA00] to-[#FFB900]">
                  Microsoft Technologies
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Join the official Microsoft Student Clubs at De La Salle University. 
              Learn, connect, and innovate with a community of passionate tech enthusiasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg group"
              >
                Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#join"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass text-gray-900 font-medium hover:bg-white/80 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-lg"
              >
                Become a Member
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="py-10 bg-white border-y border-gray-100 overflow-hidden flex relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {['INNOVATE', 'BUILD', 'CONNECT', 'EMPOWER', 'AZURE', '.NET', 'POWER PLATFORM', 'GITHUB'].map((text, j) => (
                <div key={j} className="flex items-center gap-12">
                  <span className="font-display text-4xl font-bold text-gray-200 tracking-wider">{text}</span>
                  <span className="w-3 h-3 rounded-full bg-[#00A4EF]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Features Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              More than just a <span className="text-[#007A53]">student club.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We provide a platform for students to explore Microsoft technologies, develop professional skills, and build innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Large Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#F8F9FB] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00A4EF]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Terminal className="w-8 h-8 text-[#00A4EF]" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">Technical Workshops</h3>
                  <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                    Hands-on sessions covering Azure, .NET, Power Platform, and more. Learn directly from industry experts and certified student partners.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1F1F1F] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#7FBA00]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Community</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Connect with like-minded peers, mentors, and professionals.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FFB900] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl translate-y-1/4 translate-x-1/4" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    Collaborate on real-world projects and participate in hackathons.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wide Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col justify-center items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F25022]/5 via-transparent to-[#00A4EF]/5" />
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-6 relative z-10">Ready to start your journey?</h3>
              <Link
                to="/events"
                className="relative z-10 px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-[#007A53] transition-colors shadow-lg flex items-center gap-2"
              >
                View Upcoming Events <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
