import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, FileText, ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMembers, mockEvents } from '../../data/mockData';

export default function Dashboard() {
  const stats = [
    {
      name: 'Total Members',
      value: mockMembers.length,
      icon: Users,
      color: 'bg-[#00A4EF]',
      link: '/admin/members',
    },
    {
      name: 'Upcoming Events',
      value: mockEvents.filter(e => e.status === 'Upcoming').length,
      icon: Calendar,
      color: 'bg-[#7FBA00]',
      link: '/admin/events',
    },
    {
      name: 'Publications',
      value: 12, // Placeholder
      icon: FileText,
      color: 'bg-[#FFB900]',
      link: '/admin/publications',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h2>
          <p className="text-gray-500 mt-1">Here's what's happening with the MSC website.</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/admin/events/new"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-[#007A53] transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Event
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.color}/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150`} />
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className={`p-3 rounded-xl ${stat.color}/10 text-${stat.color.replace('bg-', '')}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <Link to={stat.link} className="text-gray-400 hover:text-gray-900 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Events</h3>
            <Link to="/admin/events" className="text-sm font-medium text-[#00A4EF] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {mockEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{event.title}</h4>
                  <p className="text-sm text-gray-500 truncate">{event.date}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                  event.status === 'Upcoming' ? 'bg-blue-50 text-blue-700' :
                  event.status === 'Past' ? 'bg-gray-100 text-gray-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Members */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Members</h3>
            <Link to="/admin/members" className="text-sm font-medium text-[#00A4EF] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {mockMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0">
                  <img src={member.imageUrl} alt={member.fullName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{member.fullName}</h4>
                  <p className="text-sm text-gray-500 truncate">{member.role}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                  member.isActive ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {member.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
