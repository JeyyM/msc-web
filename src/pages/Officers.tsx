import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useMembers } from '../hooks/useSupabaseData';

const COLORS = ['#00A4EF', '#7FBA00', '#FFB900', '#F25022'];
const ROLE_COLORS = {
  executive: '#F25022',
  operations: '#7FBA00',
  people: '#00A4EF',
  marketing: '#FFB900',
};

function getRoleColor(role: string, fallback: string) {
  const normalizedRole = role.toLowerCase();

  if (
    normalizedRole.includes('president') ||
    normalizedRole.includes('secretary')
  ) {
    return ROLE_COLORS.executive;
  }

  if (
    normalizedRole.includes('organizational') ||
    normalizedRole.includes('research') ||
    normalizedRole.includes('technology') ||
    normalizedRole.includes('internal')
  ) {
    return ROLE_COLORS.operations;
  }

  if (
    normalizedRole.includes('human resources') ||
    normalizedRole.includes('university welfare')
  ) {
    return ROLE_COLORS.people;
  }

  if (
    normalizedRole.includes('external') ||
    normalizedRole.includes('marketing') ||
    normalizedRole.includes('creatives') ||
    normalizedRole.includes('strategies')
  ) {
    return ROLE_COLORS.marketing;
  }

  return fallback;
}

export default function Officers() {
  const { members: rawMembers, loading, error } = useMembers();
  const activeMembers = rawMembers.filter(m => m.isActive);

  // Only show active members, sorted by displayOrder (already from DB)
  const officers = activeMembers
    .map((m, idx) => ({
      id: m.id,
      name: m.fullName,
      role: m.role,
      committee: m.committee,
      category: m.category,
      image: m.imageUrl,
      color: getRoleColor(m.role, m.color ?? COLORS[idx % COLORS.length]),
      executives: activeMembers
        .filter(member =>
          member.id !== m.id &&
          member.category === 'Member' &&
          member.committee === m.committee
        )
        .map(member => ({
          id: member.id,
          name: member.fullName,
          role: member.role,
        })),
    }));
  const officerRows = [
    { start: 0, officers: officers.slice(0, 3) },
    { start: 3, officers: officers.slice(3, 7) },
    { start: 7, officers: officers.slice(7, 10) },
    { start: 10, officers: officers.slice(10) },
  ].filter(row => row.officers.length > 0);

  return (
    <div className="min-h-screen bg-white pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#FFB900]">Team</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            The passionate student leaders driving innovation and community at DLSU Microsoft Student Clubs.
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
            <p className="font-medium">Could not load members: {error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && officers.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-xl font-light">No members to show right now.</p>
          </div>
        )}

        {!loading && !error && officers.length > 0 && (
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
            {officerRows.map((row) => (
              <div key={row.start} className="flex w-full flex-wrap justify-center gap-8">
                {row.officers.map((officer, officerIdx) => {
                  const idx = row.start + officerIdx;
                  const showExecutives = idx >= 3 && idx < 10;

                  return (
                    <motion.div
                      key={officer.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="w-full max-w-[18rem] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                    >
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl shadow-gray-900/10">
                        <img
                          src={officer.image}
                          alt={officer.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
                        <div
                          className="absolute inset-x-0 top-0 h-1.5"
                          style={{ backgroundColor: officer.color }}
                        />
                        
                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                          <div className="flex min-h-[6.5rem] flex-col justify-end transition-transform duration-500 group-hover:-translate-y-12">
                            <span 
                              className="w-fit px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase mb-2 shadow-sm"
                              style={{ backgroundColor: officer.color }}
                            >
                              {officer.role}
                            </span>
                            <h3 className="font-display text-2xl font-bold text-white leading-tight">{officer.name}</h3>
                          </div>

                          <div className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 flex gap-4 border-t border-white/20 pt-4 opacity-0 translate-y-3 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
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
                      </div>

                      {showExecutives && (
                        <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                          <div className="mb-3 flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: officer.color }}
                            />
                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                              Executives
                            </h4>
                          </div>

                          {officer.executives.length > 0 ? (
                            <ul className="space-y-3">
                              {officer.executives.map(executive => (
                                <li key={executive.id}>
                                  <p className="text-sm font-bold leading-tight text-gray-900">{executive.name}</p>
                                  <p className="mt-0.5 text-xs leading-snug text-gray-500">{executive.role}</p>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-400">No executives listed.</p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
