import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useEvents } from '../hooks/useSupabaseData';

// Fallback colour palette cycled by index
const COLORS = ['#00A4EF', '#FFB900', '#7FBA00', '#F25022'];

export default function Events() {
  const { events: rawEvents, loading, error } = useEvents();

  // Only show non-hidden events, sorted by displayOrder
  const events = rawEvents
    .filter(e => e.status !== 'Hidden')
    .map((e, idx) => ({
      id: e.id,
      title: e.title,
      date: e.date,
      time: e.time,
      location: e.location,
      type: e.category,
      color: e.color ?? COLORS[idx % COLORS.length],
      description: e.shortDescription,
      registrationLink: e.registrationLink,
      status: e.status,
    }));

  return (
    <div className="min-h-screen bg-white pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#7FBA00]">Events</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Discover opportunities to learn, network, and build with the DLSU Microsoft Student Clubs community.
          </p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="w-10 h-10 border-4 border-[#00A4EF]/20 border-t-[#00A4EF] rounded-full animate-spin" />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="max-w-md mx-auto text-center py-16 text-red-500">
            <p className="font-medium">Could not load events: {error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && events.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-xl font-light">No events to show right now. Check back soon!</p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full" />

            {events.map((event, idx) => (
              <div key={event.id} className={`relative flex items-center justify-between md:justify-normal w-full mb-20 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 border-4 border-white shadow-md z-10"
                  style={{ backgroundColor: event.color }}
                />

                {/* Card */}
                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                    className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
                  >
                    <div 
                      className="absolute top-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-full opacity-10"
                      style={{ backgroundColor: event.color }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span 
                          className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-sm"
                          style={{ backgroundColor: event.color }}
                        >
                          {event.type}
                        </span>
                        {event.status === 'Past' && (
                          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
                            Past
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-display text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {event.description}
                      </p>
                      
                      <div className="space-y-4 mb-8 bg-gray-50 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 text-gray-700 font-medium">
                          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                            <Calendar className="w-5 h-5 text-[#00A4EF]" />
                          </div>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700 font-medium">
                          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-[#FFB900]" />
                          </div>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700 font-medium">
                          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-[#F25022]" />
                          </div>
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {event.status === 'Upcoming' && event.registrationLink ? (
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 text-gray-900 font-bold hover:text-[#00A4EF] transition-colors"
                        >
                          Register Now 
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      ) : event.status === 'Past' ? (
                        <span className="text-gray-400 font-medium text-sm">Registration closed</span>
                      ) : null}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
