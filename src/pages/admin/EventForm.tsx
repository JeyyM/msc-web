import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import { mockEvents } from '../../data/mockData';
import { Event } from '../../types';

export default function EventForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<Partial<Event>>({
    title: '',
    date: '',
    time: '',
    shortDescription: '',
    fullDescription: '',
    imageUrl: '',
    category: 'workshop',
    location: '',
    status: 'Upcoming',
    isFeatured: false,
    registrationLink: '',
    displayOrder: 0,
  });

  useEffect(() => {
    if (isEditing) {
      const event = mockEvents.find(e => e.id === id);
      if (event) {
        setFormData(event);
      } else {
        navigate('/admin/events');
      }
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    console.log('Saving event:', formData);
    navigate('/admin/events');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/admin/events')}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Event' : 'Create New Event'}
          </h2>
          <p className="text-gray-500 mt-1">
            {isEditing ? 'Update event details below.' : 'Fill in the information for the new event.'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8 space-y-8">
          {/* Image Upload Section */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-full sm:w-64 h-40 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden shrink-0 relative group cursor-pointer">
              {formData.imageUrl ? (
                <>
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">Change Image</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-500 font-medium">Upload Banner</span>
                </div>
              )}
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-bold text-gray-700 mb-2">Event Banner URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl || ''}
                onChange={handleChange}
                placeholder="https://example.com/banner.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                required
              />
              <p className="text-xs text-gray-500 mt-2">Recommended size: 1200x630px (16:9 ratio).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Event Title</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-lg font-medium"
                placeholder="e.g., Intro to Azure Cloud"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Date & Time</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="date"
                  value={formData.date || ''}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="e.g., October 15, 2023 | 2:00 PM"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="e.g., Velasco Hall 101 or Teams Link"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category || 'workshop'}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              >
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="competition">Competition</option>
                <option value="social">Social</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
              <select
                name="status"
                value={formData.status || 'Upcoming'}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Past">Past</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Short Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription || ''}
              onChange={handleChange}
              rows={2}
              maxLength={150}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
              placeholder="A brief summary for the event card (max 150 chars)."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Description</label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription || ''}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
              placeholder="Detailed description of the event, speakers, agenda, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Registration Link (Optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LinkIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                name="registrationLink"
                value={formData.registrationLink || ''}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="https://forms.office.com/..."
              />
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured || false}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${formData.isFeatured ? 'bg-[#FFB900]' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.isFeatured ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Feature on Homepage</span>
            </label>

            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">Display Order</label>
              <input
                type="number"
                name="displayOrder"
                value={formData.displayOrder || 0}
                onChange={handleChange}
                className="w-32 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate('/admin/events')}
            className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl font-medium bg-[#7FBA00] text-white hover:bg-[#659400] transition-colors flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
}
