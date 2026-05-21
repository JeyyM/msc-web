import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Design System Colors:
// White: #FFFFFF, Off-white: #F8F9FB, Light gray: #EDEFF3, Charcoal: #1F1F1F, 
// Muted gray: #5F6B7A, MS Blue: #00A4EF, MS Yellow: #FFB900, MS Green: #7FBA00, MS Red: #F25022

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  color: string;
  shortDescription: string;
  imageUrl: string;
  registrationLink: string;
}

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'AI Builders Hackathon 2026',
    date: 'June 12, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'DLSU Henry Sy Sr. Hall',
    category: 'HACKATHON',
    color: '#00A4EF', // MS Blue
    shortDescription: 'Unleash your creativity and collaborate with peers to build innovative AI-driven solutions solving real-world challenges with DLSU and Microsoft engineers.',
    imageUrl: 'https://placehold.co/600x400/00a4ef/ffffff?text=AI+Builders+Hackathon',
    registrationLink: 'https://forms.microsoft.com/r/ai-builders-2026'
  },
  {
    id: '2',
    title: 'Azure Cloud & Kubernetes Boot Camp',
    date: 'June 25, 2026',
    time: '1:00 PM - 4:00 PM',
    location: 'Virtual via MS Teams',
    category: 'WORKSHOP',
    color: '#FFB900', // MS Yellow
    shortDescription: 'Master modern cloud architectures, containers, and serverless scaling on Microsoft Azure through structured, interactive hands-on labs.',
    imageUrl: 'https://placehold.co/600x400/ffb900/ffffff?text=Azure+Boot+Camp',
    registrationLink: 'https://forms.microsoft.com/r/azure-bootcamp'
  },
  {
    id: '3',
    title: 'GitHub Copilot Mastery Workshop',
    date: 'July 05, 2026',
    time: '2:00 PM - 4:30 PM',
    location: 'Andrew Building Room 502',
    category: 'SEMINAR',
    color: '#7FBA00', // MS Green
    shortDescription: 'Accelerate your development workflow. Learn advanced prompting techniques and AI-assisted programming strategies with industry practitioners.',
    imageUrl: 'https://placehold.co/600x400/7fba00/ffffff?text=GitHub+Copilot',
    registrationLink: 'https://forms.microsoft.com/r/copilot-mastery'
  },
  {
    id: '4',
    title: 'DLSU Tech Careers & Networking Summit',
    date: 'July 18, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'Yuchengco Hall Lobby',
    category: 'NETWORKING',
    color: '#F25022', // MS Red
    shortDescription: 'Connect directly with industry representatives, DLSU alumni, and top Microsoft developers to discuss internships and career pathways.',
    imageUrl: 'https://placehold.co/600x400/f25022/ffffff?text=Tech+Careers+Summit',
    registrationLink: 'https://forms.microsoft.com/r/tech-careers'
  },
  {
    id: '5',
    title: 'Introduction to TypeScript & React 19',
    date: 'August 01, 2026',
    time: '1:00 PM - 3:00 PM',
    location: 'Gokongwei Hall Lab 3',
    category: 'WORKSHOP',
    color: '#00A4EF', // Cycles back to MS Blue
    shortDescription: 'Kickstart your web development journey. Learn type-safe modern frontend development using React 19 and contemporary state management models.',
    imageUrl: 'https://placehold.co/600x400/00a4ef/ffffff?text=TypeScript+React+Intro',
    registrationLink: 'https://forms.microsoft.com/r/ts-react-19'
  }
];

