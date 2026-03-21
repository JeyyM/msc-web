import React from 'react';
import { Settings, Save, LayoutTemplate, Type, Image as ImageIcon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <p className="text-gray-500 mt-1">Manage global website content and configurations.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-[#007A53] transition-colors shadow-sm">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Section Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <div className="p-2 bg-[#00A4EF]/10 text-[#00A4EF] rounded-lg">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Home Hero Section</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Main Headline</label>
                <input
                  type="text"
                  defaultValue="Empowering the Next Generation of Tech Leaders"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subheadline</label>
                <textarea
                  rows={3}
                  defaultValue="Join the official Microsoft Student Clubs chapter at De La Salle University. We build, learn, and innovate together."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <div className="p-2 bg-[#F25022]/10 text-[#F25022] rounded-lg">
                <Type className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Social Media Links</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Facebook URL</label>
                  <input
                    type="url"
                    defaultValue="https://facebook.com/dlsumsc"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F25022] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Instagram URL</label>
                  <input
                    type="url"
                    defaultValue="https://instagram.com/dlsumsc"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F25022] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">LinkedIn URL</label>
                  <input
                    type="url"
                    defaultValue="https://linkedin.com/company/dlsumsc"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F25022] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="msc@dlsu.edu.ph"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F25022] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <div className="p-2 bg-[#7FBA00]/10 text-[#7FBA00] rounded-lg">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Brand Assets</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Logo URL</label>
                <div className="w-full h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center mb-3">
                  <div className="w-12 h-12 grid grid-cols-2 gap-1">
                    <div className="bg-[#F25022] rounded-sm"></div>
                    <div className="bg-[#7FBA00] rounded-sm"></div>
                    <div className="bg-[#00A4EF] rounded-sm"></div>
                    <div className="bg-[#FFB900] rounded-sm"></div>
                  </div>
                </div>
                <input
                  type="url"
                  placeholder="Leave empty to use default CSS logo"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#7FBA00] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
