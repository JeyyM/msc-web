import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, Edit2, Trash2, Calendar as CalendarIcon, MapPin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../../data/mockData';
import { Event } from '../../types';

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
          <p className="text-gray-500 mt-1">Create and manage organization events.</p>
        </div>
        <Link
          to="/admin/events/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#7FBA00] text-white rounded-xl font-medium hover:bg-[#659400] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          New Event
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent sm:text-sm transition-colors"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredEvents.map((event) => (
            <div key={event.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-full sm:w-48 h-32 rounded-xl bg-gray-100 overflow-hidden shrink-0 relative group">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Link to={`/admin/events/${event.id}/edit`} className="p-2 bg-white/20 hover:bg-white/40 rounded-lg text-white backdrop-blur-sm transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </Link>
                  <button onClick={() => handleDelete(event.id)} className="p-2 bg-red-500/80 hover:bg-red-600 rounded-lg text-white backdrop-blur-sm transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 truncate">{event.title}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize shrink-0 ${
                    event.status === 'Upcoming' ? 'bg-blue-50 text-blue-700' :
                    event.status === 'Past' ? 'bg-gray-100 text-gray-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 line-clamp-2">{event.shortDescription}</p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {event.location}
                  </div>
                  {event.registrationLink && (
                    <div className="flex items-center gap-1.5 text-xs text-[#00A4EF]">
                      <LinkIcon className="w-4 h-4" />
                      Registration Open
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex sm:hidden w-full gap-3 pt-4 border-t border-gray-100">
                <Link to={`/admin/events/${event.id}/edit`} className="flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Edit2 className="w-4 h-4" /> Edit
                </Link>
                <button onClick={() => handleDelete(event.id)} className="flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              No events found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