export default function Events() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (MOCK_EVENTS.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 bg-[#F8F9FB] min-h-screen font-sans">
        <p className="text-[#5F6B7A] text-lg font-normal">
          No upcoming events right now. Check back soon!
        </p>
      </div>
    );
  }

  const itemsPerPage = 3;
  const totalPages = Math.ceil(MOCK_EVENTS.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleEvents = MOCK_EVENTS.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Framer Motion Carousel slide + fade variations
  const carouselVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#F8F9FB] min-h-screen py-16 px-4 md:px-8 lg:px-16 font-sans">
      
      {/* Page Header (Centered) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
          Upcoming <span className="bg-gradient-to-r from-[#00A4EF] to-[#7FBA00] bg-clip-text text-transparent">Events</span>
        </h1>
        <p className="text-[#5F6B7A] text-lg font-light mt-4">
          Discover opportunities to learn, network, and build alongside the DLSU Microsoft Student Clubs community.
        </p>
      </motion.div>

      {/* Events Carousel Container */}
      <div className="max-w-7xl mx-auto relative px-4 md:px-12">
        
        {/* Navigation Arrows (Conditional) */}
        {MOCK_EVENTS.length > 3 && (
          <>
            {/* Left Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-[#EDEFF3] flex items-center justify-center transition-all ${
                currentPage === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
              }`}
              aria-label="Previous events"
            >
              <ChevronLeft className="w-6 h-6 text-[#1F1F1F]" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-[#EDEFF3] flex items-center justify-center transition-all ${
                currentPage === totalPages - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
              }`}
              aria-label="Next events"
            >
              <ChevronRight className="w-6 h-6 text-[#1F1F1F]" />
            </button>
          </>
        )}

        {/* Carousel Window */}
        <div className="overflow-hidden py-4">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {visibleEvents.map((event) => (
                <div 
                  key={event.id}
                  className="flex bg-white rounded-2xl shadow-md border border-[#EDEFF3] hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden h-[250px] relative group"
                >
                  {/* Left thin color strip */}
                  <div className="w-1.5 shrink-0" style={{ backgroundColor: event.color }} />
                  
                  {/* Left Side: Image section */}
                  <div className="w-[38%] relative h-full shrink-0 overflow-hidden bg-gray-100">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover rounded-l-none" 
                    />
                  </div>

                  {/* Right Side: Content Area */}
                  <div className="flex-1 p-4 flex flex-col justify-between h-full overflow-hidden">
                    <div>
                      {/* Category Badge */}
                      <span 
                        className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider text-white uppercase mb-1.5"
                        style={{ backgroundColor: event.color }}
                      >
                        {event.category}
                      </span>
                      
                      {/* Event Title */}
                      <h3 className="font-bold text-sm md:text-base text-[#1F1F1F] line-clamp-2 leading-snug">
                        {event.title}
                      </h3>
                      
                      {/* Short Description */}
                      <p className="text-xs text-[#5F6B7A] line-clamp-3 mt-1 leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>

                    {/* Meta Rows & CTA Area */}
                    <div className="space-y-1">
                      {/* Info Rows */}
                      <div className="space-y-0.5 mb-2">
                        <div className="flex items-center gap-1.5 text-[10px] text-[#5F6B7A]">
                          <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color: event.color }} />
                          <span className="truncate font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-[#5F6B7A]">
                          <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: event.color }} />
                          <span className="truncate font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-[#5F6B7A]">
                          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: event.color }} />
                          <span className="truncate font-medium">{event.location}</span>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="w-full py-1.5 text-xs font-bold border rounded-xl transition-all duration-300"
                        style={{
                          borderColor: event.color,
                          backgroundColor: hoveredButton === event.id ? event.color : 'transparent',
                          color: hoveredButton === event.id ? '#FFFFFF' : event.color,
                        }}
                        onMouseEnter={() => setHoveredButton(event.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentPage ? 1 : -1);
                  setCurrentPage(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'bg-[#00A4EF] scale-110' : 'bg-[#EDEFF3]'
                }`}
                aria-label={`Go to set ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Event Detail Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 font-sans"
            >
              {/* Banner with gradient overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-[2rem] bg-[#EDEFF3]">
                <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-transform hover:scale-105"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6">
                <div>
                  {/* Category Badge */}
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-sm mb-3"
                    style={{ backgroundColor: selectedEvent.color }}
                  >
                    {selectedEvent.category}
                  </span>

                  {/* Event Title */}
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F1F1F] leading-snug">
                    {selectedEvent.title}
                  </h2>
                </div>

                {/* Full Description */}
                <p className="text-[#5F6B7A] leading-relaxed text-sm md:text-base">
                  {selectedEvent.shortDescription}
                </p>

                {/* Info Block (Padded) */}
                <div className="bg-[#F8F9FB] rounded-xl p-5 space-y-4 border border-[#EDEFF3]">
                  <div className="flex items-center gap-3.5 text-[#1F1F1F] font-medium text-sm">
                    <Calendar className="w-5 h-5 shrink-0" style={{ color: selectedEvent.color }} />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-[#1F1F1F] font-medium text-sm">
                    <Clock className="w-5 h-5 shrink-0" style={{ color: selectedEvent.color }} />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-[#1F1F1F] font-medium text-sm">
                    <MapPin className="w-5 h-5 shrink-0" style={{ color: selectedEvent.color }} />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                {/* Register Now Button */}
                {selectedEvent.registrationLink && (
                  <a
                    href={selectedEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-4 rounded-xl text-white font-bold transition-transform active:scale-[0.98] shadow-md hover:shadow-lg"
                    style={{ backgroundColor: selectedEvent.color }}
                  >
                    Register Now
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}