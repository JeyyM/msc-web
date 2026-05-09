import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useProjects } from '../hooks/useSupabaseData';
//
const COLORS = ['#00A4EF', '#FFB900', '#7FBA00', '#F25022'];

export default function Projects() {
  const { projects, loading, error } = useProjects();

  const featured = projects.filter(p => p.isFeatured);
  const others   = projects.filter(p => !p.isFeatured);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-48 relative selection:bg-[#00A4EF] selection:text-white">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none fixed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Project <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Portfolio.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            Explore innovative solutions built by DLSU Microsoft Student Clubs members using the latest Microsoft technologies.
          </p>
        </motion.div>

        {/* ── Loading ── */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="w-10 h-10 border-4 border-white/10 border-t-white/60 rounded-full animate-spin" />
          </div>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="max-w-md mx-auto text-center py-16 text-red-400">
            <p className="font-medium">Could not load projects: {error}</p>
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-xl font-light">No projects yet. Check back soon!</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <>
            {/* ════════════════════════════════════
                FEATURED — sticky showcase cards
            ════════════════════════════════════ */}
            {featured.length > 0 && (
              <div className="space-y-24 md:space-y-0 relative mb-40">
                {featured.map((project, idx) => {
                  const color = project.color ?? COLORS[idx % COLORS.length];
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      className="md:sticky bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row group"
                      style={{ top: `calc(8rem + ${idx * 2}rem)` }}
                    >
                      {/* Content */}
                      <div className="p-10 md:p-16 flex-1 flex flex-col justify-between order-2 md:order-1">
                        <div>
                          <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-gray-300">
                              {project.category}
                            </span>
                            <span className="font-display text-gray-600 font-bold text-xl">0{idx + 1}</span>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-white"
                              style={{ backgroundColor: color }}
                            >
                              Featured
                            </span>
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
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#00A4EF] hover:text-white transition-colors duration-300"
                            >
                              View Project <ArrowUpRight className="w-5 h-5" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* ════════════════════════════════════
                OTHER PAST PROJECTS — card grid
            ════════════════════════════════════ */}
            {others.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">
                    More <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Projects</span>
                  </h2>
                  <p className="text-gray-500 text-lg font-light">Other past projects from our members.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {others.map((project, idx) => {
                    const color = project.color ?? COLORS[idx % COLORS.length];
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: idx * 0.07 }}
                        className="bg-[#111111] border border-white/10 rounded-[1.75rem] overflow-hidden group hover:border-white/20 transition-colors duration-300 flex flex-col"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div
                            className="absolute bottom-0 left-0 right-0 h-1 z-20"
                            style={{ backgroundColor: color }}
                          />
                        </div>

                        {/* Body */}
                        <div className="p-7 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 tracking-wide">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#00A4EF] transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-black/40 text-gray-400 text-xs rounded-lg border border-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-3 mt-auto">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" /> View
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                              >
                                <Github className="w-4 h-4" /> GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
