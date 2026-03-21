import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Campus Navigator AI',
      category: 'Azure Cognitive Services',
      image: 'https://picsum.photos/seed/ai/1200/800',
      description: 'An AI-powered chatbot that helps DLSU students navigate the campus, find available study spaces, and get real-time updates on university events. Built with Azure Bot Service and LUIS.',
      tags: ['Azure Bot Service', 'LUIS', 'React', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Green DLSU Dashboard',
      category: 'Power BI & Data Factory',
      image: 'https://picsum.photos/seed/dashboard/1200/800',
      description: 'A comprehensive dashboard visualizing energy consumption and sustainability metrics across different buildings in the DLSU Manila campus. Analyzes thousands of data points daily.',
      tags: ['Power BI', 'Azure SQL', 'Data Factory'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Student Connect App',
      category: 'Power Platform',
      image: 'https://picsum.photos/seed/app/1200/800',
      description: 'A low-code mobile application built for student organizations to manage memberships, track event attendance, and process merchandise orders seamlessly.',
      tags: ['Power Apps', 'Dataverse', 'Power Automate'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Cloud Enrollment System',
      category: '.NET Core & Azure',
      image: 'https://picsum.photos/seed/cloud/1200/800',
      description: 'A scalable prototype for a university enrollment system designed to handle high traffic during registration periods using microservices architecture and Kubernetes.',
      tags: ['.NET 8', 'Azure Kubernetes', 'Cosmos DB'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-48 relative selection:bg-[#00A4EF] selection:text-white">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Selected <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            Explore innovative solutions built by DLSU Microsoft Student Clubs members using the latest Microsoft technologies.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-0 relative">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:sticky bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row group"
              style={{ top: `calc(8rem + ${idx * 2}rem)` }}
            >
              {/* Content Side */}
              <div className="p-10 md:p-16 flex-1 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-gray-300">
                      {project.category}
                    </span>
                    <span className="font-display text-gray-600 font-bold text-xl">0{idx + 1}</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 group-hover:text-[#00A4EF] transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 leading-relaxed mb-10">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-black/50 text-gray-300 text-sm rounded-xl font-medium border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#00A4EF] hover:text-white transition-colors duration-300">
                    View Project <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
